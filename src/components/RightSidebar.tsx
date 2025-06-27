import React from "react";
import { panelPricesByDealer } from "@/data/newPriceList";

interface RightSidebarProps {
  selectedPanels: Record<string, string[]>;
  cbsa: string;
  model: string;
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  selectedPanels,
  cbsa,
  model,
}) => {
  const vehiclePricing = panelPricesByDealer?.[cbsa]?.vehicles?.[model];

  const getServiceCost = (panel: string, service: string): number => {
    return (
      vehiclePricing?.[panel]?.services?.find((s: any) => s.name === service)
        ?.cost || 0
    );
  };

  const getTotal = (): number => {
    let total = 0;

    for (const panel in selectedPanels) {
      const services = selectedPanels[panel];

      if (Array.isArray(services)) {
        services.forEach((service) => {
          total += getServiceCost(panel, service);
        });
      }
    }

    return total;
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h3 className="text-lg font-bold mb-4 text-red-600">Pricing Summary</h3>

      <ul className="mb-4">
        {Object.entries(selectedPanels).map(([panel, services]) => (
          <li key={panel} className="mb-2">
            <p className="font-semibold">{panel}</p>
            <ul className="ml-4 text-sm text-gray-700">
              {services.map((service) => (
                <li key={service} className="flex justify-between">
                  <span>{service}</span>
                  <span className="text-right">
                    ${getServiceCost(panel, service).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="font-bold text-right text-xl text-red-600">
        Total: ${getTotal().toFixed(2)}
      </div>
    </div>
  );
};

export default RightSidebar;
