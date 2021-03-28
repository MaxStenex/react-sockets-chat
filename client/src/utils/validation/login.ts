import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please fix your email to continue.")
    .required("Email is required."),
  password: yup
    .string()
    .min(5, "Minimum 5 symbols.")
    .max(255, "Maximum 255 symbols.")
    .required("Password is required."),
});
