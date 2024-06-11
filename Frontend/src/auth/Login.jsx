import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../customComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Username or Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
      role: Yup.string().required("Role is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      axios
        .post("http://localhost:8000/api/v1/login", values)
        .then((response) => {
          console.log("Data sent successfully:", response.data.token);
          localStorage.setItem("token", response.data.token);
          if (response.data.success) {
            if (values.role === "Influencer") navigate("/postlanding");
            else navigate("/BrandPostLanding");
          }
        })
        .catch((error) => {
          console.error("There was an error sending the data!", error);
        });
    },
  });

  return (
    <div className="lg:grid lg:grid-cols-3">
      <div className="max-lg:hidden bg-[url('/assets/login.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="lg:col-start-2 lg:col-end-4 flex items-center justify-center h-screen max-lg:bg-[url('/assets/login.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl shadow-md transform -rotate-6" />
          <form
            onSubmit={formik.handleSubmit}
            className="relative z-10 w-full max-w-md p-6 bg-white rounded-3xl shadow-md"
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Username or Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <div className="flex items-center mt-1">
                <label className="mr-4 flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="Influencer"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.role === "Influencer"}
                    className="mr-2"
                  />
                  Influencer
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="Promoter"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.role === "Promoter"}
                    className="mr-2"
                  />
                  Promoter
                </label>
              </div>
              {formik.touched.role && formik.errors.role ? (
                <div className="text-red-500 text-sm">{formik.errors.role}</div>
              ) : null}
            </div>
            <Button
              type="submit"
              disabled={!formik.isValid}
              className={`w-full ${
                !formik.isValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Submit
            </Button>
            <div className="flex mt-4 justify-center">
              <p>Signup as a ??</p>
              <Link
                to="/signup"
                className="text-blue-500 hover:text-blue-700 hover:underline"
              >
                {" "}
                Influencer
              </Link>
              <p> , </p>
              <Link
                to="/brandSignup"
                className="text-blue-500 hover:text-blue-700 hover:underline"
              >
                {" "}
                Promoter
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
