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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import BodyStyledSection from "./BodyStyledSection";

export default function PaintServicesMatrix({
  setSelectedPanels,
  selectedPanels,
  name,
}: any) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const key = localStorage.getItem("key");
  const { setPaintServiceInfo, setYear, setModel, getDealerInfo } =
    usePaintServiceContext();

  queryParams.set("page", "2");
  const prevPath = `${location.pathname}?${queryParams.toString()}`;

  const matchingEntry = filterByDealerInfo(
    getDealerInfo().dealerCode,
    getDealerInfo().zipCode
  );

  const formik = useFormik({
    initialValues: {
      vin: "",
      year: "",
      make: "Hyundai",
      model: "",
      cbsa: matchingEntry?.dealerInfo?.dealerName || "",
      paintMaterials: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (isNextDisabled()) {
        toast.error(
          "YOU MUST SELECT A REFINISH ON A BODY PANEL BEFORE CONTINUING"
        );
        return;
      }
      setPaintServiceInfo({ ...values, selectedPanels });
      queryParams.set("page", "4");
      navigate(`?${queryParams.toString()}`);
    },
  });

  const color = getDefaultColor(formik.values.year, formik.values.model);

  // [cbsa options]
  useEffect(() => {
    if (matchingEntry) {
      formik.setFieldValue("cbsa", matchingEntry.dealerInfo?.dealerName || "");

      setSelectedPanels((prev: any) => ({
        ...prev,
        ["CBSA"]: ["Market Location"],
      }));
    }
  }, [getDealerInfo().dealerCode, getDealerInfo().zipCode]);

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
  const { bodyPanelOptions } = getBodyPanelOptions(
    formik.values.year,
    formik.values.model,
    matchingEntry?.dealerInfo?.CBSA
  );

  //[panel selection]
  const handlePanelSelection = (panel: string, selectedService: string) => {
    if (key === "In-Person Scheduling" && panel.includes("Bumper")) {
      return toast.error("SORRY. THIS SELECTION IS UNAVAILABLE");
    }

    const current = selectedPanels[panel] || [];

    let updated: string[] = [];

    if (current.includes(selectedService)) {
      updated = current.filter((s: string) => s !== selectedService);
    } else {
      updated = [selectedService];
    }

    setSelectedPanels({
      ...selectedPanels,
      [panel]: updated,
    });
  };

  // [panel selection services]
  const handleSelectPanelServices = (part: string) => {
    setSelectedPanels((prev: any) => {
      const updated = { ...prev };

      if (Array.isArray(updated[part]) && updated[part].length > 0) {
        delete updated[part];
      } else {
        updated[part] = ["Repair"];
      }
      return updated;
    });
  };

  const isNextDisabled = () => {
    return Object.values(selectedPanels).some(
      (services: any) => services.length === 0
    );
  };

  return (
    <div className="bg-white base-sm:p-5 rounded-md shadow-sm">
      <div className="mx-auto">
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
            <div className="flex justify-between">
              <h2 className="text-red-600 font-bold text-sm mb-4">
                SERVICES & LABOR
              </h2>
              <div className="text-right">
                <span className="text-red-600 font-bold hidden base-xs:block">
                  Customer:
                </span>{" "}
                {name}
              </div>
            </div>

            {/* CBSA Field */}
            <CustomSelect
              value={formik.values.cbsa || ""}
              onChange={(value: any) => {
                formik.setFieldValue("cbsa", value);
                setSelectedPanels((prev: any) => ({
                  ...prev,
                  ["CBSA"]: ["Market Location"],
                }));
              }}
              isDisabled={true}
              options={CBSAOptions}
              className="p-2 bg-[#C5C5C573] border py-5 w-full sm:w-[345px] lg:w-[520px] text-[#E51C22] mb-8"
              label="CBSA : "
            />

            {/* VIN Field */}
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
                      onBlur={formik.handleBlur}
                      value={formik.values.vin}
                    />
                  </div>
                </div>
                {formik.touched.vin && formik.errors.vin && (
                  <div className="text-gray-600 text-xs mt-1">
                    {formik.errors.vin}
                  </div>
                )}
              </div>
            </div>

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
                placeholder="e.g. Monaco White"
                className="focus-visible:ring-[0px] bg-[#F5F6F9] w-full base-sm:w-[345px] rounded p-2 py-5 mb-1 text-[#E51C22]"
                label="Paint Material : "
              />
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* BODY STYLES Section */}
            <BodyStyledSection
              bodyPanelOptions={bodyPanelOptions}
              handlePanelSelection={handlePanelSelection}
              handleSelectPanelServices={handleSelectPanelServices}
              selectedPanels={selectedPanels}
            />

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
