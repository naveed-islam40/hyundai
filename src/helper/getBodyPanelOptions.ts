import { cbsaPriceList } from "@/data/cbsa_price_list";
import { isYearInRange } from "./IsYearIn";

export const getBodyPanelOptions = (year: string, model: string, cbsa: string | undefined) => {

  const vehicles = (cbsaPriceList as Record<string, any>)[cbsa || ""]?.vehicles;

  
      const matchingEntry = vehicles ?  Object.entries(
    vehicles || {}
  ).find(([key]) => {
    const [yearPart, ...modelParts] = key.split(" ");
    const modelName = modelParts.join(" ");
    const yearMatch = isYearInRange(yearPart, Number(year));
    const modelMatch =
      modelName.trim().toLowerCase() ===
      model.trim().toLowerCase();

    return yearMatch && modelMatch;
  }) : undefined;


  const bodyPanelOptions =
    matchingEntry && matchingEntry[1]
      ? [...Object.keys(matchingEntry[1])]
      : ["-"];

  return {bodyPanelOptions, matchingEntry};
}