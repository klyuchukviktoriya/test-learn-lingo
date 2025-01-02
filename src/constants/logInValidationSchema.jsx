import * as yup from "yup";

export const logInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email must be valid")
    .required("Email is required"),

  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Your password must be at least 8 characters long")
    // .matches(/[A-Z]/, "Include at least one uppercase letter")
    // .matches(/[a-z]/, "Include at least one lowercase letter")
    .matches(/\d/, "Include at least one number"),
});