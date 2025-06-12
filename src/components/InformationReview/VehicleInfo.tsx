const VehicleInfo = ({
  paintServiceInfo,
  scheduleDate,
}: {
  paintServiceInfo: any;
  scheduleDate: any;
}) => {
  const rental1 = localStorage.getItem("rental1");
  const rental2 = localStorage.getItem("rental2");
  const agreed = localStorage.getItem("agreed");
  return (
    <div>
      <div className="mb-6 flex border-b pb-5 flex-col base-lg:flex-row">
        <div className="flex-1">
          <h3 className="text-red-600 font-bold text-sm mb-2">
            Vehicle Information
          </h3>

          <div className="grid grid-cols-1 base-lg:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 font-bold">
              <p className="text-sm font-bold">CBSA:</p>
              <p>{paintServiceInfo?.cbsa || "CA Dir San Ramon"}</p>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <p className="text-sm font-bold">Year:</p>
              <p>{paintServiceInfo?.year || 2017}</p>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <p className="text-sm font-bold">Make:</p>
              <p>{paintServiceInfo?.make || "Hyundai"}</p>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <p className="text-sm font-bold">Model:</p>
              <p>{paintServiceInfo?.model || "Sonata"}</p>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <p className="text-sm font-bold">VIN:</p>
              <p>{paintServiceInfo?.vin || "5NPE34ZJXNH140004"}</p>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <p className="text-sm font-bold">Paint Materials/Color:</p>
              <p>
                {paintServiceInfo?.paintMaterials ||
                  "Ice/Quartz White Pearl Tricoat"}
              </p>
            </div>
          </div>
        </div>
        {Object.entries(scheduleDate || {}).length > 0 && (
          <div className="bg-[#E51C22] text-white p-4 rounded w-[289px] flex flex-col justify-between mt-10 base-lg:mt-0">
            <h3 className="font-bold text-center text-xl">SCHEDULED DATE</h3>
            <div className="flex items-center justify-center mt-1">
              <div className="mr-8">
                <p className="text-xs text-center">DATE</p>
                <p className="font-bold text-2xl">
                  {new Date(scheduleDate?.date || "").toLocaleDateString() ||
                    ""}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="space-y-4 my-2 border-b pb-5">
        <h1 className="font-bold text-[#E51C22]">Disclaimers</h1>
        <div className="flex flex-col gap-2.5">
          <h1 className="font-bold">
            RENTAL_1 :{" "}
            <span className="font-medium">
              {rental1 == "yes" ? "REQUIRE" : "NOT REQUIRE"}
            </span>
          </h1>
          <h1 className="font-bold">
            RENTAL_2 :{" "}
            <span className="font-medium">
              {rental2 == "yes" ? "REQUIRE" : "NOT REQUIRE"}
            </span>
          </h1>
          <h1 className="font-bold">
            Agreed : <span className="font-medium">{agreed}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;
