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

export default function InformationReview({
  customerInfo,
  scheduleDate,
  dealerInfo,
}: any) {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  queryParams.set("page", "3");
  const componentRef = useRef(null);

  const { paintServiceInfo, getDealerInfo, selectedPanels, pct } =
    usePaintServiceContext();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [panelDetails, setPanelDetails] = useState<any[]>([]);

  const handlePrint = usePrint(componentRef);

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
      pct,
    };

    try {
      const data = await axios.post(
        "http://localhost:5000/api/send-email",
        payload
      );

      if (data?.data?.success) {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <form className="sm:p-5 pb-3 bg-white shadow-sm rounded-lg h-full flex flex-col justify-between">
      <div className="">
        <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
          <h1 className="text-center base-sm:text-left text-lg font-bold  max-base-sm:w-full">
            INFORMATION REVIEW
          </h1>
          <p className="text-xs text-white italic hidden base-sm:block">
            *Please Note: Review all the information. Use the PREV to make
            necessary changes.
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
                  <PrintableTable />
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

          {/* <ShopPanelInfo /> */}
          <div>
            <h2 className="text-red-600 font-bold text-lg mb-4">
              Shop Panel Information
            </h2>
            <PCTTable />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-2 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors cursor-pointer"
              type="button"
            >
              PREV
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-red-600 text-white cursor-pointer px-6 py-2 rounded hover:bg-red-700 transition-colors flex items-center"
            >
              SAVE &amp; SUBMIT
            </button>
          </div>
          <Link to={"/"} className="flex justify-end pt-4">
            <button className="bg-black cursor-pointer text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
              Close session
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
