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

        const filteredServives = services?.filter((service: any) =>
          selected.includes(service.name.toLowerCase())
        );

        const tricoatService = services?.find(
          (service: any) => service.name === "TRICOAT"
        );

        return (
          <>
            {filteredServives?.map((service: any) => (
              <div key={service.name} className="flex justify-between">
                <div className="text-sm italic">{service.name}</div>
                <div className="text-sm">${service.cost.toFixed(2)}</div>
              </div>
            ))}

            {tricoatService && (
              <div className="flex justify-between mt-2 text-white text-sm">
                <div className="text-sm italic">{tricoatService.name}</div>
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
