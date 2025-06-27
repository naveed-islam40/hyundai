const Miscellaneous = ({
  body_rate,
  noOfPanels,
  refinish_rate,
}: {
  body_rate: number;
  noOfPanels: number;
  refinish_rate: number;
}) => {
  return (
    <div className="">
      {/* MISCELLANEOUS */}
      <br />
      <br />
      <p className="font-bold text">MISCELLANEOUS OPERATIONS</p>
      <div className="mt-3">
        <div className="flex justify-between pr-4">
          <p>Cover Car:</p>
          <p>${(10 + 0.3 * body_rate)?.toFixed(2)}</p>
        </div>
        <div className="flex justify-between pr-4">
          <p>Corrosion Protection: </p>
          <p>${(10 + 0.3 * body_rate)?.toFixed(2)}</p>
        </div>
        <div className="flex justify-between pr-4">
          <p>Hazardouse Waste:</p>
          <p>$5.00</p>
        </div>
        <div className="flex justify-between pr-4">
          <p>Color Sand and Bluff:</p>
          <p> ${(0.3 * noOfPanels * refinish_rate)?.toFixed(2)}</p>
        </div>
        <p className="text-red-600">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;({noOfPanels}) Total Panels
        </p>{" "}
        {/* should be in red */}
        <div className="flex justify-between pr-4">
          {" "}
          <p>Color Tint:</p>
          <p>${1 * refinish_rate}</p>
        </div>
      </div>
    </div>
  );
};

export default Miscellaneous;
