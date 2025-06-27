const CustomerInfo = ({ customerInfo }: { customerInfo: any }) => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-red-600 font-bold text mb-2">
          Customer Information
        </h2>
        <div className="grid grid-cols-1 base-lg:grid-cols-3 gap-4">
          <div className="flex items-center gap-2 font-bold">
            <p className="text-sm">Customer Name:</p>
            <p>
              {`${customerInfo?.firstName || ""} ${
                customerInfo?.lastName || ""
              }` || "SMITH, JANE"}
            </p>
          </div>
          <div className="flex items-center gap-2 font-bold">
            <p className="text-sm">Email:</p>
            <p>{`${customerInfo?.email || ""}`}</p>
          </div>
          <div className="flex items-center gap-2 font-bold">
            <p className="text-sm">Telephone:</p>
            <p>{customerInfo?.telephone || "(972) 123-4567"}</p>
          </div>
          <div className="flex items-center gap-2 font-bold">
            <p className="text-sm">Zip Code:</p>
            <p>{customerInfo?.zipCode || "75189"}</p>
          </div>
        </div>
        <div className="border-b border-gray-200 mt-4"></div>
      </div>
    </div>
  );
};

export default CustomerInfo;
