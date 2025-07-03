import PanelInfo from "@/components/InformationReview/PanelInfo";
import { usePaintServiceContext } from "@/context/PaintMatrixContext";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import CustomerInfo from "../InformationReview/CustomerInfo";
import DealerInfo from "../InformationReview/DealerInfo";
import ShopInformation from "../InformationReview/ShopInformation";
import VehicleInfo from "../InformationReview/VehicleInfo";
import { filterByDealerInfo } from "@/helper/filterByDealerInfo";
import PCTTable from "./PCTTable";
import PrintableTable from "./PCTPrint";
import { usePrint } from "@/hook/usePrint";

export default function VINFetch({
  customerInfo,
  scheduleDate,
  dealerInfo,
}: any) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  queryParams.set("page", "3");
  const componentRef = useRef(null);

  const { paintServiceInfo, getDealerInfo, selectedPanels } =
    usePaintServiceContext();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const handlePrint = usePrint(componentRef);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
    <div className="bg-white rounded-md shadow-sm">



<form className="min-h-screen bg-gray-100 p-6 sm:p-12 flex flex-col items-center">
  <div className="w-full bg-white shadow-xl rounded-2xl overflow-hidden">
    
    {/* Header */}
    <div className="bg-black text-white px-8 py-6 flex flex-col sm:flex-row justify-between items-center border-b">
      <h1 className="text-2xl font-bold text-center sm:text-left">
        WELCOME, {matchingEntry?.dealerInfo?.dealerName}
      </h1>
      <p className="text-xs italic mt-2 sm:mt-0 text-gray-300 text-center sm:text-right">
        *Review all information carefully. Use "Prev" to make changes.
      </p>
    </div>

    {/* Main Content */}
    <div className="p-8 space-y-10">
      
      {/* Dealer Title & Time */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
        <div>
          <h2 className="text-red-600 text-xl font-semibold">
            Estimate Reviewed by {matchingEntry?.dealerInfo?.dealerName}
          </h2>
        </div>
        <p className="text-sm text-gray-500 mt-2 sm:mt-0 italic">
          Transaction Time: {currentDateTime.toLocaleString()}
        </p>
      </div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="border p-4 rounded-md shadow-sm bg-gray-50">
            <CustomerInfo customerInfo={customerInfo} />
          </div>

          <div className="border p-4 rounded-md shadow-sm bg-gray-50">
            <ShopInformation paintServiceInfo={paintServiceInfo} />
          </div>

          <div className="border p-4 rounded-md shadow-sm bg-gray-50">
            <PanelInfo selectedPanels={selectedPanels} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="border p-4 rounded-md shadow-sm bg-gray-50">
            <DealerInfo dealerInfo={dealerInfo} />
          </div>

          <div className="border p-4 rounded-md shadow-sm bg-gray-50">
            <VehicleInfo
              paintServiceInfo={paintServiceInfo}
              scheduleDate={scheduleDate}
            />
          </div>
        </div>
      </div>

      <div className="border p-4 rounded-md shadow-sm bg-gray-50">
            <h3 className="text-md font-bold text-gray-700 mb-2">Panel Cost Summary</h3>
            <PCTTable />
          </div>


      {/* Print Button */}
      <div className="flex justify-between sm:justify-end gap-4 pt-4 border-t border-gray-200 pt-6">
        <button
          type="button"
          onClick={handlePrint}
          className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition"
        >
          Print Complete Summary
        </button>
      </div>

      {/* Hidden Printable Version */}
      <div className="hidden print:block" ref={componentRef}>
        <div className="p-6 text-sm space-y-6 print:bg-white print:text-black">
          <h1 className="text-center text-lg font-bold">INFORMATION REVIEW</h1>
          <CustomerInfo customerInfo={customerInfo} />
          <DealerInfo dealerInfo={dealerInfo} />
          <ShopInformation paintServiceInfo={paintServiceInfo} />
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
</form>

    </div>
  );
}