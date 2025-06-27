import { panelPricesByDealer } from "@/data/newPriceList-updated";
import { isYearInRange } from "./IsYearIn";

export const filterByDealerInfo = (
  dealerCode: string,
  zipCode: string | number
) => {
  const matchingEntry = Object.entries(panelPricesByDealer).find(([_, value]) =>
    value?.dealerInfo?.some(
      (dealer) =>
        dealer.dealerCode === dealerCode && dealer.zip === Number(zipCode)
    )
  );

  if (!matchingEntry) return null;

  const dealerInfo = matchingEntry[1].dealerInfo?.find(
    (dealer) =>
      dealer.dealerCode === dealerCode && dealer.zip === Number(zipCode)
  );

  return {
    dealerInfo,
  };
};

export const getDefaultColor = (year: string, model: string) => {
  if(!year || !model) return "";
  const paintMaterialMap = {
    "2015-2016": {
      "Elantra (UD)": "Quartz White Pearl Tricoat",
    },
    "2017-2018": {
      "Elantra (ADA)": "Quartz White Pearl Tricoat",
      "Santa Fe Sport (AN)": "Frost White Pearl Tricoat",
    },
    "2015-2019": {
      "Sonata (LFA)": "Quartz White Pearl Tricoat",
    },
    "2019": {
      "Santa Fe (TMA)": "Quartz White Pearl Tricoat",
    },
    "2017-2021": {
      "Tucson (TL)": "Dazzling White Tricoat",
    },
    "2021-2023": {
      "Santa Fe Hybrid (TM HEV)": "Ceramic White Tricoat",
    },
    "2020-2023": {
      "Palisade (LX2)": "Hyper White Tricoat",
    },
  };

  const match = Object.entries(paintMaterialMap).find(([yearRange, models]) => {
    return (
      isYearInRange(yearRange, Number(year)) &&
      Object.keys(models).some((modelKey) =>
        modelKey.toLowerCase().includes(model.toLowerCase())
      )
    );
  });

if (match) {
  const modelMap = match[1] as Record<string, string>;

  const modelKey = Object.keys(modelMap).find((key) =>
    key.toLowerCase().includes(model.toLowerCase())
  );

  const color = modelKey ? modelMap[modelKey] : null;
  return color;
}
};
