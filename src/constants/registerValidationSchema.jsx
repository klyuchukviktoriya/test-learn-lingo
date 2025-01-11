import * as yup from "yup";

export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must not exceed 20 characters")
    .required("Name is required"),

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
