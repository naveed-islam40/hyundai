import PCTTable from "./PCTTable";

const BodyStyledSection = ({
  bodyPanelOptions,
  selectedPanels,
  handleSelectPanelServices,
  handlePanelSelection,
  handleUncheckAll, // receive the handler prop
}: {
  bodyPanelOptions: string[];
  selectedPanels: any;
  handleSelectPanelServices: any;
  handlePanelSelection: any;
  handleUncheckAll: () => void; // typed as function with no args
}) => {
  const handlePanelCheckbox = (part: string) => {
    const isSelected = !!selectedPanels[part];
    if (isSelected) {
      handleSelectPanelServices(part); // Uncheck
    } else {
      handlePanelSelection(part, "Repair"); // Check with default
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-red-600 font-bold">PANEL STYLES</h2>
        <button
          onClick={handleUncheckAll}
          type="button"
          className="text-sm text-red-600 hover:underline focus:outline-none"
        >
          UNCHECK ALL
        </button>
      </div>

      <div className="mb-2">
        <p className="text-sm font-bold">
          Panel Types:{" "}
          <span className="font-medium">(Select ALL that apply)</span>
        </p>
      </div>

      <div className="grid grid-cols-1 base-xs:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto">
        {/* Panel Type */}
        <div>
          <h3 className="border-b border-gray-300 pb-1 mb-3 text-sm text-center">
            Body Style
          </h3>
          <div className="space-y-0">
            {bodyPanelOptions?.map((part, index) => {
              if (part === "Front Bumper" || part === "Rear Bumper")
                return null;

              const bgColor = index % 2 === 0 ? "bg-white" : "bg-gray-100";

              return (
                <div
                  key={part}
                  className={`flex items-center ${bgColor} p-1 mb-[10px]`}
                >
                  <input
                    type="checkbox"
                    id={part.replace(/\s+/g, "")}
                    className="mr-2"
                    onChange={() => handlePanelCheckbox(part)}
                    checked={!!selectedPanels[part]}
                  />
                  <label htmlFor={part.replace(/\s+/g, "")} className="text-sm">
                    {part}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Refinish + Blend */}
        <div>
          <h3 className="border-b border-gray-300 pb-1 mb-3 text-sm text-center">
            Finish and Blend
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Refinish */}
            <div className="space-y-0">
              {bodyPanelOptions?.map((part, index) => {
                if (part === "Front Bumper" || part === "Rear Bumper")
                  return null;

                const bgColor = index % 2 === 0 ? "bg-white" : "bg-gray-100";

                return (
                  <div
                    key={`refinish-${part}`}
                    className={`flex items-center ${bgColor} p-1 mb-[10px]`}
                  >
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
                      Refinish
                    </label>
                  </div>
                );
              })}
            </div>

            {/* Blend */}
            <div className="space-y-0">
              {bodyPanelOptions.map((part, index) => {
                if (part === "Front Bumper" || part === "Rear Bumper")
                  return null;

                const bgColor = index % 2 === 0 ? "bg-white" : "bg-gray-100";

                return (
                  <div
                    key={`blend-${part}`}
                    className={`flex items-center ${bgColor} p-1 mb-[10px]`}
                  >
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
                      Blend
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

      {/* Hidden full details */}
      <h2 className="text-red-600 font-bold mb-3 hidden">
        SHOP PANELS (FULL DETAILS)
      </h2>

      <PCTTable />
    </div>
  );
};

export default BodyStyledSection;