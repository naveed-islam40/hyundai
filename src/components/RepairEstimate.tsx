import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PanelDetails from "./RightBar/PanelDetails";
import { usePaintServiceContext } from "@/context/PaintMatrixContext";

export default function RepairEstimate() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page");
  const { selectedPanels, setSelectedPanels } = usePaintServiceContext();

  const imageSrc =
    page === "1"
      ? "img/mobile-steps-1.png"
      : page === "2"
      ? "img/mobile-steps-1.png"
      : page === "3"
      ? "img/mobile-steps-2.png"
      : page === "4"
      ? "img/mobile-steps-3.png"
      : page === "5"
      ? "img/mobile-steps-4.png"
      : "img/mobile-steps-4.png";

  const [total, setTotal] = useState(0);
  const [showFullDetails, setShowFullDetails] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const total = localStorage.getItem("totalCost");
      setTotal(Number(total));
    }, 200);
  }, [selectedPanels]);

  return (
    <div className="bg-white py-8 my-0 sm:mx-5 rounded-md">
      <div className="max-w-xl mx-auto">
        {/* Progress Steps */}
        <div className="flex justify-center mb-2">
          <img
            src={imageSrc}
            alt="Repair estimate progress steps showing 4 steps"
            className="w-[60%] h-auto"
          />
        </div>

        {/* Estimated Repair Charges */}
        <div className={`border-t-2 border-black`}>
          <div className="bg-white p-4 border border-gray-200 rounded">
            <h2 className="text-xl text-center font-medium text-gray-700 mb-1 ">
              Estimated Repair Charges
            </h2>
            <div className="flex justify-end items-end flex-col">
              <div className="text-xl font-bold">
                {total ? `$${total}` : "-"}
              </div>
              {Object.keys(selectedPanels || {}).length > 0 && (
                <span
                  className="text-xs text-[#E51C22] font-bold py-2 cursor-pointer"
                  onClick={() => setShowFullDetails(!showFullDetails)}
                >
                  {showFullDetails ? "Close" : "See Full details"}
                </span>
              )}
              {showFullDetails && (
                <PanelDetails
                  selectedPanels={selectedPanels}
                  isqShow={false}
                  setSelectedPanels={setSelectedPanels}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
