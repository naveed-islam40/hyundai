import { usePaintServiceContext } from "@/context/PaintMatrixContext";
import { filterByDealerInfo } from "@/helper/filterByDealerInfo";
import { getBodyPanelOptions } from "@/helper/getBodyPanelOptions";

const MiscellenousOperation = () => {
  const { model, year, getDealerInfo, selectedPanels } =
    usePaintServiceContext();
  const dealerInfo = filterByDealerInfo(
    getDealerInfo().dealerCode,
    getDealerInfo().zipCode
  );

  // [getting body panel options]
  const { body_rate, refinish_rate } = getBodyPanelOptions(
    year,
    model,
    dealerInfo?.dealerInfo?.CBSA
  );

  const noOfPanels = Object.keys(selectedPanels).length;
  return (
    <div className="py-5 border-t">
      <h1 className="text-red-600 font-bold text mb-2">
        MISCELLANEOUS OPERATIONS
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
        <div className="flex justify-between pr-2">
          <p className="font-bold">Cover Car:</p>
          <p>${(10 + 0.3 * body_rate)?.toFixed(2)}</p>
        </div>
        <div className="flex justify-between pr-2">
          <p className="font-bold">Corrosion Protection: </p>
          <p>${(10 + 0.3 * body_rate)?.toFixed(2)}</p>
        </div>
        <div className="flex justify-between pr-2">
          <p className="font-bold">Hazardouse Waste:</p>
          <p>$5.00</p>
        </div>
        <div className="flex justify-between pr-2">
          <p className="font-bold">Color Sand and Bluff:</p>
          <p> ${(0.3 * noOfPanels * refinish_rate)?.toFixed(2)}</p>
        </div>
        <p className="text-red-600 font-bold">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;({noOfPanels}) Total Panels
        </p>{" "}
        {/* should be in red */}
        <div className="flex justify-between pr-2">
          {" "}
          <p className="font-bold">Color Tint:</p>
          <p>${(1 * refinish_rate)?.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default MiscellenousOperation;
