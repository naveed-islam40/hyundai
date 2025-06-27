import PanelInfo from "@/components/InformationReview/PanelInfo";
import { usePaintServiceContext } from "@/context/PaintMatrixContext";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomerInfo from "../InformationReview/CustomerInfo";
import DealerInfo from "../InformationReview/DealerInfo";
import ShopInformation from "../InformationReview/ShopInformation";
import VehicleInfo from "../InformationReview/VehicleInfo";
import { Button } from "../ui/button";
import { filterByDealerInfo } from "@/helper/filterByDealerInfo";
import axios from "axios";
import PCTTable from "./PCTTable";
import PrintableTable from "./PCTPrint";
import { usePrint } from "@/hook/usePrint";

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

    const payload = {
      dealerInfo,
      customerInfo,
      scheduleDate,
      selectedPanels,
      paintServiceInfo,
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
      const response = await axios.post(
        "http://localhost:8000/send-mail.php",
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response?.data?.success) {
        navigate(`?page=6&skip=schedule`);
      } else {
        alert("Failed to send email");
      }
    } catch (err: any) {
      console.error(
        "Email sending failed:",
        err?.response?.data || err.message
      );
      alert("Error sending email. Please try again.");
    } finally {
      setIsSubmitting(false);
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
      className="sm:p-5 pb-3 bg-white shadow-sm rounded-lg h-full flex flex-col justify-between max-w-5xl"
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
                  <PrintableTable />
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
