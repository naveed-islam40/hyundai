import CustomSelect from "@/components/Dropdown";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

interface CustomerFormProps {
  customerInfo: any;
  setCustomerInfo: React.Dispatch<React.SetStateAction<any>>;
}

const validationSchema = Yup.object({
  zipCode: Yup.string().required("Required field"),
  firstName: Yup.string().required("Required field"),
  lastName: Yup.string().required("Required field"),
  email: Yup.string().email("Invalid email address").required("Required field"),
  telephone: Yup.string().required("Required field"),
  type: Yup.string().required("Required field"),
});

const CustomerForm = ({ setCustomerInfo, customerInfo }: CustomerFormProps) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      zipCode: "",
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      type: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setCustomerInfo(values);
    },
  });

  const handleNavigate = () => {
    if (
      (formik.values.zipCode,
      formik.values.zipCode,
      formik.values.zipCode,
      formik.values.zipCode,
      formik.values.zipCode,
      formik.values.zipCode)
    ) {
      navigate("?page=2");
    }
  };

  useEffect(() => {
    formik.setValues(customerInfo);
  }, [customerInfo]);

  return (
    <div className="bg-white base-sm:p-5 rounded-md shadow-sm">
      <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
        <h1 className="text-center base-sm:text-left text-lg font-bold  max-base-sm:w-full">
          OVERVIEW DETAILS
        </h1>
        <p className="text-xs text-white italic hidden base-sm:block">
          *All fields required to process request
        </p>
      </div>

      <div className="mb-6 ml-10">
        <h2 className="text-[#E51C22] font-semibold text-sm mb-4">
          CUSTOMER INFORMATION
        </h2>

        <form onSubmit={formik.handleSubmit} className="max-base-sm:px-2 pb-2">
          <div className="mb-4">
            <label htmlFor="zipCode" className="block text-sm font-medium mb-1">
              Zip Code:
            </label>
            <input
              id="zipCode"
              name="zipCode"
              type="text"
              placeholder="e.g. 75169"
              className="w-[180px] base-lg:w-72 p-2 border rounded text-[#E51C22] bg-[#F5F6F9] placeholder:italic placeholder:text-xs"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zipCode}
            />
            {formik.touched.zipCode && formik.errors.zipCode ? (
              <div className="text-xs text-[#000000] mt-1 italic">
                *Required field
              </div>
            ) : (
              <div className="text-xs text-[#000000] mt-1 italic">
                *Required field
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 base-lg:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1"
              >
                First Name:
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="e.g. John"
                className="w-full base-lg:w-72 p-2 border rounded text-[#E51C22] bg-[#F5F6F9] placeholder:italic placeholder:text-xs"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-xs text-[#000000] mt-1 italic">
                  *Required field
                </div>
              ) : (
                <div className="text-xs text-[#000000] mt-1 italic">
                  *Required field
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1"
              >
                Last Name:
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="e.g. Smith"
                className="w-full base-lg:w-72 p-2 border rounded text-[#E51C22] bg-[#F5F6F9] placeholder:italic placeholder:text-xs"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-xs text-[#000000] mt-1 italic">
                  *Required field
                </div>
              ) : (
                <div className="text-xs text-[#000000] mt-1 italic">
                  *Required field
                </div>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="e.g. smith.john@gmail.com"
              className="w-full base-lg:w-72 p-2 border rounded text-[#E51C22] bg-[#F5F6F9] placeholder:italic placeholder:text-xs"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-xs text-[#000000] mt-1 italic">
                *Required field
              </div>
            ) : (
              <div className="text-xs text-[#000000] mt-1 italic">
                *Required field
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 base-lg:grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="telephone"
                className="block text-sm font-medium mb-1"
              >
                Telephone:
              </label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                placeholder="e.g. xxx-xxx-xxxx"
                className="w-full base-lg:w-72 p-2 border rounded text-[#E51C22] bg-[#F5F6F9] placeholder:italic placeholder:text-xs"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telephone}
              />
              {formik.touched.telephone && formik.errors.telephone ? (
                <div className="text-xs text-[#000000] mt-1 italic">
                  *Required field
                </div>
              ) : (
                <div className="text-xs text-[#000000] mt-1 italic">
                  *Required field
                </div>
              )}
            </div>

            <CustomSelect
              value={formik.values.type}
              onChange={(value: any) => {
                formik.setFieldValue("type", value);
              }}
              options={["Contact", "Other"]}
              placeholder=" -- Select --"
              className="focus-visible:ring-[0px] bg-[#F5F6F9] w-[180px] rounded p-2 py-5 mt-1 text-[#E51C22]"
              label="Type:"
            />
          </div>

          <div className="flex justify-end base-sm:mt-8 mt-4">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors cursor-pointer"
              onClick={handleNavigate}
            >
              NEXT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
