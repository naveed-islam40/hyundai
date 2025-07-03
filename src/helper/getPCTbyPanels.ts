import { grouped_by_category } from "@/data/pct_data";
import { isYearInRange } from "./IsYearIn";

export const getPCTbyPanels = (
  panels: any, 
  year: any,
  model: any
) => {
  if (!panels || !year || !model) return [];


  const result: any[] = [];

  const normalizePanelKey = (panel: string) =>
    panel === "Trunk Lid" ? "Deck Lid" : panel;

  for (const panelCategory of Object.keys(panels)) {
    const services = panels[panelCategory];
    const normalizedPanelCategory = normalizePanelKey(panelCategory);


    const categoryData = grouped_by_category.find(
      (group: any) => group.category === normalizedPanelCategory || group.category === panelCategory?.split(" ")[0]
    );

    console.log("categoryData", categoryData)


    if (!categoryData || !Array.isArray(categoryData.items)) continue;

    const matchedItems = categoryData.items.filter((item: any) => {
      const itemModel = item?.vehicle?.split(" ").slice(1).join(" ").toLowerCase();


      return (
        services.includes(item.repair_blend) &&
        isYearInRange(item.year, Number(year)) &&
        model?.toLowerCase()?.startsWith(itemModel.toLowerCase())
      );
    });

    if (matchedItems.length > 0) {
      result.push({
        category: categoryData.category,
        items: matchedItems,
      });
    }
  }

  return result;
};
