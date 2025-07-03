const DealerInfo = ({ dealerInfo }: any) => {
  return (
    <div className="mb-6">
      <h3 className="text-red-600 font-bold text mb-2">
        Dealer Information
      </h3>
      <div className="grid grid-cols-1 base-lg:grid-cols-3 gap-4">
        <div className="flex items-center gap-2 font-bold">
          <p className="text-sm">Service Advisor Name:</p>
          <p>
            {`${dealerInfo?.serviceAdvisorFirstName || ""} ${
              dealerInfo?.serviceAdvisorLastName || ""
            }` || "SMITH, JANE"}
          </p>
        </div>
        <div className="flex items-center gap-2 font-bold">
          <p className="text-sm">Email:</p>
          <p>{`${dealerInfo?.emailAddress2 || ""}`}</p>
        </div>
        <div className="flex items-center gap-2 font-bold">
          <p className="text-sm">Telephone:</p>
          <p>{dealerInfo?.telephone2 || "(972) 123-4567"}  Ext. {dealerInfo?.extension || "1002"}</p>
        </div>
        <div className="flex items-center gap-2 font-bold">
          <p className="text-sm">PO Number:</p>
          <p>{dealerInfo?.poNumber || "75189"}</p>
        </div>
      </div>
      <div className="border-b border-gray-200 mt-4"></div>
    </div>
  );
};

export default DealerInfo;
