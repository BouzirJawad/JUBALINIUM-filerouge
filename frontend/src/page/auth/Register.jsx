// src/pages/auth/Register.jsx
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { register as registerService, login as loginService, setAuthHeader } from "../../services/authService";
import { useAuth } from "../../provider/AuthProvider";
import { motion } from "framer-motion";
import { registerSchema } from "../../schemas/RegisterSchema";
import { Loader2 } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  useEffect(() => {
    document.title = "Register • AluMarket";
  }, []);

  const formik = useFormik({
    initialValues: { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" },
    validationSchema: registerSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);

        // Register user
        await registerService(values);

        // Auto-login
        const res = await loginService({ email: values.email, password: values.password });
        const token = res.data?.token;
        const user = res.data?.user;

        if (!token) {
          toast.error("Registered but login failed. Please try signing in.");
          navigate("/login");
          return;
        }

        setAuthHeader(token);
        if (authLogin) authLogin(token, user);

        toast.success("Welcome! Your account was created.");
        navigate("/dashboard");
      } catch (err) {
        const msg =
          err?.response?.data?.message ||
          (Array.isArray(err?.response?.data?.error)
            ? err.response.data.error.map(e => e.msg || e).join(", ")
            : err?.response?.data?.error) ||
          err?.response?.data ||
          err.message ||
          "Registration failed";
        toast.error(msg);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <img src="https://res.cloudinary.com/dljjyowjo/image/upload/v1757855080/undraw_sign-up_z2ku_qwdyd4.svg" alt="Register" className="h-24" />
        </div>

        {/* Title + subtitle */}
        <h2 className="text-2xl font-bold text-center mb-2">Create your account</h2>
        <p className="text-center text-gray-500 mb-6">Start ordering aluminum products & fabrication</p>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <input
              name="firstName"
              type="text"
              placeholder="First name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${
                formik.touched.firstName && formik.errors.firstName ? "border-red-400" : "border-gray-200"
              }`}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.firstName}</p>
            )}
          </div>

          <div>
            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${
                formik.touched.lastName && formik.errors.lastName ? "border-red-400" : "border-gray-200"
              }`}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.lastName}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Email address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${
                formik.touched.email && formik.errors.email ? "border-red-400" : "border-gray-200"
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${
                formik.touched.password && formik.errors.password ? "border-red-400" : "border-gray-200"
              }`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.password}</p>
            )}
          </div>

          <div>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none ${
                formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-red-400" : "border-gray-200"
              }`}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition flex items-center justify-center"
          >
            {formik.isSubmitting ? <Loader2 className="animate-spin" /> : "Create account"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Switch to Login */}
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600 hover:underline font-medium">
            Sign in
          </Link>
        </p>

        {/* Back to Home */}
        <div className="mt-4 text-center">
          <Link to="/" className="text-gray-500 text-sm hover:text-orange-500">
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
