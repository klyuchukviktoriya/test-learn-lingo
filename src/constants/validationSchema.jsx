import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must not exceed 20 characters")
    .required("Name is required"),

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

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number"),

  phone: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Phone number must be valid")
    .required("Phone number is required"),
});
