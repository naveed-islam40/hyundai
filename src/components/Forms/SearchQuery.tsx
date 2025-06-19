import PanelInfo from "@/components/InformationReview/PanelInfo";
import { usePaintServiceContext } from "@/context/PaintMatrixContext";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomerInfo from "../InformationReview/CustomerInfo";
import DealerInfo from "../InformationReview/DealerInfo";
import ShopInformation from "../InformationReview/ShopInformation";
import VehicleInfo from "../InformationReview/VehicleInfo";
import ShopPanelInfo from "../InformationReview/ShopPanelInfo";
import { Button } from "../ui/button";
import { filterByDealerInfo } from "@/helper/filterByDealerInfo";
import { useReactToPrint } from "react-to-print";

export default function InformationReview({
  customerInfo,
  scheduleDate,
  selectedPanels,
  dealerInfo,
}: any) {
  const location = useLocation();
  const navigate = useNavigate();
  const { paintServiceInfo, getDealerInfo } = usePaintServiceContext();
  const queryParams = new URLSearchParams(location.search);
  queryParams.set("page", "3");
  const [_, setFormData] = useState<any>({});
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [panelDetails, setPanelDetails] = useState<any[]>([]);

  useEffect(() => {
    setFormData({ paintServiceInfo, customerInfo, dealerInfo, scheduleDate });

    // Extract and set panel details separately
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const totalCost = localStorage.getItem("totalCost");
    const payload = {
      dealerInfo,
      customerInfo,
      scheduleDate,
      selectedPanels,
      paintServiceInfo,
      totalCost: Number(totalCost),
      panelDetails,
    };

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        alert("Email sent successfully!");
        navigate(`?page=6&skip=schedule`);
      } else {
        alert("Failed to send email");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      alert("Error sending email");
    }
  };

  const matchingEntry = filterByDealerInfo(
    getDealerInfo().dealerCode,
    getDealerInfo().zipCode
  );

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFormData({ paintServiceInfo, customerInfo, dealerInfo, scheduleDate });
  }, [paintServiceInfo, customerInfo, dealerInfo, scheduleDate]);

  return (
    <form className="sm:p-5 pb-3 bg-white shadow-sm rounded-lg h-full flex flex-col justify-between">
      <div className="">
        <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
          <h1 className="text-center base-sm:text-left text-lg font-bold  max-base-sm:w-full">
            SHOP SEARCH QUERY INFORMATION
          </h1>
          <p className="text-xs text-white italic hidden base-sm:block">
            *Please Note: Review all the information.
          </p>
        </div>

        <div className="p-6">
          {/* Title and Customer */}
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <h2 className="text-red-600 font-bold text-lg">
                TOTAL COST REVIEW by {matchingEntry?.dealerInfo?.dealerName}
              </h2>
              <div className="mt-10 mb-12">
                <div className="grid grid-cols-1 base-lg:grid-cols-2 gap-6 mb-4">
                  {/* Current Date and Time */}
                  <div className="text-sm text-gray-600 italic mb-4">
                    TRANSACTION DATE/TIME: {currentDateTime.toLocaleString()}
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
                <img src="/img/printer 1.svg" className="ml-2 w-5 h-5" />
              </Button>
              <div className="hidden print:block" ref={componentRef}>
                <div className="p-6 text-sm space-y-6 print:bg-white print:text-black">
                  {/* header  */}
                  <div>
                    <h1 className="text-center text-lg font-bold">
                      INFORMATION REVIEW
                    </h1>
                  </div>
                  <CustomerInfo customerInfo={customerInfo} />
                  <DealerInfo dealerInfo={dealerInfo} />
                  <ShopInformation />
                  <VehicleInfo
                    paintServiceInfo={paintServiceInfo}
                    scheduleDate={scheduleDate}
                  />
                  <PanelInfo selectedPanels={selectedPanels} />
                  <ShopPanelInfo />
                </div>
              </div>
            </div>
          </div>
          <CustomerInfo customerInfo={customerInfo} />
          {/* Dealer Information */}
          <DealerInfo dealerInfo={dealerInfo} />

          {/*Shop Location Information */}
          <ShopInformation />

          {/* Vehicle Information */}
          <VehicleInfo
            paintServiceInfo={paintServiceInfo}
            scheduleDate={scheduleDate}
          />

          {/* Body Repair Status */}
          <PanelInfo selectedPanels={selectedPanels} />

          {/* Shop Panel Information */}
          <ShopPanelInfo />
        </div>
      </div>
    </form>
  );
}
