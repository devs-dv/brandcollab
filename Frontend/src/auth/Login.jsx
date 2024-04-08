import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../customComponents/Button";
import { useState, createContext, useContext } from "react";

const Login = () => {

  
  
  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
      password: "",
    },
    validationSchema: Yup.object({
      usernameOrEmail: Yup.string().required("Username or Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // Reset the form to its initial state
      resetForm();
    },
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="usernameOrEmail"
            className="block text-sm font-medium text-gray-700"
          >
            Username or Email
          </label>
          <input
            id="usernameOrEmail"
            name="usernameOrEmail"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.usernameOrEmail}
            className={`mt-1 p-2 w-full border rounded-md ${
              formik.touched.usernameOrEmail && formik.errors.usernameOrEmail
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail ? (
            <div className="text-red-500 text-sm">
              {formik.errors.usernameOrEmail}
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
            className={`mt-1 p-2 w-full border rounded-md ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
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
      </form>
    </div>
  );
};

export default Login;
