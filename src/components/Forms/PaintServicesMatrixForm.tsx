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
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import BodyStyledSection from "./BodyStyledSection";

export default function PaintServicesMatrix({ name }: any) {
  const [isHyundaiVIN, setIsHyundaiVIN] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const key = localStorage.getItem("key");

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

  // Uncheck all panels and services
  const handleUncheckAll = () => {
    setSelectedPanels({});
  };

  queryParams.set("page", "2");
  const prevPath = `${location.pathname}?${queryParams.toString()}`;

  const matchingEntry = filterByDealerInfo(
    getDealerInfo().dealerCode,
    getDealerInfo().zipCode
  );

  // VIN Decoder
  const decodeVIN = async (vin: string) => {
    try {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`
      );
      const data = await response.json();
      return data?.Results?.[0];
    } catch (error) {
      console.error("VIN decoding failed:", error);
      return null;
    }
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
    onSubmit: (values) => {
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
    },
    enableReinitialize: true,
  });

  const color = getDefaultColor(formik.values.year, formik.values.model);

  useEffect(() => {
    if (color) {
      formik.setFieldValue("paintMaterials", color);
    }
  }, [color]);

  // Filtered model options based on year
  const selectedYear = formik.values.year;
  const filteredModelOptions =
    selectedYear && yearModelMap[selectedYear]
      ? ["-", ...yearModelMap[selectedYear]]
      : ["-"];

  // Get body panel options and rates
  const { bodyPanelOptions, body_rate, refinish_rate, materials_rate } =
    getBodyPanelOptions(
      formik.values.year,
      formik.values.model,
      matchingEntry?.dealerInfo?.CBSA
    );

  // Panel selection handler
  const handlePanelSelection = (panel: string, selectedService: string) => {
    if (key === "In-Person Scheduling" && panel.includes("Bumper")) {
      return toast.error("SORRY. THIS SELECTION IS UNAVAILABLE");
    }

    const current = selectedPanels[panel] || [];

    let updated: string[] = [];

    if (current.includes(selectedService)) {
      updated = current.filter((s: string) => s !== selectedService);

      // If no services left after removal, uncheck panel
      if (updated.length === 0) {
        // Remove the panel key entirely
        const newSelected = { ...selectedPanels };
        delete newSelected[panel];
        setSelectedPanels(newSelected);
        return;
      }
    } else {
      updated = [selectedService];
    }

    setSelectedPanels({
      ...selectedPanels,
      [panel]: updated,
    });
  };

  // Toggle panel itself (not used much now, but kept)
  const handleSelectPanelServices = (panel: string) => {
  setSelectedPanels((prev: any) => {
    const updated = { ...prev };

    if (updated[panel] && updated[panel].length > 0) {
      // If panel has services, uncheck it by removing panel key
      delete updated[panel];
    } else {
      // If panel not selected, initialize with empty array (no services)
      updated[panel] = [];
    }
    return updated;
  });
};

  // Check if NEXT should be disabled (must have at least one "Repair")
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
      <div className="mx-auto w-full base-sm:p-5">
        <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
          <h1 className="text-center base-sm:text-left text-lg font-bold max-base-sm:w-full">
            PAINT SERVICES MATRIX
          </h1>
          <p className="text-xs text-white italic hidden base-sm:block">
            *All fields required to process request
          </p>
        </div>
        <div className="p-6">
          <form onSubmit={formik.handleSubmit} className="max-base-sm:px-2 pb-2">
            {/* SERVICES & LABOR Section */}
            <div className="flex justify-between">
              <h2 className="text-red-600 font-bold mb-4">SERVICES & LABOR</h2>
              <div className="text-right">
                <span className="text-red-600 font-bold hidden base-xs:block">
                  CUSTOMER NAME:
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
                  CBSA: ["Market Location"],
                }));
              }}
              isDisabled={true}
              options={CBSAOptions}
              className="p-2 bg-[#C5C5C573] border py-5 w-full sm:w-[345px] lg:w-[520px] text-[#E51C22] mb-8"
              label="CBSA : "
            />

            {/* Rate info */}
            <div className="relative">
              <div className="absolute z-[1000] right-0 -top-20 bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-end text-right">
                <label className="text-red-600 font-bold text-sm mb-4">
                  BASE RATES{" "}
                  <span className="text-xs italic text-black">(*based on CBSA)</span>
                </label>
                <p>
                  <strong>Body Rate:</strong> {body_rate || 0}
                </p>
                <p>
                  <strong>Refinish:</strong> {refinish_rate || 0}
                </p>
                <p>
                  <strong>Paint Materials:</strong> {materials_rate || 0}
                </p>
              </div>
            </div>

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
                      onBlur={async (e) => {
                        formik.handleBlur(e);

                        const vin = e.target.value.toUpperCase().trim();
                        const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;

                        if (!vinRegex.test(vin)) {
                          setIsHyundaiVIN(false);
                          toast.error(
                            "THE VIN ENTERED IS NOT VALID. PLEASE CHECK THE NUMBER AND TRY AGAIN."
                          );
                          return;
                        }

                        const decoded = await decodeVIN(vin);

                        if (!decoded || !decoded.Make) {
                          setIsHyundaiVIN(false);
                          toast.error("UNABLE TO DECODE VIN. PLEASE TRY AGAIN.");
                          return;
                        }

                        if (decoded.Make.toUpperCase() !== "HYUNDAI") {
                          setIsHyundaiVIN(false);
                          toast.error("YOU MUST USE A HYUNDAI VIN");
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

            {/* Year, Make, Model Row */}
            <div className="flex items-center flex-wrap gap-4 mb-9">
              {/* Make Field - readonly */}
              <div>
                <input
                  type="text"
                  name="make"
                  value={formik.values.make}
                  readOnly
                  className="bg-gray-200 p-2 rounded"
                />
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
                handlePanelSelection={handlePanelSelection}
                handleSelectPanelServices={handleSelectPanelServices}
                selectedPanels={selectedPanels}
                handleUncheckAll={handleUncheckAll} // Pass the uncheck all handler
              />
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-end base-sm:mt-8 mt-4 gap-4">
              <Link
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