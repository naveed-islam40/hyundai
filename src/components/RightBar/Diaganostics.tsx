const VehicleDiagnostics = () => {
  const discounted = localStorage.getItem("discountedPrice");
  return (
    <div className="py-5 border-t">
      <h1 className="text-red-600 font-bold text mb-2">VEHICLE DIAGNOSTICS</h1>
      <div className="mt-3">
        <div className="grid grid-cols-1 gap-2">
          <div className="flex justify-between pr-2">
            <p className="font-bold">Pre-Repair Scan: </p>
            <p>$49.50</p>
          </div>
          <div className="flex justify-between pr-2">
            <p className="font-bold">Post-Repair Scan: </p>
            <p>$49.50</p>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="flex justify-between pr-2">
          <p className="font-bold">BL Discount (10%): </p>
          <p>${discounted || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleDiagnostics;


