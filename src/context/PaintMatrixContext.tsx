import { createContext, useContext, useState } from "react";

interface PaintContextType {
  paintServiceInfo: any;
  setPaintServiceInfo: (data: any) => void;
  year: string;
  setYear: (year: string) => void;
  model: string;
  setModel: (model: string) => void;
  saveDealderInfo: (dealerCode: string, zipCode: string) => void;
  getDealerInfo: () => { dealerCode: string; zipCode: string };
}

const PaintServiceContext = createContext<PaintContextType | undefined>(
  undefined
);

export const PaintServiceProvider = ({ children }: { children: any }) => {
  const [paintServiceInfo, setPaintServiceInfo] = useState<any>({});
  const [year, setYear] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const saveDealderInfo = (dealerCode: string, zipCode: string) => {
    localStorage.setItem("dealerCode", dealerCode);
    localStorage.setItem("zipCode", zipCode);
  };

  const getDealerInfo = () => {
    const dealerCode = localStorage.getItem("dealerCode") ?? "";
    const zipCode = localStorage.getItem("zipCode") ?? "";
    return { dealerCode, zipCode };
  };

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
