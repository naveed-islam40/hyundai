import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface CustomerFormProps {
  customerInfo: any;
  setCustomerInfo: React.Dispatch<React.SetStateAction<any>>;
}

const validationSchema = Yup.object({
  poNumber: Yup.string().required("Required field"),
  serviceAdvisorFirstName: Yup.string().required("Required field"),
  serviceAdvisorLastName: Yup.string().required("Required field"),
  emailAddress2: Yup.string()
    .email("Invalid email address")
    .required("Required field"),
  telephone2: Yup.string().required("Required field"),
  extension: Yup.string().required("Required field"),
});

export default function DealerForm({
  setCustomerInfo,
  customerInfo,
}: CustomerFormProps) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      poNumber: "",
      serviceAdvisorFirstName: "",
      serviceAdvisorLastName: "",
      emailAddress2: "",
      telephone2: "",
      extension: "",
    },
    validationSchema,
    onSubmit: async () => {},
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const errors = await formik.validateForm();

    if (Object.keys(errors).length > 0) {
      formik.setTouched(
        Object.keys(errors).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {} as Record<string, boolean>)
      );

      toast.error("Please fill in all required fields.");
      return;
    }

    setCustomerInfo(formik.values);
    navigate(nextPath);
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  queryParams.set("page", "3");
  const nextPath = `${location.pathname}?${queryParams.toString()}`;

  queryParams.set("page", "1");
  const prevPath = `${location.pathname}?${queryParams.toString()}`;

  function formatPhoneNumber(value: string) {
  const cleaned = value.replace(/\D/g, ""); // Remove non-numeric characters
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

  if (!match) return value;

  const [, area, prefix, line] = match;

  if (prefix) {
    if (line) return `${area}-${prefix}-${line}`;
    return `${area}-${prefix}`;
  }

  return area;
}

  useEffect(() => {
    formik.setValues(customerInfo);
  }, [customerInfo]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white base-sm:p-5 rounded-md shadow-sm">
      <div className="mx-auto">
        <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
          <h1 className="text-center base-sm:text-left text-lg font-bold  max-base-sm:w-full">
            OVERVIEW DETAILS
          </h1>
          <p className="text-xs text-white italic hidden base-sm:block">
            *All fields MANDATORY required to process request
          </p>
        </div>

        <div className="p-6">
          <h2 className="text-red-600 font-bold text-sm mb-7">
            DEALER INFORMATION
          </h2>

          <form onSubmit={handleSubmit} className="max-base-sm:px-2 pb-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="mb-4">
                <label
                  htmlFor="poNumber"
                  className="block text-sm font-medium mb-1"
                >
                  PO Number :
                </label>
                <Input
                  id="poNumber"
                  name="poNumber"
                  placeholder="e.g. 29032493"
                  className="w-[180px] base-lg:w-72 p-2 border rounded text-[#E51C22] bg-[#F5F6F9] placeholder:italic placeholder:text-xs"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.poNumber}
                />
                {formik.touched.poNumber && formik.errors.poNumber && (
                  <div className="text-xs text-gray-600 mt-1 italic">
                    *{formik.errors.poNumber}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="mb-4">
                <label
                  htmlFor="serviceAdvisorFirstName"
                  className="block text-sm font-medium mb-1"
                >
                  Service Advisor First Name :
                </label>
                <Input
                  id="serviceAdvisorFirstName"
                  name="serviceAdvisorFirstName"
                  placeholder="e.g. John"
                  className="w-[180px] base-lg:w-72 p-2 border rounded text-[#E51C22] bg-[#F5F6F9] placeholder:italic placeholder:text-xs"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.serviceAdvisorFirstName}
                />
                {formik.touched.serviceAdvisorFirstName &&
                  formik.errors.serviceAdvisorFirstName && (
                    <div className="text-xs text-gray-600 mt-1 italic">
                      *{formik.errors.serviceAdvisorFirstName}
                    </div>
                  )}
              </div>

              <div>
                <label
                  htmlFor="serviceAdvisorLastName"
                  className="block text-sm font-medium mb-1"
                >
                  Service Advisor Last Name :
                </label>
                <Input
                  id="serviceAdvisorLastName"
                  name="serviceAdvisorLastName"
                  placeholder="e.g. Smith"
                  className="w-[180px] base-lg:w-72 p-2 border rounded text-[#E51C22] bg-[#F5F6F9] placeholder:italic placeholder:text-xs"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.serviceAdvisorLastName}
                />
                {formik.touched.serviceAdvisorLastName &&
                  formik.errors.serviceAdvisorLastName && (
                    <div className="text-xs text-gray-600 mt-1 italic">
                      *{formik.errors.serviceAdvisorLastName}
                    </div>
                  )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="mb-4">
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium mb-1"
                >
                  Email Address :
                </label>
                <Input
                  id="emailAddress2"
                  name="emailAddress2"
                  type="email"
                  placeholder="e.g. smith.john@gmail.com"
                  className="w-[180px] base-lg:w-72 p-2 border rounded text-[#E51C22] bg-[#F5F6F9] placeholder:italic placeholder:text-xs"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailAddress2}
                />
                {formik.touched.emailAddress2 &&
                  formik.errors.emailAddress2 && (
                    <div className="text-xs text-gray-600 mt-1 italic">
                      *{formik.errors.emailAddress2}
                    </div>
                  )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium mb-1"
                >
                  Telephone :
                </label>
                <Input
                  id="telephone2"
                  name="telephone2"
                  placeholder="e.g. xxx-xxx-xxxx"
                  className="w-[180px] base-lg:w-72 p-2 border rounded text-[#E51C22] bg-[#F5F6F9] placeholder:italic placeholder:text-xs"
                  maxLength={12}
                  onChange={(e) => {
                    const formatted = formatPhoneNumber(e.target.value);
                    formik.setFieldValue("telephone2", formatted);
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.telephone2}
                />
                {formik.touched.telephone2 && formik.errors.telephone2 && (
                  <div className="text-xs text-gray-600 mt-1 italic">
                    *{formik.errors.telephone2}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="extension"
                  className="block text-sm font-medium mb-1"
                >
                  Extension :
                </label>
                <Input
                  id="extension"
                  name="extension"
                  placeholder="e.g. 1001"
                  className="w-full bg-gray-50 text-[#E51C22] placeholder:italic placeholder:text-xs"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.extension}
                />
                {formik.touched.extension && formik.errors.extension && (
                  <div className="text-xs text-gray-600 mt-1 italic">
                    *{formik.errors.extension}
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>

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
