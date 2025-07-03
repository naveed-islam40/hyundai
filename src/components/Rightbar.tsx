import { useLocation } from "react-router-dom";
import PanelDetails from "./RightBar/PanelDetails";
import { usePaintServiceContext } from "@/context/PaintMatrixContext";

const options = [
  "Overview Details",
  "Paint Services Matrix",
  "Scheduling",
  "Information Review",
];

export default function RightSidebar() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = Math.max(1, parseInt(queryParams.get("page") || "1", 10));
  const { selectedPanels, setSelectedPanels } = usePaintServiceContext();

  return (
    <div className="p-4 flex flex-col bg-black rounded-r-md w-[300px]">
      <div className="mb-8">
        {options.map((option, idx) => {
          const isCompleted = idx < currentPage - 1;
          const isActive = idx === currentPage - 1;
          const imageSrc = isCompleted
            ? "img/checked.jpg"
            : "img/checkbox.svg";

          return (
            <div
              key={option}
              className={`
                p-3 mb-2 flex items-center gap-2 rounded font-bold
                ${
                  isActive || isCompleted
                    ? "bg-white text-black"
                    : "bg-white text-[#0000003B]"
                }
              `}
            >
              <img
                src={imageSrc}
                alt={isCompleted ? "Completed" : "Not completed"}
                className={isCompleted ? "w-8 h-8" : "w-5 h-5"}
              />
              <span>{option}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-auto">
        <h3 className="text-lg font-semibold mb-4">Estimated Repair Charges</h3>
        <PanelDetails
          selectedPanels={selectedPanels}
          setSelectedPanels={setSelectedPanels}
        />
      </div>
    </div>
  );
}
