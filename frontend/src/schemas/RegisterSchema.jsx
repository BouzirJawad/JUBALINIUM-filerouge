import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = yup.object().shape({
    firstName: yup.string().min(3, "first name must be at least 3 characters").max(20).required("first name required"),
    lastName: yup.string().min(3, "first name must be at least 3 characters").max(20).required("last name required"),
    email: yup.string().email("Please enter a valid email").lowercase().trim().required("email required"),
    password: yup.string().min(6, "Password must be at least 6 characters").matches(passwordRules, { message: "Please create a stronger password"}).required("password required") ,
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "passwords must match").required("Please confirm your password")
})