const PanelServices = ({
  panelDetails,
  panel,
  selectedServices,
}: {
  panelDetails: any;
  panel: string;
  selectedServices: string[];
}) => {
  return (
    <div className="pl-6 mt-1 space-y-1">
      {(() => {
        const services = panelDetails[panel].services;
        const selected = selectedServices.map((s: string) => s.toLowerCase());

        const filteredServices = services?.filter((service: any) =>
          selected.includes(service.name.toLowerCase())
        );

        const tricoatService = services?.find(
          (service: any) => service.name === "TRICOAT"
        );

        const hasBlend = selected.includes("blend");

        return (
          <>
            {filteredServices?.map((service: any) => {
              const isBlend = service.name.toLowerCase() === "blend";
              const baseCost = service.cost;
              const adjustedCost =
                isBlend && tricoatService ? baseCost + tricoatService.cost : baseCost;

              return (
                <div key={service.name} className="flex justify-between">
                  <div className="text-sm italic">{service.name}</div>
                  <div className="text-sm">${adjustedCost.toFixed(2)}</div>
                </div>
              );
            })}

            {/* Show TRICOAT line only if REPAIR or REFINISH selected, and BLEND is not */}
            {!hasBlend && tricoatService && (
              <div className="flex justify-between text-red-500 italic">
                <div className="text-sm">TRICOAT</div>
                <div className="text-sm">${tricoatService.cost.toFixed(2)}</div>
              </div>
            )}
          </>
        );
      })()}
    </div>
  );
};

export default PanelServices;