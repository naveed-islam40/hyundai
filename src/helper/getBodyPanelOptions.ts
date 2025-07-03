import { cbsaPriceList } from "@/data/cbsa_price_list";
import { isYearInRange } from "./IsYearIn";

export const getBodyPanelOptions = (
  year: string,
  model: string,
  cbsa: string | undefined
) => {
  const vehicles = (cbsaPriceList as Record<string, any>)[cbsa || ""]?.vehicles;
  const {body_rate, refinish_rate, materials_rate} = (cbsaPriceList as Record<string, any>)[cbsa || ""];



  const normalizePanelKey = (panel: string) =>
    panel === "Deck Lid" ? "Trunk Lid" : panel;

  const rawVehicleEntry = vehicles
    ? Object.entries(vehicles).find(([key]) => {
        const [yearPart, ...modelParts] = key.split(" ");
        const modelName = modelParts.join(" ");
        const yearMatch = isYearInRange(yearPart, Number(year));
        const modelMatch =
          modelName.trim().toLowerCase() === model?.trim().toLowerCase();
        return yearMatch && modelMatch;
      })
    : undefined;


  const matchingEntry = rawVehicleEntry
    ? [
        rawVehicleEntry[0],
        Object.fromEntries(
          Object.entries(rawVehicleEntry[1] as Record<string, any>).map(
            ([key, value]) => [normalizePanelKey(key), value]
          )
        ),
      ] as [string, Record<string, any>]
    : undefined;

  const bodyPanelOptions =
    matchingEntry && matchingEntry[1]
      ? Object.keys(matchingEntry[1])
      : ["-"];

  return {
    bodyPanelOptions,
    matchingEntry,
    body_rate,
    refinish_rate,
    materials_rate
  };
};
