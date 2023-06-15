import * as Yup from "yup";

export const registerSchema = Yup.object({
    username: Yup.string().required("Please enter your username"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter your password")
})