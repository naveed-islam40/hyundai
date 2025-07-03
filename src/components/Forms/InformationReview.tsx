import PanelInfo from "@/components/InformationReview/PanelInfo";
import { apiConfig, buildUrl } from "@/config/apiConfig";
import { usePaintServiceContext } from "@/context/PaintMatrixContext";
import { filterByDealerInfo } from "@/helper/filterByDealerInfo";
import { getRatesByCBSA } from "@/helper/getRatesByCBSA";
import { transformToHyperDrive } from "@/helper/transformToHyperDrive";
import { usePrint } from "@/hook/usePrint";
import { hyperdriveService } from "@/services/hyperdriveApi";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomerInfo from "../InformationReview/CustomerInfo";
import DealerInfo from "../InformationReview/DealerInfo";
import ShopInformation from "../InformationReview/ShopInformation";
import VehicleInfo from "../InformationReview/VehicleInfo";
import { Button } from "../ui/button";
import PCTTable from "./PCTTable";

interface CustomerInfoType {
  firstName?: string;
  lastName?: string;
  email?: string;
  telephone?: string;
  zipCode?: string;
}

interface DealerInfoType {
  serviceAdvisorFirstName?: string;
  serviceAdvisorLastName?: string;
  emailAddress2?: string;
  telephone2?: string;
  extension?: string;
  poNumber?: string;
  dealerCode?: string;
  zipCode?: string;
  dealerName?: string;
}

interface InformationReviewProps {
  customerInfo: CustomerInfoType;
  dealerInfo: DealerInfoType;
  scheduleDate: string | string[];
}

export default function InformationReview({
  customerInfo,
  scheduleDate,
  dealerInfo,
}: InformationReviewProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const componentRef = useRef<HTMLDivElement>(null);

  const { paintServiceInfo, getDealerInfo, selectedPanels, pct } =
    usePaintServiceContext();

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [panelDetails, setPanelDetails] = useState<
    { name?: string; repairType?: string; cost?: number }[]
  >([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [courtesyNote, setCourtesyNote] = useState(() => {
    return localStorage.getItem("dealerCourtesyNote") || "";
  });
  const [noteError, setNoteError] = useState("");

  const [isDealerCourtesy, setIsDealerCourtesy] = useState(false);

  const noteRef = useRef<HTMLTextAreaElement>(null);
  const handlePrint = usePrint(componentRef);

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setCourtesyNote(val);
    setNoteError(val.trim() ? "" : "Courtesy vehicle note is required.");
    localStorage.setItem("dealerCourtesyNote", val);
  };

  const generateReferenceNumber = () => {
    const prefix = "HMA";
    const random = Math.floor(10000000 + Math.random() * 90000000);
    return `${prefix}-${random}`;
  };

  const [referenceNumber] = useState(() => generateReferenceNumber());

  useEffect(() => {
    localStorage.setItem("referenceNumber", referenceNumber);
  }, [referenceNumber]);

  useEffect(() => {
    if (Array.isArray(selectedPanels)) {
      const extractedDetails = selectedPanels.map((panel: any) => ({
        name: panel.name,
        repairType: panel.repairType,
        cost: panel.cost,
      }));
      setPanelDetails(extractedDetails);
    }
  }, [
    paintServiceInfo,
    customerInfo,
    dealerInfo,
    scheduleDate,
    selectedPanels,
  ]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isDealerCourtesy && !courtesyNote.trim()) {
      setNoteError("Courtesy vehicle note is required.");
      noteRef.current?.focus();
      return;
    }

    const totalCost = localStorage.getItem("totalCost") || "0";
    const rental1 = localStorage.getItem("rental1") || "";
    const rental2 = localStorage.getItem("rental2") || "";
    const rentalCompany = localStorage.getItem("rentalCompany") || "";
    const agreed = localStorage.getItem("agreed") || "";

    const { bodyRate, refinishRate, paintMaterialRate } = getRatesByCBSA(
      paintServiceInfo.cbsa
    );
    const noOfPanels = Array.isArray(selectedPanels)
      ? selectedPanels.length
      : 0;
    const coverCar = +(10 + 0.3 * bodyRate).toFixed(2);
    const corrosionProtection = +(10 + 0.3 * bodyRate).toFixed(2);
    const hazardousWaste = 5.0;
    const colorSand = +(0.3 * noOfPanels * refinishRate).toFixed(2);
    const colorTint = +(1 * refinishRate).toFixed(2);

    const enrichedPaintServiceInfo = {
      ...paintServiceInfo,
      bodyRate,
      refinishRate,
      paintMaterialRate,
      coverCar,
      corrosionProtection,
      hazardousWaste,
      colorSand,
      colorTint,
      noOfPanels,
    };

    const payload = {
      dealerInfo,
      customerInfo,
      scheduleDate,
      selectedPanels,
      paintServiceInfo: enrichedPaintServiceInfo,
      totalCost: Number(totalCost),
      panelDetails,
      pct,
      rental1,
      rental2,
      rentalCompany,
      agreed,
      referenceNumber,
      dealerCourtesyNote: courtesyNote.trim(),
      isDealerCourtesy,
      isValetService: isDealerCourtesy ? "YES" : "NO",
      dealershipEmail: isDealerCourtesy
        ? dealerInfo?.emailAddress2 ?? ""
        : paintServiceInfo?.opportunityDetail?.dealershipEmail ?? "",
    };

    try {
      setIsSubmitting(true);
      // Send to HyperDrive first
      try {
        const hyperdriveData = transformToHyperDrive({
          customerInfo,
          dealerInfo,
          paintServiceInfo: enrichedPaintServiceInfo,
          selectedPanels,
          scheduleDate,
          referenceNumber,
          totalCost: Number(totalCost),
        });

        // Step 1: Authenticate with HyperDrive API first
        console.log("Step 1: Authenticating with HyperDrive...");
        const authResponse = await hyperdriveService.authenticate();
        console.log("Authentication successful:", authResponse);

        // Step 2: Create opportunity
        console.log("Step 2: Creating opportunity...");
        const hyperdriveResponse = await hyperdriveService.createOpportunity(
          hyperdriveData
        );
        console.log("HyperDrive opportunity created:", hyperdriveResponse);
        console.log("HyperDrive response data:", hyperdriveResponse.data);
        console.log(
          "Extracted opportunityId:",
          hyperdriveResponse.data?.opportunityId
        );

        // Store HyperDrive response for reference
        const opportunityId = hyperdriveResponse.data?.opportunityId;
        localStorage.setItem("hyperdriveOpportunityId", opportunityId || "");
        console.log("OpportunityId to use for note:", opportunityId);
        console.log("isDealerCourtesy:", isDealerCourtesy);
        console.log("courtesyNote.trim():", courtesyNote.trim());

        // Send note to HyperDrive for EVERY opportunity (for testing)
        if (opportunityId) {
          // Create comprehensive note with all information
          const submitDate = new Date().toLocaleString();
          const formatValue = (val: any) => val || "Not Provided";

          const comprehensiveNote = `
HYUNDAI PAINT WARRANTY - INFORMATION REVIEW SUMMARY
=================================================
Reference Number: ${referenceNumber}
Date of Submission: ${submitDate}
Submitted by: ${formatValue(dealerInfo?.serviceAdvisorFirstName)} ${formatValue(
            dealerInfo?.serviceAdvisorLastName
          )}

CUSTOMER INFORMATION
-------------------
Name: ${formatValue(customerInfo?.firstName)} ${formatValue(
            customerInfo?.lastName
          )}
Email: ${formatValue(customerInfo?.email)}
Telephone: ${formatValue(customerInfo?.telephone)}
Zip Code: ${formatValue(customerInfo?.zipCode)}

DEALER INFORMATION
-----------------
Service Advisor: ${formatValue(
            dealerInfo?.serviceAdvisorFirstName
          )} ${formatValue(dealerInfo?.serviceAdvisorLastName)}
Email: ${formatValue(dealerInfo?.emailAddress2)}
Telephone: ${formatValue(dealerInfo?.telephone2)}
Extension: ${formatValue(dealerInfo?.extension)}
PO Number: ${formatValue(dealerInfo?.poNumber)}

VEHICLE SCHEDULE DATE
--------------------
${formatValue(
  Array.isArray(scheduleDate) ? scheduleDate.join(", ") : scheduleDate
)}

PAINT & VEHICLE INFORMATION
--------------------------
CBSA: ${formatValue(paintServiceInfo?.cbsa)}
Year: ${formatValue(paintServiceInfo?.year)}
Make: ${formatValue(paintServiceInfo?.make)}
Model: ${formatValue(paintServiceInfo?.model)}
VIN: ${formatValue(paintServiceInfo?.vin)}
Paint Material: ${formatValue(paintServiceInfo?.paintMaterials)}

RENTAL REQUEST INFO
------------------
Courtesy Vehicle Provided: ${
            rental1 === "yes" || rental1 === "courtesy"
              ? "REQUIRED"
              : "NOT REQUIRED"
          }
Rental Assistance: ${rental2 === "yes" ? "REQUIRED" : "NOT REQUIRED"}
Rental Carrier: ${formatValue(rentalCompany)}
Valet Service: ${isDealerCourtesy ? "YES" : "NO"}
Dealership Email: ${formatValue(
            isDealerCourtesy
              ? dealerInfo?.emailAddress2
              : paintServiceInfo?.opportunityDetail?.dealershipEmail
          )}

${courtesyNote.trim() ? `COURTESY VEHICLE NOTE:\n${courtesyNote.trim()}\n` : ""}

SELECTED PANELS
--------------
${
  panelDetails
    ?.map((panel: any) => {
      const cost = panel?.cost ? Number(panel.cost).toFixed(2) : "0.00";
      return `• ${panel?.name || "Unknown Panel"} - ${
        panel?.repairType || "Unknown Type"
      } - $${cost}`;
    })
    .join("\n") || "No panels selected"
}

TOTAL COST: $${Number(totalCost).toFixed(2)}
          `.trim();

          console.log(
            "Posting comprehensive note to HyperDrive:",
            comprehensiveNote
          );
          try {
            const noteResponse = await axios.post(
              `${apiConfig.hyundaiBaseUrl}/hyperdrive/opportunities/${opportunityId}/notes`,
              {
                noteText: comprehensiveNote,
                noteTypeId: 6,
              },
              {
                headers: { "Content-Type": "application/json" },
              }
            );

            console.log(
              "HyperDrive note posted successfully:",
              noteResponse.data
            );
          } catch (noteError) {
            console.error("Failed to post note to HyperDrive:", noteError);
            // Don't fail the process if note posting fails
          }
        } else {
          console.log(
            "Note posting skipped - no opportunityId:",
            opportunityId
          );
        }

        // HyperDrive API successful, now continue with email
        console.log("HyperDrive process completed successfully");

        // Continue with existing email functionality - don't let email failure block the process
        try {
          const response = await axios.post(buildUrl.sendEmails(), payload, {
            headers: { "Content-Type": "application/json" },
          });

          if (response?.data?.success) {
            console.log("Email sent successfully");
          } else {
            console.warn("Email failed to send, but continuing process");
            alert(
              "Failed to send email, but HyperDrive opportunity was created successfully"
            );
          }
        } catch (emailError) {
          console.error("Email sending failed:", emailError);
          // Don't stop the process if email fails - that's someone else's job
        }

        // Only navigate to success page if HyperDrive was successful
        console.log("All processes completed - navigating to success page");
        navigate(`?page=6&skip=schedule`);
      } catch (hyperdriveError: any) {
        console.error("HyperDrive API error:", hyperdriveError);
        setIsSubmitting(false);

        // Show detailed error message and stay on current page
        let errorMessage = "HyperDrive API Error: ";
        if (hyperdriveError?.response?.data?.error) {
          errorMessage += hyperdriveError.response.data.error;
        } else if (hyperdriveError?.response?.data?.message) {
          errorMessage += hyperdriveError.response.data.message;
        } else if (hyperdriveError?.message) {
          errorMessage += hyperdriveError.message;
        } else {
          errorMessage += "Unknown error occurred";
        }

        alert(errorMessage + "\n\nPlease try again.");
        return; // Stay on current page
      }
    } catch (err: any) {
      console.error(
        "Overall process failed:",
        err?.response?.data || err.message
      );
      setIsSubmitting(false);
      alert("Error processing request. Please try again.");
    }
  };

  const matchingEntry = filterByDealerInfo(
    getDealerInfo().dealerCode,
    getDealerInfo().zipCode
  );

  useEffect(() => {
    const rental = localStorage.getItem("rental1")?.toLowerCase().trim();
    setIsDealerCourtesy(rental === "courtesy");
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:p-5 pb-3 bg-white shadow-sm rounded-lg h-full flex flex-col justify-between"
      noValidate
    >
      <div>
        <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
          <h1 className="text-center base-sm:text-left text-lg font-bold max-base-sm:w-full">
            INFORMATION REVIEW
          </h1>
          <p className="text-xs text-white italic hidden base-sm:block">
            *Please Note: Review all the information. Use the PREV to make
            necessary changes.
          </p>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <h2 className="text-red-600 font-bold text-lg">
                TOTAL COST REVIEW by {matchingEntry?.dealerInfo?.dealerName}
              </h2>
              <div className="mt-10 mb-12">
                <div className="grid grid-cols-1 base-lg:grid-cols-2 gap-6 mb-4">
                  <div className="text-sm text-gray-600 italic mb-4">
                    TRANSACTION DATE/TIME: {currentDateTime.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 italic">
                    Reference Number: <strong>{referenceNumber}</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mb-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm flex items-center gap-1 text-gray-500"
                onClick={handlePrint}
                type="button"
              >
                Print Copy
                <img src="img/printer 1.svg" className="ml-2 w-5 h-5" />
              </Button>
              <div className="hidden print:block" ref={componentRef}>
                <div className="p-6 text-sm space-y-6 print:bg-white print:text-black">
                  <h1 className="text-center text-lg font-bold">
                    INFORMATION REVIEW
                  </h1>
                  <CustomerInfo customerInfo={customerInfo} />
                  <DealerInfo dealerInfo={dealerInfo} />
                  <ShopInformation paintServiceInfo={paintServiceInfo} />
                  <VehicleInfo
                    paintServiceInfo={paintServiceInfo}
                    scheduleDate={scheduleDate}
                  />
                  <p className="text-sm">
                    <strong>Courtesy Vehicle Note:</strong>{" "}
                    {courtesyNote || "N/A"}
                  </p>
                  <PanelInfo selectedPanels={selectedPanels} />
                  {/* <PrintableTable /> */}
                </div>
              </div>
            </div>
          </div>

          <CustomerInfo customerInfo={customerInfo} />
          <DealerInfo dealerInfo={dealerInfo} />
          <ShopInformation paintServiceInfo={paintServiceInfo} />
          <VehicleInfo
            paintServiceInfo={paintServiceInfo}
            scheduleDate={scheduleDate}
          />
          <PanelInfo selectedPanels={selectedPanels} />
          <div>
            <h2 className="text-red-600 font-bold text-lg mb-4">
              Shop Panel Information
            </h2>
            <PCTTable />
          </div>

          {isDealerCourtesy && (
            <div className="mb-6">
              <label
                htmlFor="dealerCourtesyNote"
                className="block font-semibold text-gray-700 mb-1"
              >
                Courtesy Vehicle Note:
              </label>
              <textarea
                id="dealerCourtesyNote"
                rows={3}
                className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                  noteError
                    ? "border-red-600 focus:ring-red-600"
                    : "border-gray-300 focus:ring-red-600"
                }`}
                value={courtesyNote}
                onChange={handleNoteChange}
                placeholder="Add a note about rental or courtesy vehicle..."
                required={isDealerCourtesy}
                disabled={isSubmitting}
                ref={noteRef}
              />
              {noteError && (
                <p className="text-red-600 text-sm mt-1">{noteError}</p>
              )}
            </div>
          )}

          <div className="flex justify-end gap-2 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors cursor-pointer"
              type="button"
              disabled={isSubmitting}
            >
              PREV
            </button>
            <button
              type="submit"
              className="bg-red-600 text-white cursor-pointer px-6 py-2 rounded hover:bg-red-700 transition-colors flex items-center disabled:opacity-70"
              disabled={
                isSubmitting || (isDealerCourtesy && !courtesyNote.trim())
              }
            >
              {isSubmitting ? "Sending..." : "SAVE & SUBMIT"}
            </button>
          </div>

          <Link to="/" className="flex justify-end pt-4">
            <button
              className="bg-black cursor-pointer text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
              disabled={isSubmitting}
            >
              Close session
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
