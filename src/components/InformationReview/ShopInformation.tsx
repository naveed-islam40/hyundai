const ShopInformation = () => {
  return (
    <div className="mb-6">
      <h3 className="text-red-600 font-bold text mb-2">
        Nearest Shop Information
      </h3>
      <div className="grid grid-cols-1 base-lg:grid-cols-2 gap-4">
        <div className="flex items-center gap-2 font-bold">
          <p className="text-sm">Shop Location :</p>
          <p>Lee Hyundai of Fayetteville</p>
        </div>
        <div className="flex items-center gap-2 font-bold">
          <p className="text-sm shrink-0">Shop Address :</p>
          <p>1960 Skibo Rd, Fayetteville, NC 28314</p>
        </div>
      </div>
      <div className="border-b border-gray-200 mt-4"></div>
    </div>
  );
};

export default ShopInformation;
