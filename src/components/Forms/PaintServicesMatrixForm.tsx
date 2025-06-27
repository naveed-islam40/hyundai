import CustomSelect from "@/components/Dropdown";
import { usePaintServiceContext } from "@/context/PaintMatrixContext";
import yearModelMap from "@/data/yearModelMap";
import {
  filterByDealerInfo,
  getDefaultColor,
} from "@/helper/filterByDealerInfo";
import { getBodyPanelOptions } from "@/helper/getBodyPanelOptions";
import { CBSAOptions, options, yearOptions } from "@/static/painMatrixOptions";
import { validationSchema } from "@/validation/PaintServicesMatrixValidation";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import BodyStyledSection from "./BodyStyledSection";
import HeaderSection from "../PaintServiceMatrixForm/HeaderSection";
import BaseRatesDisplay from "../PaintServiceMatrixForm/BaseRatesDisplay";
import VinSection from "../PaintServiceMatrixForm/VinSection";

export default function PaintServicesMatrix({ name }: any) {
  const [isHyundaiVIN, setIsHyundaiVIN] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const {
    setPaintServiceInfo,
    setYear,
    setModel,
    getDealerInfo,
    setSelectedPanels,
    selectedPanels,
    setPct,
    paintServiceInfo,
  } = usePaintServiceContext();

  queryParams.set("page", "2");
  const prevPath = `${location.pathname}?${queryParams.toString()}`;

  const matchingEntry = filterByDealerInfo(
    getDealerInfo().dealerCode,
    getDealerInfo().zipCode
  );

  // [handle submit]
  const handleSubmit = (values: any) => {
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;

    if (!vinRegex.test(values.vin)) {
      toast.error(
        "The VIN you entered is NOT a valid VIN. Please check the number and try again."
      );
      return;
    }

    if (!isHyundaiVIN) {
      toast.error("Must Use a Hyundai VIN");
      return;
    }

    if (isNextDisabled()) {
      toast.error(
        "YOU MUST SELECT A REFINISH ON A BODY PANEL BEFORE CONTINUING"
      );
      return;
    }

    setPaintServiceInfo({ ...values, selectedPanels });
    queryParams.set("page", "4");
    navigate(`?${queryParams.toString()}`);
  };

  const formik = useFormik({
    initialValues: {
      vin: paintServiceInfo?.vin || "",
      year: paintServiceInfo?.year || "",
      make: "Hyundai",
      model: paintServiceInfo?.model || "",
      cbsa: matchingEntry?.dealerInfo?.dealerName || "",
      paintMaterials: paintServiceInfo?.paintMaterials || "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  const color = getDefaultColor(formik.values.year, formik.values.model);

  useEffect(() => {
    if (color) {
      formik.setFieldValue("paintMaterials", color);
    }
  }, [color]);

  // [model options]
  const selectedYear = formik.values.year;
  const filteredModelOptions =
    selectedYear && yearModelMap[selectedYear]
      ? ["-", ...yearModelMap[selectedYear]]
      : ["-"];

  // [bodyPenal Option]
  const { bodyPanelOptions, body_rate, refinish_rate, materials_rate } =
    getBodyPanelOptions(
      formik.values.year,
      formik.values.model,
      matchingEntry?.dealerInfo?.CBSA
    );

  const isNextDisabled = () => {
    return !Object.values(selectedPanels).some((services: any) =>
      services.includes("Repair")
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="mx-auto max-w-5xl w-full base-sm:p-5">
        {" "}
        {/* max-w-6xl  */}
        <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
          <h1 className="text-center base-sm:text-left text-lg font-bold  max-base-sm:w-full">
            PAINT SERVICES MATRIX
          </h1>
          <p className="text-xs text-white italic hidden base-sm:block">
            *All fields required to process request
          </p>
        </div>
        <div className="p-6">
          <form
            onSubmit={formik.handleSubmit}
            className="max-base-sm:px-2 pb-2"
          >
            {/* SERVICES & LABOR Section */}
            <HeaderSection name={name} />

            {/* CBSA Field */}
            <CustomSelect
              value={formik.values.cbsa || ""}
              onChange={() => {}}
              isDisabled={true}
              options={CBSAOptions}
              className="p-2 bg-[#C5C5C573] border py-5 w-full sm:w-[345px] lg:w-[520px] text-[#E51C22] mb-8"
              label="CBSA : "
            />
            {/* Wrapper must be relative */}
            <div className="relative">
              {/* CBSA BASE RATE CHANGES */}
              <BaseRatesDisplay
                body_rate={body_rate}
                refinish_rate={refinish_rate}
                materials_rate={materials_rate}
              />
            </div>

            {/* VIN Field */}
            <VinSection
              formik={formik}
              isHyundaiVIN={isHyundaiVIN}
              setIsHyundaiVIN={setIsHyundaiVIN}
            />

            {/* Year, Make, Model Row */}
            <div className="flex items-center flex-wrap gap-4 mb-9">
              {/* Make Field */}
              <div>
                <input type="text" name="make" value={formik.values.make} />
              </div>

              {/* Year Field */}
              <CustomSelect
                value={formik.values.year}
                onChange={(value: any) => {
                  formik.setFieldValue("year", value);
                  setYear(value);
                  formik.setFieldValue("model", "");
                  setPct([]);
                  setSelectedPanels({});
                }}
                options={yearOptions}
                placeholder="-Select One-"
                className="focus-visible:ring-[0px] bg-[#F5F6F9] w-[129px] rounded p-2 py-5 mb-1 text-[#E51C22]"
                label="Year : "
              />

              {/* Model Field (filtered) */}
              <CustomSelect
                value={formik.values.model}
                onChange={(value: any) => {
                  formik.setFieldValue("model", value);
                  setModel(value);
                }}
                options={filteredModelOptions}
                placeholder="-Select One-"
                className="focus-visible:ring-[0px] bg-[#F5F6F9] border w-full base-sm:w-[345px] rounded p-2 py-5 mb-1 text-[#E51C22]"
                label="Model : "
              />
            </div>

            {/* ClearCoat - Three Stage Field - calculations*/}
            <div className="mt-9">
              <CustomSelect
                value={formik.values.paintMaterials}
                onChange={(value: any) => {
                  formik.setFieldValue("paintMaterials", value);

                  setSelectedPanels((prev: any) => {
                    const cleanedPanels = Object.fromEntries(
                      Object.entries(prev).filter(
                        ([key]) => !options.includes(key)
                      )
                    );

                    return {
                      ...cleanedPanels,
                      [value]: ["Three Stage"],
                    };
                  });
                }}
                options={options}
                isDisabled={!formik.values.model || formik.values.model === "-"}
                placeholder="e.g. Monaco White"
                className="focus-visible:ring-[0px] bg-[#F5F6F9] w-full base-sm:w-[345px] rounded p-2 py-5 mb-1 text-[#E51C22]"
                label="Paint Material : "
              />
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* BODY STYLES Section */}
            {formik.values.model && formik.values.model !== "-" && (
              <BodyStyledSection
                bodyPanelOptions={bodyPanelOptions}
                selectedPanels={selectedPanels}
              />
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-end base-sm:mt-8 mt-4 gap-4">
              <Link
                type="button"
                to={`${prevPath}`}
                className="bg-[#000000] text-white px-6 py-2 rounded-[3px] hover:bg-[#000000] hover:text-white transition-colors cursor-pointer"
              >
                PREV
              </Link>
              <button
                type="submit"
                className="bg-[#E51C22] text-white px-6 py-2 rounded-[3px] hover:bg-[#E51C22] hover:text-white transition-colors cursor-pointer"
              >
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
