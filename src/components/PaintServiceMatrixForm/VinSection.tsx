import { usePaintServiceContext } from "@/context/PaintMatrixContext";
import { useVinDecoder } from "@/hook/useVinDecoder";
import { toast } from "sonner";

const VinSection = ({
  formik,
  setIsHyundaiVIN,
}: {
  formik: any;
  setIsHyundaiVIN: any;
  isHyundaiVIN: any;
}) => {
  const { setYear, setModel } = usePaintServiceContext();
  const { decodeVIN } = useVinDecoder();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
      <div className="mb-4">
        <label htmlFor="VIN" className="block text-sm font-medium mb-1">
          VIN :
        </label>
        <div className="flex items-center gap-5">
          <div className="relative">
            <input
              type="text"
              id="vin"
              name="vin"
              maxLength={17}
              placeholder="e.g. Required VIN"
              className={`p-2 bg-gray-100 border w-full sm:w-[345px] lg:w-[520px] text-[#E51C22] ${
                formik.touched.vin && formik.errors.vin
                  ? "border-[#E51C22]"
                  : "border-gray-300"
              } rounded`}
              onChange={formik.handleChange}
              onBlur={async (e) => {
                formik.handleBlur(e);

                const vin = e.target.value.toUpperCase().trim();
                const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;

                if (!vinRegex.test(vin)) {
                  setIsHyundaiVIN(false);
                  toast.error(
                    "The VIN you entered is NOT a valid VIN. Please check the number and try again."
                  );
                  return;
                }

                const decoded = await decodeVIN(vin);

                if (!decoded || !decoded.Make) {
                  setIsHyundaiVIN(false);
                  toast.error("Unable to decode VIN. Please try again.");
                  return;
                }

                if (decoded.Make.toUpperCase() !== "HYUNDAI") {
                  setIsHyundaiVIN(false);
                  toast.error("Must Use a Hyundai VIN");
                  return;
                }

                // VIN is valid Hyundai — allow next step
                setIsHyundaiVIN(true);
                formik.setFieldValue("year", decoded.ModelYear);
                formik.setFieldValue("model", decoded.Model);
                setYear(decoded.ModelYear);
                setModel(decoded.Model);
              }}
              value={formik.values.vin}
            />
          </div>
        </div>
        {formik.touched.vin && formik.errors.vin && (
          <div className="text-gray-600 text-xs mt-1">
            {formik.errors.vin as string}
          </div>
        )}
      </div>
    </div>
  );
};

export default VinSection;
