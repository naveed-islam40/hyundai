import PanelInfo from "@/components/InformationReview/PanelInfo";
import { Link } from "react-router-dom";

export default function InformationReviewMobile({
  PaintServiceInfo,
  customerInfo,
  scheduleDate,
}: any) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Total Cost Review Header */}
      <div className="bg-white p-4">
        <h1 className="text-[#E51C22] font-bold text-xl">Total Cost Review</h1>
      </div>

      {/* Scheduled Date Box */}
      <div className="bg-[#E51C22] text-white p-4 mx-10 rounded">
        <h4 className="font-bold text-base text-center uppercase mb-2">
          Scheduled Date
        </h4>
        <div className="flex items-center justify-center">
          <div className="mr-8">
            <p className="text-xs text-center">DATE</p>
            <p className="font-bold text-center">
              {new Date(scheduleDate?.date).toLocaleDateString() ||
                "06/05/2025"}
            </p>
          </div>
          <div>
            <p className="text-xs text-center">TIME</p>
            <p className="font-bold text-center">
              {scheduleDate?.time || "2:00pm"}
            </p>
          </div>
        </div>
      </div>

      {/* Customer Information */}
      <div className="p-4">
        <h3 className="text-[#E51C22] font-bold text-base mb-2">
          Customer Information
        </h3>
        <div className="flex justify-between mb-1">
          <p className="text-sm font-bold">Customer Name:</p>
          <p className="text-sm font-bold">
            {`${customerInfo?.firstName || ""} ${
              customerInfo?.lastName || ""
            }` || "SMITH, JANE"}
          </p>
        </div>
        <div className="flex justify-between mb-1">
          <p className="text-sm font-bold">Email:</p>
          <p className="text-sm font-bold">
            {customerInfo?.email || "Smith.Jane@gmail.com"}
          </p>
        </div>
        <div className="flex justify-between mb-1">
          <p className="text-sm  font-bold">Telephone:</p>
          <p className="text-sm font-bold">
            {customerInfo?.phone || "(972) 123-4567"}
          </p>
        </div>
        <div className="flex justify-between mb-1">
          <p className="text-sm  font-bold">Zip Code:</p>
          <p className="text-sm font-bold">
            {customerInfo?.zipCode || "75189"}
          </p>
        </div>
      </div>

      {/* Vehicle Information */}
      <div className="p-4 border-t border-gray-200">
        <h3 className="text-[#E51C22] font-bold text-base mb-2">
          Vehicle Information
        </h3>
        <div className="flex justify-between mb-1">
          <p className="text-sm  font-bold">Year:</p>
          <p className="text-sm font-bold">
            {PaintServiceInfo?.year || "2022"}
          </p>
        </div>
        <div className="flex justify-between mb-1">
          <p className="text-sm  font-bold">Make & Model:</p>
          <p className="text-sm font-bold">{`${
            PaintServiceInfo?.make || "Hyundai"
          } ${PaintServiceInfo?.model || "Sonata"}`}</p>
        </div>
        <div className="flex justify-between mb-1">
          <p className="text-sm  font-bold">VIN:</p>
          <p className="text-sm font-bold">
            {PaintServiceInfo?.vin || "5NPE34ZJXNH140004"}
          </p>
        </div>
      </div>

      {/* Body Repair Status */}
      <PanelInfo selectedPanels={PaintServiceInfo?.selectedPanels} />

      {/* Navigation Buttons */}
      <div className="mt-auto p-4 flex justify-end gap-2">
        <Link
          to="?page=3"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
        >
          PREV
        </Link>
        <Link
          to="?page=5"
          className="bg-[#E51C22] text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          SAVE & SUBMIT
        </Link>
      </div>
    </div>
  );
}
