import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = yup.object().shape({
    firstName: yup.string().min(3, "First name too short").max(20).required("First name required"),
    lastName: yup.string().min(3, "Last name too short").max(20).required("Last name required"),
    email: yup.string().email("Enter a valid email").lowercase().trim().required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters")
    .matches(/\d/, "Password must contain a number")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "passwords must match").required("Please confirm your password")
})