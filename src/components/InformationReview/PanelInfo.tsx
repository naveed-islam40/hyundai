import { useEffect, useRef, useState } from "react";
import RecalculatingLoader from "../Loaders/RecalculatingLoader";
import { usePaintServiceContext } from "@/context/PaintMatrixContext";
import { getBodyPanelOptions } from "@/helper/getBodyPanelOptions";

interface PanelInfoProps {
  selectedPanels: Record<string, string[]> | null;
}

const PanelInfo = ({ selectedPanels }: PanelInfoProps) => {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<number>(0);
  const { year, model } = usePaintServiceContext();

  const { matchingEntry } = getBodyPanelOptions(year, model);
  const panelDetails = matchingEntry ? matchingEntry[1] : {};

  useEffect(() => {
    const storedTotal = localStorage.getItem("totalCost");
    setTotal(storedTotal ? Number(storedTotal) : 0);
  }, [selectedPanels]);

  const calculateTotal = () => {
    if (!selectedPanels) return 0;

    let calculatedTotal = 0;

    Object.entries(selectedPanels).forEach(([panelName, services]) => {
      if (!Array.isArray(services) || !panelDetails[panelName]) return;

      const panel = panelDetails[panelName];
      let panelCost = 0;

      services.forEach((service) => {
        const serviceLower = service.toLowerCase();
        const matchedService = panel.services.find(
          (s: any) => s.name.toLowerCase() === serviceLower
        );

        if (matchedService) {
          panelCost += matchedService.cost;
        }
      });

      if (services.some((s) => s.toLowerCase() === "refinish")) {
        const triCoatService = panel.services.find(
          (s: any) => s.name.toLowerCase() === "tri-coat"
        );

        if (triCoatService) {
          panelCost += triCoatService.cost;
        }
      }

      calculatedTotal += panelCost;
    });

    return calculatedTotal;
  };

  const calculatedTotal = calculateTotal();

  useEffect(() => {
    if (calculatedTotal > 0 && calculatedTotal !== total) {
      localStorage.setItem("totalCost", calculatedTotal.toString());
      setTotal(calculatedTotal);
    }
  }, [calculatedTotal, total, selectedPanels]);

  useEffect(() => {
    if (!selectedPanels) return;

    setLoading(true);

    clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeoutRef.current);
  }, [selectedPanels]);

  if (loading) {
    return <RecalculatingLoader />;
  }

  return (
    <div className="mb-6 px-3">
      <h3 className="text-red-600 font-bold text-sm mb-2">
        Body Repair Status
      </h3>

      {selectedPanels &&
        Object.entries(selectedPanels).map(([panelName, services]) => {
          if (!Array.isArray(services)) return null;

          const panel = panelDetails[panelName];
          if (!panel) return null;

          let panelTotal = 0;
          services.forEach((service) => {
            const serviceLower = service.toLowerCase();
            const matchedService = panel.services.find(
              (s: any) => s.name.toLowerCase() === serviceLower
            );
            if (matchedService) {
              panelTotal += matchedService.cost;
            }
          });

          if (services.some((s) => s.toLowerCase() === "refinish")) {
            const triCoatService = panel.services.find(
              (s: any) => s.name.toLowerCase() === "tri-coat"
            );
            if (triCoatService) {
              panelTotal += triCoatService.cost;
            }
          }

          return (
            <div key={panelName} className="mb-4 px-3">
              {/* Panel Title */}
              <div className="flex justify-between items-center mb-1">
                <p className="font-bold">{panelName}</p>
                <div className="flex-1 mx-4 border-b border-dotted border-black"></div>
                <p className="font-bold">${panelTotal.toFixed(2)}</p>
              </div>

              {/* Services */}
              <div className="ml-6">
                {services.map((service) => {
                  const serviceLower = service.toLowerCase();
                  const matchedService = panel.services.find(
                    (s: any) => s.name.toLowerCase() === serviceLower
                  );

                  if (!matchedService) return null;

                  return (
                    <div
                      key={service}
                      className="flex justify-between items-center mb-1"
                    >
                      <p>{matchedService.name}</p>
                      <div className="flex-1 mx-4 border-b border-dotted border-black"></div>
                      <p>${matchedService.cost.toFixed(2)}</p>
                    </div>
                  );
                })}

                {/* Add Tri-Coat if Refinish is selected */}
                {services.some((s) => s.toLowerCase() === "refinish") &&
                  panel.services.some(
                    (s: any) => s.name.toLowerCase() === "tri-coat"
                  ) && (
                    <div className="flex justify-between items-center mb-1">
                      <p>Tri-Coat</p>
                      <div className="flex-1 mx-4 border-b border-dotted border-black"></div>
                      <p>
                        $
                        {panel.services
                          .find((s: any) => s.name.toLowerCase() === "tri-coat")
                          ?.cost.toFixed(2)}
                      </p>
                    </div>
                  )}
              </div>
            </div>
          );
        })}

      {/* Sub-Total Section */}
      <div className="flex justify-end gap-4 items-center mb-6 font-bold">
        <p>Sub-Total:</p>
        <p>
          ${calculatedTotal > 0 ? calculatedTotal.toFixed(2) : total.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default PanelInfo;
