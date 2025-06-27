const Diaganostics = ({ discounted }: { discounted: number | undefined }) => {
  return (
    <div className="">
      {/* VEHICLE DIAGNOSTICS */}
      <br />
      <br />
      <p className="font-bold text">VEHICLE DIAGNOSTICS</p>
      <div className="mt-3">
        <div className="flex justify-between pr-4">
          <p>Pre-Repair Scan: </p>
          <p>$49.50</p>
        </div>
        <div className="flex justify-between pr-4">
          <p>Post-Repair Scan: </p>
          <p>$49.50</p>
        </div>
        <br />
        <hr />
        <br />
        <div className="flex justify-between pr-4">
          <p>BL Discount (10%): </p>
          <p>${discounted || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default Diaganostics;
