const BaseRatesDisplay = ({
  body_rate,
  refinish_rate,
  materials_rate,
}: {
  body_rate: number;
  refinish_rate: number;
  materials_rate: number;
}) => {
  return (
    <div className="absolute z-[1000] right-0 -top-20 bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-end text-right">
      <label className="text-red-600 font-bold text-sm mb-4">
        BASE RATES{" "}
        <span className="text-xs italic text-black">(*based on CBSA)</span>
      </label>
      <p>Body Rate: {body_rate || 0}</p>
      <p>Refinish: {refinish_rate || 0}</p>
      <p>Paint Materials: {materials_rate || 0}</p>
    </div>
  );
};

export default BaseRatesDisplay;
