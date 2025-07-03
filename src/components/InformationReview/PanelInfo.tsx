import { useEffect, useRef, useState } from "react";
import RecalculatingLoader from "../Loaders/RecalculatingLoader";
import { usePaintServiceContext } from "@/context/PaintMatrixContext";
import { getBodyPanelOptions } from "@/helper/getBodyPanelOptions";
import { filterByDealerInfo } from "@/helper/filterByDealerInfo";
import { calculateTotal } from "@/helper/calculateTotal";

interface PanelInfoProps {
  selectedPanels: Record<string, string[]> | null;
}

const PanelInfo = ({ selectedPanels }: PanelInfoProps) => {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<number>(0);
  const { year, model, getDealerInfo } = usePaintServiceContext();

  const dealerInfo = filterByDealerInfo(
    getDealerInfo().dealerCode,
    getDealerInfo().zipCode
  );

  const { matchingEntry, body_rate, refinish_rate } = getBodyPanelOptions(
    year,
    model,
    dealerInfo?.dealerInfo?.CBSA
  );
  const panelDetails: any = matchingEntry ? matchingEntry[1] : {};

  useEffect(() => {
    const storedTotal = localStorage.getItem("totalCost");
    setTotal(storedTotal ? Number(storedTotal) : 0);
  }, [selectedPanels]);

  const { discountedTotal } = calculateTotal(
    selectedPanels,
    panelDetails,
    body_rate,
    refinish_rate
  );

  useEffect(() => {
    if (discountedTotal > 0 && discountedTotal !== total) {
      localStorage.setItem("totalCost", discountedTotal.toString());
      setTotal(discountedTotal);
    }
  }, [discountedTotal, total, selectedPanels]);

  // Loading
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
    <div className="mt-8 mb-6 px-0">
      <h3 className="text-red-600 font-bold text mb-2">Body Repair Status</h3>

      {selectedPanels &&
        Object.entries(selectedPanels).map(([panelName, services]) => {
          if (!Array.isArray(services)) return null;

          const panel = panelDetails[panelName];
          if (!panel) return null;

          // === Calculate Panel Total ===
          let panelTotal = 0;

          // Add each selected service's cost
          services.forEach((service) => {
            const serviceLower = service.toLowerCase();
            const matchedService = panel.services.find(
              (s: any) => s.name.toLowerCase() === serviceLower
            );
            if (matchedService) {
              panelTotal += matchedService.cost;
            }
          });

          // Always include Tri-Coat if available
          const triCoatService = panel.services.find(
            (s: any) => s.name.toLowerCase() === "tricoat"
          );
          if (triCoatService) {
            panelTotal += triCoatService.cost;
          }

          return (
            <div key={panelName} className="mb-4 px-3">
              {/* Panel Title */}
              <div className="flex justify-between items-center mb-1">
                <p className="font-bold">{panelName}</p>
                <div className="flex-1 mx-4 border-b border-dotted border-black"></div>
                <p className="font-bold">${panelTotal.toFixed(2)}</p>
              </div>

              {/* Render Selected Services */}
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

                {/* Always show Tri-Coat if it exists */}
                {triCoatService && (
                  <div className="flex justify-between items-center">
                    <p>{triCoatService.name}</p>
                    <div className="flex-1 mx-4 border-b border-dotted border-black"></div>
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
        <p>
          ${discountedTotal > 0 ? discountedTotal.toFixed(2) : total.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default PanelInfo;
