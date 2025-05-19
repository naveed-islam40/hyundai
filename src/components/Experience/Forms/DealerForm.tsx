import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface CustomerFormProps {
  customerInfo: any;
  setCustomerInfo: React.Dispatch<React.SetStateAction<any>>;
}

const validationSchema = Yup.object({
  poNumber: Yup.string().required("Required field"),
  serviceAdvisorFirstName: Yup.string().required("Required field"),
  serviceAdvisorLastName: Yup.string().required("Required field"),
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required("Required field"),
  telephone: Yup.string().required("Required field"),
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
      emailAddress: "",
      telephone: "",
      extension: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setCustomerInfo(values);
      navigate(nextPath);
    },
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  queryParams.set("page", "3");
  const nextPath = `${location.pathname}?${queryParams.toString()}`;

  queryParams.set("page", "1");
  const prevPath = `${location.pathname}?${queryParams.toString()}`;

  useEffect(() => {
    formik.setValues(customerInfo);
  }, [customerInfo]);

  console.log(customerInfo);

  return (
    <div className="bg-white sm:p-8 rounded-md shadow-sm">
      <div className="mx-auto">
        <div className="flex justify-between items-center mb-6 border-b bg-[#000000] text-white p-5">
          <h1 className="text-center base-sm:text-left text-lg font-bold  max-base-sm:w-full">
            OVERVIEW DETAILS
          </h1>
          <p className="text-xs text-white italic hidden base-sm:block">
            *All fields required to process request
          </p>
        </div>

        <div className="p-6">
          <h2 className="text-red-600 font-bold text-sm mb-4">
            DEALER INFORMATION
          </h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="poNumber"
                className="block text-sm font-bold mb-1"
              >
                PO Number:
              </label>
              <Input
                id="poNumber"
                name="poNumber"
                placeholder="e.g. 29032493"
                className="w-full max-w-xs bg-gray-50 text-[#E51C22] placeholder:italic placeholder:text-xs"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.poNumber}
              />
              {formik.touched.poNumber && formik.errors.poNumber ? (
                <div className="text-xs text-gray-500 mt-1 italic">
                  *{formik.errors.poNumber}
                </div>
              ) : (
                <div className="text-xs text-gray-500 mt-1 italic">
                  *Mandatory Required field
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label
                  htmlFor="serviceAdvisorFirstName"
                  className="block text-sm font-bold mb-1"
                >
                  Service Advisor First Name:
                </label>
                <Input
                  id="serviceAdvisorFirstName"
                  name="serviceAdvisorFirstName"
                  placeholder="e.g. John"
                  className="w-full bg-gray-50 text-[#E51C22] placeholder:italic placeholder:text-xs"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.serviceAdvisorFirstName}
                />
                {formik.touched.serviceAdvisorFirstName &&
                formik.errors.serviceAdvisorFirstName ? (
                  <div className="text-xs text-gray-500 mt-1 italic">
                    *{formik.errors.serviceAdvisorFirstName}
                  </div>
                ) : (
                  <div className="text-xs text-gray-500 mt-1 italic">
                    *Mandatory Required field
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="serviceAdvisorLastName"
                  className="block text-sm font-bold mb-1"
                >
                  Service Advisor Last Name:
                </label>
                <Input
                  id="serviceAdvisorLastName"
                  name="serviceAdvisorLastName"
                  placeholder="e.g. Smith"
                  className="w-full bg-gray-50 text-[#E51C22] placeholder:italic placeholder:text-xs"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.serviceAdvisorLastName}
                />
                {formik.touched.serviceAdvisorLastName &&
                formik.errors.serviceAdvisorLastName ? (
                  <div className="text-xs text-gray-500 mt-1 italic">
                    *{formik.errors.serviceAdvisorLastName}
                  </div>
                ) : (
                  <div className="text-xs text-gray-500 mt-1 italic">
                    *Mandatory Required field
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="emailAddress"
                className="block text-sm font-bold mb-1"
              >
                Email Address:
              </label>
              <Input
                id="emailAddress"
                name="emailAddress"
                type="email"
                placeholder="e.g. smith.john@gmail.com"
                className="w-full max-w-xs bg-gray-50 text-[#E51C22] placeholder:italic placeholder:text-xs"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.emailAddress}
              />
              {formik.touched.emailAddress && formik.errors.emailAddress ? (
                <div className="text-xs text-gray-500 mt-1 italic">
                  *{formik.errors.emailAddress}
                </div>
              ) : (
                <div className="text-xs text-gray-500 mt-1 italic">
                  *Mandatory Required field
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label
                  htmlFor="telephone"
                  className="block text-sm font-bold mb-1"
                >
                  Telephone:
                </label>
                <Input
                  id="telephone"
                  name="telephone"
                  placeholder="e.g. xxx-xxx-xxxx"
                  className="w-full bg-gray-50 text-[#E51C22] placeholder:italic placeholder:text-xs"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.telephone}
                />
                {formik.touched.telephone && formik.errors.telephone ? (
                  <div className="text-xs text-gray-500 mt-1 italic">
                    *{formik.errors.telephone}
                  </div>
                ) : (
                  <div className="text-xs text-gray-500 mt-1 italic">
                    *Mandatory Required field
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="extension"
                  className="block text-sm font-bold mb-1"
                >
                  Extension:
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
                {formik.touched.extension && formik.errors.extension ? (
                  <div className="text-xs text-gray-500 mt-1 italic">
                    *{formik.errors.extension}
                  </div>
                ) : (
                  <div className="text-xs text-gray-500 mt-1 italic">
                    *Mandatory Required field
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-8 space-x-2">
              <Link to={`${prevPath}`}>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-black text-white hover:bg-black hover:text-white cursor-pointer rounded-[3px]"
                >
                  PREV
                </Button>
              </Link>

              <Button
                type="submit"
                className="bg-[#E51C22] hover:bg-[#E51C22] rounded-[3px] cursor-pointer"
                disabled={formik.isSubmitting}
              >
                NEXT
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
