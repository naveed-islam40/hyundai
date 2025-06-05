  export const calculateTotal = (panels: any, panelDetails: any) => {
    let total = 0;
    panels != null &&
      Object.entries(panels || {}).forEach(
        ([panel, selectedServices]) => {
          Array.isArray(selectedServices) &&
            selectedServices?.forEach((service: any) => {
              total +=
                panelDetails[panel]?.services?.find(
                  (s: any) => s.name.toLowerCase() === service.toLowerCase()
                )?.cost ?? 0;
            });
        }
      );
    return total;
  };