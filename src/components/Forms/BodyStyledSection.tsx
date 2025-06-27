import { usePanelSelection } from "@/hook/usePanelSelection";
import PCTTable from "./PCTTable";

const BodyStyledSection = ({
  bodyPanelOptions,
  selectedPanels,
}: {
  bodyPanelOptions: string[];
  selectedPanels: any;
}) => {
  const key = localStorage.getItem("key");
  const { handlePanelSelection, handleSelectPanelServices } =
    usePanelSelection(key);
  return (
    <div className="mb-6">
      <h2 className="text-red-600 font-bold mb-3">PANEL STYLES</h2>
      <div className="mb-2">
        <p className="text-sm font-bold">
          Panel Types:{" "}
          <span className="font-medium">(Select ALL that apply)</span>
        </p>
      </div>

      <div className="grid grid-cols-1 base-xs:grid-cols-2 gap-4 max-h-[150px] overflow-y-auto">
        <div>
          <h3 className="border-b border-gray-300 pb-1 mb-3 text-sm text-center">
            Body Style
          </h3>
          <div className="space-y-2">
            {bodyPanelOptions?.map((part) => {
              if (part === "Front Bumper" || part === "Rear Bumper")
                return null;
              return (
                <div key={part} className="flex items-center">
                  <input
                    type="checkbox"
                    id={part.replace(/\s+/g, "")}
                    className="mr-2"
                    onChange={() => handleSelectPanelServices(part)}
                    checked={selectedPanels[part]}
                  />
                  <label htmlFor={part.replace(/\s+/g, "")} className="text-sm">
                    {part}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="border-b border-gray-300 pb-1 mb-3 text-sm text-center">
            Finish and Blend
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              {bodyPanelOptions?.map((part) => {
                if (part === "Front Bumper" || part === "Rear Bumper")
                  return null;
                return (
                  <div key={`refinish-${part}`} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`refinish-${part.replace(/\s+/g, "")}`}
                      className="mr-2"
                      onChange={() => handlePanelSelection(part, "Repair")}
                      checked={
                        Array.isArray(selectedPanels[part]) &&
                        selectedPanels[part].includes("Repair")
                      }
                    />
                    <label
                      htmlFor={`refinish-${part.replace(/\s+/g, "")}`}
                      className="text-sm"
                    >
                      {"Refinish"}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="space-y-2">
              {bodyPanelOptions.map((part) => {
                if (part === "Front Bumper" || part === "Rear Bumper")
                  return null;
                return (
                  <div key={`blend-${part}`} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`blend-${part.replace(/\s+/g, "")}`}
                      className="mr-2"
                      onChange={() => handlePanelSelection(part, "Blend")}
                      checked={
                        Array.isArray(selectedPanels[part]) &&
                        selectedPanels[part].includes("Blend")
                      }
                    />

                    <label
                      htmlFor={`blend-${part.replace(/\s+/g, "")}`}
                      className="text-sm"
                    >
                      {"Blend"}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-6">
        <hr />
      </div>

      {/* CTC Shop Full Details */}
      <h2 className="text-red-600 font-bold mb-3">
        SHOP PANELS (FULL DETAILS)
      </h2>

      <PCTTable />
    </div>
  );
};

export default BodyStyledSection;
