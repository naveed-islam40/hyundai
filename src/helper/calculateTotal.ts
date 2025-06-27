export const calculateTotal = (
  panels: any,
  panelDetails: any,
  body_rate: number,
  refinish_rate: number
) => {
  let total = 0;
  const noOfPanels = Object.keys(panels).length;

   if (Object.keys(panelDetails || {}).length === 0) return { total: 0, discountedTotal: 0 };

  Object.entries(panels || {}).forEach(([panel, selectedServices]) => {
    if (!Array.isArray(selectedServices)) return;
    if (selectedServices.length === 0) return;

    selectedServices?.forEach((service: any) => {
      const serviceCost =
        panelDetails[panel]?.services?.find(
          (s: any) => s.name.toLowerCase() === service.toLowerCase()
        )?.cost ?? 0;

      total += serviceCost;
    });
  });

    const miscellaneousTotal =
    10 +
    0.3 * body_rate +
    (10 + 0.3 * body_rate) +
    5 +
    (0.3 * noOfPanels) * refinish_rate +
    1 * refinish_rate;

  const vahicle_diagnostic_total = 99;

  total += miscellaneousTotal + vahicle_diagnostic_total;

   const discountedTotal = total * 0.9;
   const discounted = total - discountedTotal;

  return {
    total: parseFloat(total.toFixed(2)),
    discountedTotal: parseFloat(discountedTotal.toFixed(2)),
    discounted: parseFloat(discounted.toFixed(2)),
  };
};
