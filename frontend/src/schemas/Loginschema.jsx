import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").lowercase().trim().required("email required"), 
    password: yup.string().min(6).required("password required")
})