import { panelPricesByDealer } from "@/data/newPriceList";
import { isYearInRange } from "./IsYearIn";

export const getBodyPanelOptions = (year: string, model: string) => {

      const matchingEntry = Object.entries(
    panelPricesByDealer["AL DAPHNE-FAIRHOPE-FOLEY [2141]"].vehicles
  ).find(([key]) => {
    const [yearPart, ...modelParts] = key.split(" ");
    const modelName = modelParts.join(" ");
    const yearMatch = isYearInRange(yearPart, Number(year));
    const modelMatch =
      modelName.trim().toLowerCase() ===
      model.trim().toLowerCase();

    return yearMatch && modelMatch;
  });

  const bodyPanelOptions =
    matchingEntry && matchingEntry[1]
      ? [...Object.keys(matchingEntry[1])]
      : ["-"];

  return {bodyPanelOptions, matchingEntry};
}