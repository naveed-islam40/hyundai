import PanelInfo from "@/components/InformationReview/PanelInfo";
import { Link } from "react-router-dom";

export default function InformationReview({
  PaintServiceInfo,
  customerInfo,
  scheduleDate,
}: any) {
  console.log("PaintServiceInfo", PaintServiceInfo);
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
          <h1 className="text-lg font-bold">INFORMATION REVIEW</h1>
          <p className="text-xs text-white italic">
            *All fields required to process request
          </p>
        </div>

        <div className="p-6">
          {/* Title and Customer */}
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <h2 className="text-red-600 font-bold text-lg">
                TOTAL COST REVIEW
              </h2>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="flex items-center gap-2">
                {" "}
                <p className="text-sm text-[#E51C22] font-bold">Customer:</p>
                <p className="font-bold">
                  {`${customerInfo?.firstName || ""} ${
                    customerInfo?.lastName || ""
                  }` || "SMITH, JANE"}
                </p>
              </span>
              <div className="flex items-center justify-end mt-1">
                <p className="text-sm font-semibold">Print Copy</p>
                <img src="/img/printer 1.svg" className="ml-2 w-5 h-5" />
              </div>
            </div>
          </div>
          {/* Customer Information */}
          <div className="mb-6">
            <h3 className="text-red-600 font-bold text-sm mb-2">
              Customer Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 font-bold">
                <p className="text-sm">Customer Name:</p>
                <p>
                  {`${customerInfo?.firstName || ""} ${
                    customerInfo?.lastName || ""
                  }` || "SMITH, JANE"}
                </p>
              </div>
              <div className="flex items-center gap-2 font-bold">
                <p className="text-sm">Email:</p>
                <p>{`${customerInfo?.email || ""}`}</p>
              </div>
              <div className="flex items-center gap-2 font-bold">
                <p className="text-sm">Telephone:</p>
                <p>{customerInfo?.phone || "(972) 123-4567"}</p>
              </div>
              <div className="flex items-center gap-2 font-bold">
                <p className="text-sm">Zip Code:</p>
                <p>{customerInfo?.zipCode || "75189"}</p>
              </div>
            </div>
            <div className="border-b border-gray-200 mt-4"></div>
          </div>
          {/* Vehicle Information */};
          <div className="mb-6 flex border-b pb-5">
            <div className="flex-1">
              <h3 className="text-red-600 font-bold text-sm mb-2">
                Vehicle Information
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4 flex-2">
                  <div className="flex items-center font-bold gap-2">
                    <p className="text-sm font-bold">CRSA:</p>
                    <p>{PaintServiceInfo?.crsa || "CA Dir San Ramon"}</p>
                  </div>
                  <div className="flex items-center font-bold gap-2">
                    <p className="text-sm font-bold">Year:</p>
                    <p>{PaintServiceInfo?.year || 2017}</p>
                  </div>
                  <div className="flex items-center font-bold gap-2">
                    <p className="text-sm font-bold">Make:</p>
                    <p>{PaintServiceInfo?.make || "Hyundai"}</p>
                  </div>
                  <div className="flex items-center font-bold gap-2">
                    <p className="text-sm font-bold">Model:</p>
                    <p>{PaintServiceInfo?.model || "Sonata"}</p>
                  </div>
                  <div className="col-span-2 flex items-center gap-2 font-bold">
                    <p className="text-sm font-bold">VIN:</p>
                    <p>{PaintServiceInfo?.vin || "5NPE34ZJXNH140004"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#E51C22] text-white p-4 rounded w-[289px] flex flex-col justify-between ml-auto">
              <h4 className="font-bold text-base text-center">
                SCHEDULED DATE
              </h4>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-8">
                  <p className="text-xs text-center">DATE</p>
                  <p className="font-bold">
                    {new Date(scheduleDate?.date).toLocaleDateString() ||
                      "06/05/2025"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-center">TIME</p>
                  <p className="font-bold">
                    {new Date(scheduleDate?.time).toLocaleTimeString() ||
                      "2:00pm"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Body Repair Status */}
          <PanelInfo selectedPanels={PaintServiceInfo?.selectedPanels} />
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-2 mt-8">
            <Link
              to="?page=3"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              PREV
            </Link>
            <Link
              to="?page=5"
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors flex items-center"
            >
              NEXT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
