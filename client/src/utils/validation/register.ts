import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(1, "Minimum 1 symbols.")
    .max(30, "Maximum 30 symbols.")
    .required("Firstname is required."),
  lastName: yup
    .string()
    .min(1, "Minimum 1 symbols.")
    .max(30, "Maximum 30 symbols.")
    .required("Lastname is required."),
  email: yup
    .string()
    .email("Please fix your email to continue.")
    .required("Email is required."),
  password: yup
    .string()
    .min(5, "Minimum 5 symbols.")
    .max(255, "Maximum 255 symbols.")
    .required("Password is required."),
  confirmPassword: yup
    .string()
    .required("Please, confirm your password.")
    .oneOf([yup.ref("password"), null], "Passwords are not equals."),
});
