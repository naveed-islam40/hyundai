import { usePaintServiceContext } from "@/context/PaintMatrixContext";
import { toast } from "sonner";

export function usePanelSelection(key: string | null) {
    const {selectedPanels, setSelectedPanels} = usePaintServiceContext()

  const handlePanelSelection = (panel: string, selectedService: string) => {
    if (key === "In-Person Scheduling" && panel.includes("Bumper")) {
      return toast.error("SORRY. THIS SELECTION IS UNAVAILABLE");
    }

    const current = selectedPanels[panel] || [];
    const updated = current.includes(selectedService) 
      ? current.filter((s: string) => s !== selectedService)
      : [selectedService];

    setSelectedPanels({
      ...selectedPanels,
      [panel]: updated,
    });
  };

  const handleSelectPanelServices = (part: string) => {
    setSelectedPanels((prev: any) => {
      const updated = { ...prev };
      if (Array.isArray(updated[part]) && updated[part].length > 0) {
        delete updated[part];
      } else {
        updated[part] = [];
      }
      return updated;
    });
  };

  return { handlePanelSelection, handleSelectPanelServices };
}