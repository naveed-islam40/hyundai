import * as Yup from "yup";

export const validationSchema = Yup.object({
  vin: Yup.string().required("VIN is required"),
  year: Yup.string().required("Year is required"),
  make: Yup.string().required("Make is required"),
  model: Yup.string().required("Model is required"),
  cbsa: Yup.string().required("CBSA is required"),
  paintMaterials: Yup.string().required("Paint Materials is required"),
});
