import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { usePaintServiceContext } from "@/context/PaintMatrixContext";
import { getBodyPanelOptions } from "@/helper/getBodyPanelOptions";
import { calculateTotal } from "@/helper/calculateTotal";
import { filterByDealerInfo } from "@/helper/filterByDealerInfo";
import PanelServices from "./PanelServices";
import Miscellaneous from "./Miscellaneous";
import Diaganostics from "./Diaganostics";

const PanelDetails = ({
  selectedPanels,
  isqShow = true,
  setSelectedPanels,
}: any) => {
  const [expandedPanels, setExpandedPanels] = useState<Record<string, boolean>>(
    {}
  );

  // [getting dealer info from context]
  const { model, year, getDealerInfo } = usePaintServiceContext();
  const dealerInfo = filterByDealerInfo(
    getDealerInfo().dealerCode,
    getDealerInfo().zipCode
  );

  // [getting body panel options]
  const { matchingEntry, body_rate, refinish_rate } = getBodyPanelOptions(
    year,
    model,
    dealerInfo?.dealerInfo?.CBSA
  );

  const panelDetails: any = matchingEntry?.[1] || {};

  // [toggle panel expand]
  const togglePanelExpand = (panel: string) => {
    setExpandedPanels((prev) => ({
      ...prev,
      [panel]: !prev[panel],
    }));
  };

  // [delete panel]
  const deletePanel = (panel: string) => {
    const updatedPanels = { ...selectedPanels };
    delete updatedPanels[panel];
    setSelectedPanels(updatedPanels);
  };

  // [calculate total]
  const { discountedTotal } = calculateTotal(
    selectedPanels,
    panelDetails,
    body_rate,
    refinish_rate
  );

  return (
    <div className="h-full w-full pr-2">
      {selectedPanels != null &&
        Object.values(selectedPanels).some(Boolean) && (
          <div className="mb-4">
            {/* calculations total */}
            <div className="flex justify-center mt-6 mb-8 relative top-0">
              <div className="bg-white text-black p-4 text-center text-2xl font-bold mb-2 rounded w-full">
                <div>
                  <div className="text-center text-2xl font-bold">
                    ${discountedTotal?.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mb-2 border-b">
              <div className="font-bold">ITEMS</div>
              <div className="font-bold">EST. COST</div>
            </div>

            <div className="bg-gray-300 text-black p-2 text-center mt-4 mb-2 font-bold">
              Painted Item Detail
            </div>
            <div className="h-[calc(100vh-380px)] overflow-y-auto pr-1">
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
                            {panel !== "CBSA" && panel !== "Three Stage" && (
                              <img
                                src="img/filled-trash 2.svg"
                                alt=""
                                className="w-5 h-5 mr-2 max-base-sm:invert max-base-sm:hue-rotate-180 max-base-sm:brightness-150"
                                onClick={() => deletePanel(panel)}
                              />
                            )}
                            <span>{panel}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">
                              $
                              {(() => {
                                const services = panelDetails[panel].services;
                                const selected = selectedServices.map(
                                  (s: string) => s.toLowerCase()
                                );

                                const selectedTotal = services?.reduce(
                                  (sum: number, service: any) => {
                                    if (
                                      selected.includes(
                                        service.name.toLowerCase()
                                      )
                                    ) {
                                      return sum + service.cost;
                                    }
                                    return sum;
                                  },
                                  0
                                );

                                const tricoat = services?.find(
                                  (service: any) => service.name === "TRICOAT"
                                );

                                const totalPrice =
                                  selectedTotal + (tricoat?.cost || 0);

                                return totalPrice.toFixed(2);
                              })()}
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
                          <PanelServices
                            panelDetails={panelDetails}
                            panel={panel}
                            selectedServices={selectedServices}
                          />
                        )}
                      </div>
                    );
                  }
                }
              )}
              <Miscellaneous />
              <Diaganostics />
            </div>
          </div>
        )}

      <div className="relative bottom-0 pt-7">
        <div className="text-xs text-center bottom">
          *Amount Shown Above is an ESTIMATE of Repair Total
        </div>
        {isqShow && (
          <div className="flex items-center mt-3 gap-3">
            <img src="img/hyundai-qrcode.jpg" alt="" className="w-15 h-15" />
            <p className="text-xs">
              *Understanding your vehicle Finish and Blend
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PanelDetails;
