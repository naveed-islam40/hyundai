import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PanelDetails from "./RightBar/PanelDetails";

export default function RepairEstimate({ selectedPanels }: any) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page");

  const imageSrc =
    page === "1"
      ? "/img/Mobile Steps.svg"
      : page === "2"
      ? "/img/Mobile Steps (1).svg"
      : page === "3"
      ? "public/img/Mobile Steps (2).svg"
      : page === "4"
      ? "/img/Mobile Steps (3).svg"
      : page === "5"
      ? "/img/Mobile Steps (4).svg"
      : "/img/Mobile Steps (4).svg";

  const [total, setTotal] = useState(0);
  const [showFullDetails, setShowFullDetails] = useState(false);

  useEffect(() => {
    const total = localStorage.getItem("totalCost");
    setTotal(Number(total));
  }, [selectedPanels]);
  return (
    <div className="bg-white py-8 my-5 sm:mx-5 rounded-md">
      <div className="max-w-xl mx-auto">
        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <img
            src={imageSrc}
            alt="Repair estimate progress steps showing 4 steps"
            className="w-[60%] h-auto"
          />
        </div>

        {/* Estimated Repair Charges */}
        <div className={`border-t-2 border-black`}>
          <h2 className="text-xl font-medium text-gray-700 mb-4 ">
            Estimated Repair Charges
          </h2>
          <div className="bg-white p-4 border border-gray-200 rounded">
            <p className="text-sm text-gray-600 mb-2 font-bold">
              *Amount Shown is an ESTIMATE of Repair Total.
            </p>
            <div className="flex justify-end items-end flex-col">
              <div className="text-xl font-bold">
                {total ? `$${total}` : "-"}
              </div>
              {Object.keys(selectedPanels || {}).length > 0 && (
                <span
                  className="text-xs text-[#E51C22] font-bold py-4 cursor-pointer"
                  onClick={() => setShowFullDetails(!showFullDetails)}
                >
                  {showFullDetails ? "Close" : "See Full details"}
                </span>
              )}
              {showFullDetails && (
                <PanelDetails selectedPanels={selectedPanels} isqShow={false} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
