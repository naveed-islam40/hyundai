import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomSelect from "@/components/Dropdown";

export default function PaintServicesMatrix({
  setSelectedPanels,
  selectedPanels,
  name,
  setPaintServiceInfo,
}: any) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  queryParams.set("page", "2");
  const prevPath = `${location.pathname}?${queryParams.toString()}`;

  const formik = useFormik({
    initialValues: {
      vin: "",
      year: "",
      make: "Hyndai",
      model: "",
      cbsa: "",
      paintMaterials: "",
    },
    validationSchema: Yup.object({
      vin: Yup.string().required("VIN is required"),
      year: Yup.string().required("Year is required"),
      make: Yup.string().required("Make is required"),
      model: Yup.string().required("Model is required"),
      cbsa: Yup.string().required("CBSA is required"),
      paintMaterials: Yup.string().required("Paint Materials is required"),
    }),
    onSubmit: (values) => {
      setPaintServiceInfo({ ...values, selectedPanels });
      queryParams.set("page", "4");
      navigate(`?${queryParams.toString()}`);
    },
  });

  const handlePanelSelection = (panel: string, service: string) => {
    const current = selectedPanels[panel] || [];

    let updated;
    if (current.includes(service)) {
      updated = current.filter((s: string) => s !== service);
    } else {
      updated = [...current, service];
    }

    setSelectedPanels({
      ...selectedPanels,
      [panel]: updated,
    });
  };

  const bodyPanels = [
    "Front Bumper",
    "Left Fender",
    "Right Fender",
    "Hood",
    "Left Front Door",
    "Right Front Door",
    "Left Rear Door",
    "Right Rear Door",
    "Roof",
    "Left Quarter Panel",
    "Right Quarter Panel",
    "Deck Lid",
    "Rear Bumper",
    "Left Roof Rail",
    "Right Roof Rail",
    "Cover Car",
    "Corrosion Protection",
    "Hazardous Waste",
    "Color/Sand/Buff",
    "Color Tint",
  ];

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
                  {/* Verified Button  */}
                  {/*<div className="flex flex-col items-center">
                    <div>
                      <p className="text-xs text-gray-500">Authenticate</p>
                      <p className="text-xs text-center text-gray-500">VIN</p>
                    </div>
                    <button
                      type="button"
                      className="flex items-center justify-center w-8 h-8 rounded-full"
                    >
                      <img
                        src="/img/verified-icon-512x512-5rv3ez90 2.svg"
                        alt=""
                      />
                    </button>
                  </div>*/}
                </div>
                {formik.touched.vin && formik.errors.vin && (
                  <div className="text-gray-600 text-xs mt-1">
                    {formik.errors.vin}
                  </div>
                )}
              </div>
            </div>

            {/* Year, Make, Model Row */}
            <div className="flex items-center flex-wrap gap-6 mb-9">
              {/* Year Field */}
              <CustomSelect
                value={formik.values.year}
                onChange={(value: any) => {
                  formik.setFieldValue("year", value);
                }}
                options={[
                  "2010",
                  "2011",
                  "2012",
                  "2013",
                  "2014",
                  "2015",
                  "2016",
                  "2017",
                  "2018",
                  "2019",
                  "2020",
                  "2021",
                  "2022",
                  "2023",
                  "2024",
                  "2025",
                  "2026",
                ]}
                placeholder="e.g. 2017"
                className="focus-visible:ring-[0px] bg-[#F5F6F9] w-[129px] rounded p-2 py-5 mb-1 text-[#E51C22]"
                label="Year : "
              />

              {/* Make Field */}
              <div>
                <label className="block text-sm font-medium mb-1">Make:</label>
                <input
                  type="text"
                  id="make"
                  name="make"
                  className={`bg-[#C5C5C573] w-full base-sm:w-[345px] p-2 mb-1 text-[#E51C22
                  rounded`}
                  disabled
                  value={formik.values.make}
                />
              </div>

              {/* Model Field */}
              <CustomSelect
                value={formik.values.model}
                onChange={(value: any) => {
                  formik.setFieldValue("model", value);
                }}
                options={[
                  "i10",
                  "i20",
                  "Creta",
                  "Elantra",
                  "Ioniq 5",
                  "Ioniq 6",
                  "Kona",
                  "Kona Electric",
                  "Palisade",
                  "Santa Cruz",
                  "Santa Fe",
                  "Sonata",
                  "Tucson",
                  "Venue",
                  "Verna",
                ]}
                placeholder="e.g. Sonata"
                className="focus-visible:ring-[0px] bg-[#F5F6F9] border w-full base-sm:w-[345px] rounded p-2 py-5 mb-1 text-[#E51C22]"
                label="Model : "
              />
            </div>

            {/* CBSA Field - calculations*/}
            <CustomSelect
              value={formik.values.cbsa}
              onChange={(value: any) => {
                formik.setFieldValue("cbsa", value);
                setSelectedPanels((prev: any) => ({
                  ...prev,
                  ["CBSA"]: ["Market Location"],
                }));
              }}
              options={[
                "-Select One-",
                "CA DIV SAN RAMON",
                "AZ PHOENIX-MESA-SCOTTSDALE",
                "AR LITTLE ROCK NORTH LITTLE RO",
              ]}
              placeholder="e.g. CA DIV SAN RAMON"
              className="p-2 bg-[#F5F6F9] border py-5 w-full sm:w-[345px] lg:w-[520px] text-[#E51C22] mb-1"
              label="CBSA : "
            />

            {/* ClearCoat - Three Stage Field - calculations*/}
            <div className="mt-9">
              <CustomSelect
                value={formik.values.paintMaterials}
                onChange={(value: any) => {
                  formik.setFieldValue("paintMaterials", value);
                  setSelectedPanels((prev: any) => ({
                    ...prev,
                    ["Three Stage"]: ["Paint Material-Clear Coat"],
                  }));
                }}
                options={["-Select One-", "Clear Coat", "Three Stage"]}
                placeholder="e.g. Clear Coat"
                className="focus-visible:ring-[0px] bg-[#F5F6F9] w-full base-sm:w-[345px] rounded p-2 py-5 mb-1 text-[#E51C22]"
                label="Clear Coat/Three Stage : "
              />
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* BODY STYLES Section */}
            <div className="mb-6">
              <h2 className="text-red-600 font-bold mb-3">BODY STYLES</h2>
              <div className="mb-2">
                <p className="text-sm font-bold">
                  Panel Types:{" "}
                  <span className="font-medium">(Select ALL that apply)</span>
                </p>
              </div>

              <div className="grid grid-cols-1 base-xs:grid-cols-2 gap-4 max-h-[150px] overflow-y-auto">
                <div>
                  <h3 className="border-b border-gray-300 pb-1 mb-3 text-sm text-center">
                    Body Style
                  </h3>
                  <div className="space-y-2">
                    {bodyPanels.map((part) => (
                      <div key={part} className="flex items-center">
                        <input
                          type="checkbox"
                          id={part.replace(/\s+/g, "")}
                          className="mr-2"
                          onChange={() =>
                            handlePanelSelection(part, "Refinish")
                          }
                          checked={
                            Array.isArray(selectedPanels[part]) &&
                            (selectedPanels[part].includes("Refinish") ||
                              selectedPanels[part].includes("Blend"))
                          }
                        />
                        <label
                          htmlFor={part.replace(/\s+/g, "")}
                          className="text-sm"
                        >
                          {part}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="border-b border-gray-300 pb-1 mb-3 text-sm text-center">
                    Finish and Blend
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      {bodyPanels.map((part) => (
                        <div
                          key={`refinish-${part}`}
                          className="flex items-center"
                        >
                          <input
                            type="checkbox"
                            id={`refinish-${part.replace(/\s+/g, "")}`}
                            name={`finish-${part}`}
                            className="mr-2"
                            onChange={() =>
                              handlePanelSelection(part, "Refinish")
                            }
                            checked={
                              Array.isArray(selectedPanels[part]) &&
                              selectedPanels[part]?.includes("Refinish")
                            }
                          />
                          <label
                            htmlFor={`refinish-${part.replace(/\s+/g, "")}`}
                            className="text-sm"
                          >
                            {"Refinish"}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {bodyPanels.map((part) => (
                        <div
                          key={`blend-${part}`}
                          className="flex items-center"
                        >
                          <input
                            type="checkbox"
                            className="mr-2"
                            id={`blend-${part.replace(/\s+/g, "")}`}
                            name={`finish-${part}`}
                            onChange={() => handlePanelSelection(part, "Blend")}
                            checked={
                              Array.isArray(selectedPanels[part]) &&
                              selectedPanels[part].includes("Blend")
                            }
                          />

                          <label
                            htmlFor={`blend-${part.replace(/\s+/g, "")}`}
                            className="text-sm"
                          >
                            {"Blend"}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
