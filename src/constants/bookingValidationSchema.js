import * as yup from "yup";

export const logInValidationSchema = yup.object().shape({

  fullName: yup
    .string()
    .min(5, "Full Name must be at least 5 characters")
    .max(40, "Full Name must not exceed 40 characters")
    .required("Full Name is required"),

  email: yup
    .string()
    .email("Invalid email address")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email must be valid")
    .required("Email is required"),

  phone: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Phone number must be valid")
    .required("Phone number is required"),
});
