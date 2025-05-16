import { panelDetails } from "@/static/PanelPrices";
import { ChevronRight } from "lucide-react";

const PanelDetails = ({ selectedPanels }: any) => {
  const calculateTotal = () => {
    let total = 0;
    selectedPanels != null &&
      Object.entries(selectedPanels).forEach(([panel, isSelected]) => {
        if (isSelected && panelDetails[panel]) {
          total += panelDetails[panel].cost;
        }
      });
    return total;
  };

  return (
    <div className="h-full max-h-[300px] overflow-y-auto pr-2">
      {selectedPanels != null &&
        Object.values(selectedPanels).some(Boolean) && (
          <div className="mb-4">
            <div className="flex justify-between mb-2 border-b">
              <div className="font-bold">ITEMS</div>
              <div className="font-bold">EST. COST</div>
            </div>

            {Object.entries(selectedPanels).map(([panel, isSelected]) => {
              if (isSelected && panelDetails[panel]) {
                return (
                  <div key={panel} className="flex justify-between mb-1">
                    <div>{panel}</div>
                    <div>${panelDetails[panel].cost.toFixed(2)}</div>
                  </div>
                );
              }
              return null;
            })}

            <div className="bg-gray-300 text-black p-2 text-center mt-4 mb-2 font-bold">
              Painted Item Detail
            </div>

            {Object.entries(selectedPanels).map(([panel, isSelected]: any) => {
              if (isSelected && panelDetails[panel]) {
                return (
                  <div
                    key={`detail-${panel}`}
                    className="border-b border-gray-700 pb-2 mb-2"
                  >
                    <div className="flex justify-between items-center cursor-pointer py-2">
                      <div className="flex items-center">
                        <img
                          src="/img/filled-trash 2.svg"
                          alt=""
                          className="w-5 h-5"
                        />
                        <span>{panel}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">
                          ${panelDetails[panel].cost.toFixed(2)}
                        </span>
                        <ChevronRight
                          className={`transition-transform`}
                          size={18}
                        />
                      </div>
                    </div>

                    <div className="pl-6 mt-1 space-y-1">
                      {panelDetails[panel].services
                        .filter(
                          (service: any) =>
                            service.name?.toLowerCase() ===
                            isSelected?.toLowerCase()
                        )
                        .map((service: any) => (
                          <div
                            key={service.name}
                            className="flex justify-between"
                          >
                            <div className="text-sm italic">{service.name}</div>
                            <div className="text-sm">
                              ${service.cost.toFixed(2)}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}

      <div className="flex justify-center mt-6 mb-4">
        <div className="bg-white text-black p-4 text-center text-2xl font-bold mb-2 rounded w-full">
          <div>
            <div className="text-2xl font-bold">
              ${calculateTotal().toFixed(0)}
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-center">
        *Amount Shown Above is an ESTIMATE of Repair Total
      </div>
      <div className="flex items-center mt-3 gap-3">
        <img src="/img/qrcg-sample 2.svg" alt="" className="w-15 h-15" />
        <p>*Understanding your vehicle Finish and Blend</p>
      </div>
    </div>
  );
};

export default PanelDetails;
