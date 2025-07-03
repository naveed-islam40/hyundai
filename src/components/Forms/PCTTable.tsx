import { usePaintServiceContext } from "@/context/PaintMatrixContext";

const tableHeaders = [
  "ID",
  "VEHICLE",
  "YEAR",
  "REPAIR / BLEND",
  "CATEGORY",
  "OPERATIONS",
  "PART",
  "BODY LABOR",
  "REFINISH LABOR",
  "COST",
  "CCC COST",
];

const PCTTable = () => {
  const { pct } = usePaintServiceContext();

  return (
    <div className="w-full base-sm:max-w-lg 1000:max-w-xl base-lg:max-w-2xl xl:max-w-4xl 2xl:max-w-[1920px] mx-auto hidden">
      {pct?.map((item: any, index: number) => (
        <div key={index} className="space-y-2 mb-6 overflow-x-auto">
          <h1 className="text-lg font-bold">{item?.category}</h1>

          <table className="table-auto border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                {tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    className="border border-gray-300 px-3 py-2 text-left font-medium text-gray-700 whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {item?.items?.map((row: any, rowIndex: number) => (
                <tr key={rowIndex} className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 text-gray-900 whitespace-nowrap">
                    {row.id}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-900 whitespace-nowrap">
                    {row.vehicle?.split(" ").slice(1).join(" ")}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-900 whitespace-nowrap">
                    {row.year}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-900 whitespace-nowrap">
                    {row.repair_blend}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-900 whitespace-nowrap ">
                    {row.category}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-900 whitespace-nowrap">
                    {row.operation}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-900 whitespace-nowrap">
                    {row.part}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-900 whitespace-nowrap">{`${
                    row.body_labor ?? "0.00"
                  }`}</td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-900 whitespace-nowrap">{`${
                    row.refinish_labor ?? "0.00"
                  }`}</td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-900 whitespace-nowrap">{`${
                    row.cost ?? "0.00"
                  }`}</td>
                  <td className="border border-gray-300 px-3 py-2 text-gray-900 whitespace-nowrap">{`$ ${
                    row.ccc_cost ?? "0.00"
                  }`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PCTTable;
