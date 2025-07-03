import { usePaintServiceContext } from "@/context/PaintMatrixContext";

const ShopPanelInfo = () => {
  const { pct } = usePaintServiceContext();

  return (
    <div className="mb-6 hidden">
      <h2 className="text-red-600 font-bold text-lg mb-4">
        Shop Panel Information
      </h2>

      {pct?.map((category: any, categoryIndex: number) => (
        <div key={categoryIndex} className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4  p-3 rounded">
            {category?.category}
          </h3>

          {category?.items?.map((item: any, itemIndex: number) => (
            <div key={itemIndex} className="bg-white p-4 mb-4 border-t">
              {/* First Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-3">
                <div>
                  <span className="font-semibold text-gray-900">ID: </span>
                  <span className="text-gray-700">{item?.id}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Vehicle: </span>
                  <span className="text-gray-700">
                    {item?.vehicle?.split(" ")[1]}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Year: </span>
                  <span className="text-gray-700">{item?.year}</span>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-3">
                <div>
                  <span className="font-semibold text-gray-900">
                    Repair/Blend:{" "}
                  </span>
                  <span className="text-gray-700">{item?.repair_blend}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">
                    Category:{" "}
                  </span>
                  <span className="text-gray-700">{item?.category}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">
                    Operation:{" "}
                  </span>
                  <span className="text-gray-700">{item?.operation}</span>
                </div>
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-3">
                <div>
                  <span className="font-semibold text-gray-900">Part: </span>
                  <span className="text-gray-700">{item?.part}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">
                    Body Labor:{" "}
                  </span>
                  <span className="text-gray-700">
                    {item?.body_labor && `$ ${item?.body_labor}`}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">
                    Refinish Labor:{" "}
                  </span>
                  <span className="text-gray-700">
                    {item?.refinish_labor && `$ ${item?.refinish_labor}`}
                  </span>
                </div>
              </div>

              {/* Fourth Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm pt-3">
                <div>
                  <span className="font-semibold text-gray-900">Cost: </span>
                  <span className="text-gray-700">
                    {item?.cost && `$ ${item?.cost}`}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 hidden">
                    CCC Cost:{" "}
                  </span>
                  <span className="text-gray-700">
                    {item?.ccc_cost && `$ ${item?.ccc_cost}`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShopPanelInfo;
