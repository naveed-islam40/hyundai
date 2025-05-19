import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { panelDetails } from "@/static/PanelPrices";

const PanelDetails = ({
  selectedPanels,
  isqShow = true,
  setSelectedPanels,
}: any) => {
  const [expandedPanels, setExpandedPanels] = useState<Record<string, boolean>>(
    {}
  );

  const calculateTotal = () => {
    let total = 0;
    selectedPanels != null &&
      Object.entries(selectedPanels).forEach(([panel, selectedServices]) => {
        Array.isArray(selectedServices) &&
          selectedServices?.forEach((service: any) => {
            total +=
              panelDetails[panel].services.find(
                (s: any) => s.name.toLowerCase() === service.toLowerCase()
              )?.cost ?? 0;
          });
      });
    return total;
  };

  const togglePanelExpand = (panel: string) => {
    setExpandedPanels((prev) => ({
      ...prev,
      [panel]: !prev[panel],
    }));
  };

  const deletePanel = (panel: string) => {
    const updatedPanels = { ...selectedPanels };
    delete updatedPanels[panel];
    setSelectedPanels(updatedPanels);
  };

  return (
    <div className="h-full w-full pr-2">
      {selectedPanels != null &&
        Object.values(selectedPanels).some(Boolean) && (
          <div className="mb-4">
            <div className="flex justify-between mb-2 border-b">
              <div className="font-bold">ITEMS</div>
              <div className="font-bold">EST. COST</div>
            </div>

            {Object.entries(selectedPanels).map(([panel, selectedServices]) => {
              if (
                Array.isArray(selectedServices) &&
                selectedServices.length > 0 &&
                panelDetails[panel]
              ) {
                return (
                  <div key={panel} className="flex justify-between mb-1">
                    <div>
                      {panel}
                      <div className="text-xs text-gray-500">
                        {selectedServices.join(", ")}
                      </div>
                    </div>
                    $
                    {selectedServices
                      .reduce((sum: number, svc: string) => {
                        const cost =
                          panelDetails[panel].services.find(
                            (s: any) =>
                              s.name.toLowerCase() === svc.toLowerCase()
                          )?.cost || 0;
                        return sum + cost;
                      }, 0)
                      .toFixed(2)}
                  </div>
                );
              }
              return null;
            })}

            <div className="bg-gray-300 text-black p-2 text-center mt-4 mb-2 font-bold">
              Painted Item Detail
            </div>

            {Object.entries(selectedPanels).map(
              ([panel, selectedServices]: any) => {
                if (
                  Array.isArray(selectedServices) &&
                  selectedServices.length > 0 &&
                  panelDetails[panel]
                ) {
                  const isExpanded = expandedPanels[panel] === true;

                  return (
                    <div
                      key={`detail-${panel}`}
                      className="border-b border-gray-700 pb-2 mb-2"
                    >
                      <div
                        className="flex justify-between items-center cursor-pointer py-2"
                        onClick={() => togglePanelExpand(panel)}
                      >
                        <div className="flex items-center">
                          <img
                            src="/img/filled-trash 2.svg"
                            alt=""
                            className="w-5 h-5 mr-2"
                            onClick={() => deletePanel(panel)}
                          />
                          <span>{panel}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2">
                            $
                            {selectedServices
                              .reduce((sum: number, svc: string) => {
                                const cost =
                                  panelDetails[panel].services.find(
                                    (s: any) =>
                                      s.name.toLowerCase() === svc.toLowerCase()
                                  )?.cost || 0;
                                return sum + cost;
                              }, 0)
                              .toFixed(2)}
                          </span>
                          <ChevronRight
                            className={`transition-transform ${
                              isExpanded ? "rotate-90" : ""
                            }`}
                            size={18}
                          />
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="pl-6 mt-1 space-y-1">
                          {panelDetails[panel].services
                            .filter((service: any) =>
                              selectedServices
                                .map((s: string) => s.toLowerCase())
                                .includes(service.name.toLowerCase())
                            )
                            .map((service: any) => (
                              <div
                                key={service.name}
                                className="flex justify-between"
                              >
                                <div className="text-sm italic">
                                  {service.name}
                                </div>
                                <div className="text-sm">
                                  ${service.cost.toFixed(2)}
                                </div>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  );

                  return null;
                }
              }
            )}
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
      {isqShow && (
        <div className="flex items-center mt-3 gap-3">
          <img src="/img/qrcg-sample 2.svg" alt="" className="w-15 h-15" />
          <p className="text-xs">
            *Understanding your vehicle Finish and Blend
          </p>
        </div>
      )}
    </div>
  );
};

export default PanelDetails;
