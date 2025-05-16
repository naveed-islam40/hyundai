import { panelDetails } from "@/static/PanelPrices";
import { useEffect, useState } from "react";

const panelBaseCosts: any = {
  "Left Front Door": 1,
  "Deck Lid": 1,
  Doors: 1,
  Roof: 1,
  "Right Rear Quarter Panel": 1,
  Hood: 1,
  Bumper: 1,
};

const PanelInfo = ({ selectedPanels }: any) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = localStorage.getItem("totalCost");
    setTotal(Number(total));
  }, []);

  return (
    <div className="mb-6">
      <h3 className="text-red-600 font-bold text-sm mb-2">
        Body Repair Status
      </h3>

      {selectedPanels !== null &&
        Object.entries(selectedPanels || {}).map(([panelName, finish]: any) => {
          const baseCost = panelBaseCosts[panelName] || 0;
          const panel = panelDetails[panelName];

          if (!panel) return null;

          const matchedService = panel.services.find(
            (service: any) =>
              service.name.toLowerCase() === finish.toLowerCase()
          );

          if (!matchedService) return null;

          let panelTotal = baseCost + matchedService.cost;

          // Check for Tri-Coat if finish is Refinish
          const triCoatService =
            finish === "Refinish"
              ? panel.services.find(
                  (service: any) => service.name.toLowerCase() === "tri-coat"
                )
              : null;

          if (triCoatService) {
            panelTotal += triCoatService.cost;
          }

          return (
            <div key={panelName} className="mb-4">
              {/* Panel Title and Base Cost */}
              <div className="flex justify-between items-center mb-1">
                <p className="font-bold">{panelName}</p>
                <div className="flex-1 mx-4 border-b-3 border-dotted border-black"></div>
                <p className="font-bold">${baseCost.toFixed(2)}</p>
              </div>

              {/* Matched Service */}
              <div className="ml-6">
                <div className="flex justify-between items-center mb-1">
                  <p>{matchedService.name}</p>
                  <div className="flex-1 mx-4 border-b-3 border-dotted border-black"></div>
                  <p>${matchedService.cost.toFixed(2)}</p>
                </div>

                {/* Optional Tri-Coat */}
                {triCoatService && (
                  <div className="flex justify-between items-center mb-1">
                    <p>{triCoatService.name}</p>
                    <div className="flex-1 mx-4 border-b-3 border-dotted border-black"></div>
                    <p>${triCoatService.cost.toFixed(2)}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}

      {/* Sub-Total Section */}
      <div className="flex justify-end gap-4 items-center mb-6 font-bold">
        <p>Sub-Total:</p>
        <p>${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PanelInfo;
