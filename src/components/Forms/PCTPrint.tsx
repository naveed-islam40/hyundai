import { usePaintServiceContext } from "@/context/PaintMatrixContext";

const tableHeaders = [
  "ID",
  "VEHICLE",
  "YEAR",
  "REPAIR/BLEND",
  "CATEGORY",
  "OPERATIONS",
  "PART",
  "BODY LABOR",
  "REFINISH LABOR",
  "COST",
  "CCC COST",
];



export default function PrintableTable() {
  const { pct } = usePaintServiceContext();

  return (
    <div className="w-full overflow-x-auto">
      <h2 className="text-red-600 font-bold text-lg mb-4">
        Shop Panel Information
      </h2>
      {pct.map((categoryData: any, categoryIndex: number) => (
        <div key={categoryIndex} className="table-section mb-6">
          <h2 className="category-title text-lg font-bold mb-3">
            {categoryData.category}
          </h2>

          <table className="print-table border-collapse table-fixed">
            <thead>
              <tr className="bg-gray-100">
                {tableHeaders.map((header, headerIndex) => {
  const isPartColumn = header === "PART";
  return (
    <th
      key={headerIndex}
      className={`border border-gray-300 px-2 py-1 text-left text-xs font-medium text-gray-700 ${
        isPartColumn ? "w-40 break-words whitespace-normal" : "whitespace-nowrap"
      }`}
    >
      {header}
    </th>
  );
})}
              </tr>
            </thead>
            <tbody>
              {categoryData.items.map((row: any, rowIndex: number) => (
                <tr key={rowIndex} className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-2 py-1 text-sm text-gray-900">
                    {row.id}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-sm text-gray-900">
                    {row.vehicle?.split(" ")[1] || row.vehicle}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-sm text-gray-900">
                    {row.year}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-sm text-gray-900">
                    {row.repair_blend}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-sm text-gray-900">
                    {row.category}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-sm text-gray-900">
                    {row.operation}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-sm text-gray-900">
                    {row.part}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-sm text-gray-900">
                    {row.body_labor ? `${row.body_labor}` : "0.00"}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-sm text-gray-900">
                    {row.refinish_labor ? `${row.refinish_labor}` : "0.00"}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-sm text-gray-900">
                    {row.cost ? `${row.cost}` : "0.00"}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-sm text-gray-900">
                    {row.ccc_cost ? `$ ${row.ccc_cost}` : "$0.00"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
