import PanelInfo from "@/components/InformationReview/PanelInfo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { usePaintServiceContext } from "@/context/PaintMatrixContext";

export default function InformationReview({
  customerInfo,
  scheduleDate,
  selectedPanels,
  dealerInfo,
}: any) {
  const location = useLocation();
  const navigate = useNavigate();
  const { paintServiceInfo } = usePaintServiceContext();
  const queryParams = new URLSearchParams(location.search);
  queryParams.set("page", "3");
  const prevPath = queryParams?.toString();
  const [, setFormData] = useState<any>({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`?page=6&skip=schedule`);
  };

  useEffect(() => {
    setFormData({ paintServiceInfo, customerInfo, dealerInfo, scheduleDate });
  }, [paintServiceInfo, customerInfo, dealerInfo, scheduleDate]);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
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
                TOTAL COST REVIEW by DEALER xxxxx
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
              >
                Print Copy
                <img src="/img/printer 1.svg" className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
          {/* Customer Information */}
          <div className="mb-6">
            <h3 className="text-red-600 font-bold text-sm mb-2">
              Customer Information
            </h3>
            <div className="grid grid-cols-1 base-lg:grid-cols-3 gap-4">
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

          {/* Dealer Information */}
          <div className="mb-6">
            <h3 className="text-red-600 font-bold text-sm mb-2">
              Dealer Information
            </h3>
            <div className="grid grid-cols-1 base-lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 font-bold">
                <p className="text-sm">Service Advisor Name:</p>
                <p>
                  {`${dealerInfo?.serviceAdvisorFirstName || ""} ${
                    dealerInfo?.serviceAdvisorLastName || ""
                  }` || "SMITH, JANE"}
                </p>
              </div>
              <div className="flex items-center gap-2 font-bold">
                <p className="text-sm">Email:</p>
                <p>{`${dealerInfo?.emailAddress2 || ""}`}</p>
              </div>
              <div className="flex items-center gap-2 font-bold">
                <p className="text-sm">Telephone:</p>
                <p>{dealerInfo?.telephone2 || "(972) 123-4567"}</p>
              </div>
              <div className="flex items-center gap-2 font-bold">
                <p className="text-sm">PO Number:</p>
                <p>{dealerInfo?.poNumber || "75189"}</p>
              </div>
            </div>
            <div className="border-b border-gray-200 mt-4"></div>
          </div>

          {/* Vehicle Information */}

          <div className="mb-6 flex border-b pb-5 flex-col base-lg:flex-row">
            <div className="flex-1">
              <h3 className="text-red-600 font-bold text-sm mb-2">
                Vehicle Information
              </h3>

              <div className="grid grid-cols-1 base-lg:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 font-bold">
                  <p className="text-sm font-bold">CBSA:</p>
                  <p>{paintServiceInfo?.cbsa || "CA Dir San Ramon"}</p>
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <p className="text-sm font-bold">Year:</p>
                  <p>{paintServiceInfo?.year || 2017}</p>
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <p className="text-sm font-bold">Make:</p>
                  <p>{paintServiceInfo?.make || "Hyundai"}</p>
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <p className="text-sm font-bold">Model:</p>
                  <p>{paintServiceInfo?.model || "Sonata"}</p>
                </div>
                <div className="base-lg:col-span-2 flex items-center gap-2 font-bold">
                  <p className="text-sm font-bold">VIN:</p>
                  <p>{paintServiceInfo?.vin || "5NPE34ZJXNH140004"}</p>
                </div>
              </div>
            </div>
            {Object.entries(scheduleDate || {}).length > 0 && (
              <div className="bg-[#E51C22] text-white p-4 rounded w-[289px] flex flex-col justify-between mt-10 base-lg:mt-0">
                <h3 className="font-bold text-center text-xl">
                  SCHEDULED DATE
                </h3>
                <div className="flex items-center justify-center mt-1">
                  <div className="mr-8">
                    <p className="text-xs text-center">DATE</p>
                    <p className="font-bold text-2xl">
                      {new Date(
                        scheduleDate?.date || ""
                      ).toLocaleDateString() || ""}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-center">TIME</p>
                    <p className="font-bold text-2xl">
                      {scheduleDate?.time || ""}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Body Repair Status */}
          <PanelInfo selectedPanels={selectedPanels} />
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-2 mt-8">
            <Link
              to={`?${prevPath}`}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              PREV
            </Link>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-red-600 text-white cursor-pointer px-6 py-2 rounded hover:bg-red-700 transition-colors flex items-center"
            >
              SAVE &amp; SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
