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
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse space-y-3">
        {pct?.map((item: any, index: number) => (
          <div key={index} className="space-y-3">
            <h1 className="text-lg font-bold">{item?.category}</h1>
            <thead>
              <tr className="bg-gray-100">
                {tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    className="border border-gray-300 px-3 py-2 text-left text-xs font-medium text-gray-700 whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {item?.items?.map((row: any, index: number) => (
                <tr key={index} className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">
                    {row?.id}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">
                    {row?.vehicle?.split(" ")[1]}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 w-[100px]">
                    {row.year}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">
                    {row?.repair_blend}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">
                    {row?.category}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">
                    {row?.operation}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">
                    {row?.part}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">
                    {row.body_labor ? `$ ${row.body_labor}` : "$0.00"}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">
                    {row.refinish_labor ? `$ ${row.refinish_labor}` : "$0.00"}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">
                    {row?.cost ? `$ ${row?.cost}` : "$0.00"}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">
                    {row?.ccc_cost ? `$ ${row?.ccc_cost}` : "$0.00"}
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        ))}
      </table>
    </div>
  );
};

export default PCTTable;
