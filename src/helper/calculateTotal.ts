export const calculateTotal = (panels: any, panelDetails: any) => {
  let total = 0;

  if (!panels) return 0;

  Object.entries(panels || {}).forEach(([panel, selectedServices]) => {
    if (!Array.isArray(selectedServices)) return;
    if(selectedServices.length === 0) return

    // sum of selected service
    selectedServices?.forEach((service: any) => {
      const serviceCost =
        panelDetails[panel]?.services?.find(
          (s: any) => s.name.toLowerCase() === service.toLowerCase()
        )?.cost ?? 0;

      total += serviceCost;
    });

    // Tricoat if available
    const tricoat = panelDetails[panel]?.services?.find(
      (s: any) => s.name.toLowerCase() === "tricoat"
    );

    if (tricoat) {
      total += tricoat.cost;
    }
  });
  return total;
};
