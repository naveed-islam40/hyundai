"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import CustomSelect from "@/components/Dropdown";

export default function PaintServicesMatrix({
  setSelectedPanels,
  selectedPanels,
  name,
  setPaintServiceInfo,
}: any) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      vin: "",
      year: "",
      make: "",
      model: "",
      cesa: "",
      paintMaterials: "",
    },
    validationSchema: Yup.object({
      vin: Yup.string().required("VIN is required"),
      year: Yup.string().required("Year is required"),
      make: Yup.string().required("Make is required"),
      model: Yup.string().required("Model is required"),
      cesa: Yup.string().required("CESA is required"),
      paintMaterials: Yup.string().required("Paint Materials is required"),
    }),
    onSubmit: (values) => {
      setPaintServiceInfo({ ...values, selectedPanels });
      navigate("?page=3");
    },
  });

  const handlePanelSelection = (panel: string, finish: string) => {
    const isExactMatch = Object.entries(selectedPanels).some(
      ([key, value]) => key === panel && value === finish
    );

    if (isExactMatch) {
      setSelectedPanels({ ...selectedPanels, [panel]: "" });
    } else {
      setSelectedPanels({ ...selectedPanels, [panel]: finish });
    }
  };

  console.log("name", name);

  const bodyParts = {
    left: [
      "Left Front Fender",
      "Left Front Door",
      "Deck Lid",
      "Right Rear Quarter Panel",
    ],
    right: ["Roof", "Hood", "Bumper", "Doors"],
  };

  const bodyPanels = {
    left: [
      "Left Front Fender",
      "Left Front Door",
      "Deck Lid",
      "Right Rear Quarter Panel",
    ],
  };

  return (
    <div className="mx-auto rounded-md bg-white p-6 shadow-md">
      <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
        <h1 className="text-lg font-bold">PAINT SERVICES MATRIX</h1>
        <p className="text-xs text-white italic">
          *All fields required to process request
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="ml-">
        {/* SERVICES & LABOR Section */}
        <div className="mb-6">
          <div className="mb-6">
            <div className="flex justify-between">
              <h2 className="text-red-600 font-bold mb-3">SERVICES & LABOR</h2>
              <div className="text-right">
                <span className="text-red-600 font-bold">Customer:</span> {name}
              </div>
            </div>

            {/* VIN Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">VIN:</label>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <input
                    type="text"
                    id="vin"
                    name="vin"
                    placeholder="e.g. Required VIN"
                    className={`p-2 bg-gray-100 border w-[520px] text-[#E51C22] ${
                      formik.touched.vin && formik.errors.vin
                        ? "border-[#E51C22]"
                        : "border-gray-300"
                    } rounded`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.vin}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <div>
                    <p className="text-xs text-gray-500">Authenticate</p>
                    <p className="text-xs text-center text-gray-500">VIN</p>
                  </div>
                  {/* Verified Button  */}
                  <button
                    type="button"
                    className="flex items-center justify-center w-8 h-8 rounded-full"
                  >
                    <img
                      src="/img/verified-icon-512x512-5rv3ez90 2.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              {formik.touched.vin && formik.errors.vin ? (
                <div className="text-[#E51C22] text-xs mt-1">
                  {formik.errors.vin}
                </div>
              ) : null}
              <div className="text-xs text-gray-500 mt-1 italic">
                *Required field
              </div>
            </div>

            {/* Year, Make, Model Row */}
            <div className="flex items-center gap-4 mb-6">
              {/* Year Field */}
              <CustomSelect
                value={formik.values.year}
                onChange={(value: any) => {
                  formik.setFieldValue("year", value);
                }}
                options={["2017", "2018", "2019", "2020"]}
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
                  placeholder="e.g. Hyundai"
                  className={`p-2 bg-[#C5C5C573] border w-[345px] text-[#E51C22]  mb-1
                  rounded`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.make}
                />

                <div className="text-xs text-gray-500 mt-1 italic">
                  *Required field
                </div>
              </div>

              {/* Model Field */}
              <CustomSelect
                value={formik.values.model}
                onChange={(value: any) => {
                  formik.setFieldValue("model", value);
                }}
                options={["Sonata", "Elantra", "Tucson"]}
                placeholder="e.g. Sonata"
                className="focus-visible:ring-[0px] bg-[#F5F6F9] w-[345px] rounded p-2 py-5 mb-1 text-[#E51C22]"
                label="Model : "
              />
            </div>

            {/* CESA Field */}
            <CustomSelect
              value={formik.values.cesa}
              onChange={(value: any) => {
                formik.setFieldValue("cesa", value);
              }}
              options={["CA DIV SAN RAMON", "Option 2", "Option 3"]}
              placeholder="e.g. CA DIV SAN RAMON"
              className="focus-visible:ring-[0px] bg-[#C5C5C573] w-[345px] rounded p-2 py-5 mb-1 text-[#E51C22]"
              label="CBSA : "
            />

            {/* Paint Materials Field */}
            <div className="mt-3">
              <CustomSelect
                value={formik.values.paintMaterials}
                onChange={(value: any) => {
                  formik.setFieldValue("paintMaterials", value);
                }}
                options={["Clear Coat", "Base Coat", "Primer"]}
                placeholder="e.g. Clear Coat"
                className="focus-visible:ring-[0px] bg-[#C5C5C573] w-[345px] rounded p-2 py-5 mb-1 text-[#E51C22]"
                label="Paint Materials : "
              />
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>
          </div>
        </div>

        {/* BODY STYLES Section */}
        <div className="mb-6">
          <h2 className="text-red-600 font-bold mb-3">BODY STYLES</h2>
          <div className="mb-2">
            <p className="text-sm font-bold">
              Panel Types:{" "}
              <span className="font-medium">(Select ALL that apply)</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="border-b border-gray-300 pb-1 mb-3 text-sm text-center">
                Body Style
              </h3>
              <div className="space-y-2">
                {bodyPanels.left.map((part) => (
                  <div key={part} className="flex items-center">
                    <input
                      type="checkbox"
                      id={part.replace(/\s+/g, "")}
                      className="mr-2"
                      onChange={() => handlePanelSelection(part, "Refinish")}
                      checked={selectedPanels[part] === "Refinish"}
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
                  <p className="text-sm font-medium">Refinish</p>
                  {bodyParts.right.map((part) => (
                    <div key={`refinish-${part}`} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`refinish-${part.replace(/\s+/g, "")}`}
                        name={`finish-${part}`}
                        className="mr-2"
                        onChange={() => handlePanelSelection(part, "Refinish")}
                        checked={selectedPanels[part] === "Refinish"}
                      />
                      <label
                        htmlFor={`refinish-${part.replace(/\s+/g, "")}`}
                        className="text-sm"
                      >
                        {part}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Blend</p>
                  {bodyParts.right.map((part) => (
                    <div key={`blend-${part}`} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        id={`blend-${part.replace(/\s+/g, "")}`}
                        name={`finish-${part}`}
                        onChange={() => handlePanelSelection(part, "Blend")}
                        checked={selectedPanels[part] === "Blend"}
                      />

                      <label
                        htmlFor={`blend-${part.replace(/\s+/g, "")}`}
                        className="text-sm"
                      >
                        {part}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 mt-6">
          <Link
            type="button"
            to={"?page=1"}
            className="bg-black text-white px-4 py-2 text-sm rounded-[3px]"
          >
            PREV
          </Link>
          <button
            type="submit"
            className="bg-[#E51C22] text-white px-4 py-2 text-sm rounded-[3px] cursor-pointer"
          >
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
}
