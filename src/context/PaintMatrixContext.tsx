import { getPCTbyPanels } from "@/helper/getPCTbyPanels";
import { createContext, useContext, useEffect, useState } from "react";

interface PaintContextType {
  paintServiceInfo: any;
  setPaintServiceInfo: (data: any) => void;
  year: string;
  setYear: (year: string) => void;
  model: string;
  setModel: (model: string) => void;
  saveDealderInfo: (dealerCode: string, zipCode: string) => void;
  getDealerInfo: () => { dealerCode: string; zipCode: string };
  setPct: (pct: any) => void;
  pct: any;
  setSelectedPanels: any;
  selectedPanels: any;
  formState: any;
  setFormState: any;
}

const PaintServiceContext = createContext<PaintContextType | undefined>(
  undefined
);

export const PaintServiceProvider = ({ children }: { children: any }) => {
  const [paintServiceInfo, setPaintServiceInfo] = useState<any>({});
  const [selectedPanels, setSelectedPanels] = useState<Record<string, string>>(
    {}
  );
  const [year, setYear] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [pct, setPct] = useState<any>([]);
  const [formState, setFormState] = useState({
    rental1: "",
    rental2: "",
    rentalCompany: "",
    agreed: false,
  });

  const saveDealderInfo = (dealerCode: string, zipCode: string) => {
    localStorage.setItem("dealerCode", dealerCode);
    localStorage.setItem("zipCode", zipCode);
  };

  const getDealerInfo = () => {
    const dealerCode = localStorage.getItem("dealerCode") ?? "";
    const zipCode = localStorage.getItem("zipCode") ?? "";
    return { dealerCode, zipCode };
  };

  useEffect(() => {
    setPct(getPCTbyPanels(selectedPanels, year, model));
  }, [selectedPanels, year, model]);

  return (
    <PaintServiceContext.Provider
      value={{
        paintServiceInfo,
        setPaintServiceInfo,
        year,
        setYear,
        model,
        setModel,
        saveDealderInfo,
        getDealerInfo,
        setPct,
        pct,
        selectedPanels,
        setSelectedPanels,
        formState,
        setFormState,
      }}
    >
      {children}
    </PaintServiceContext.Provider>
  );
};

export const usePaintServiceContext = () => {
  const context = useContext(PaintServiceContext);
  if (!context) {
    throw new Error("usePaintServiceContext must be used within a provider");
  }
  return context;
};
