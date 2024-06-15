import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../customComponents/Button";
import axios from "axios";

const ChangePassword = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      const timer = setTimeout(() => {
        setIsError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isError]);

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required("Current password is required"),
      password: Yup.string()
        .required("New password is required")
        .min(8, "Password must be at least 8 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm new password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      axios
        .patch("http://localhost:8000/api/v1/updatePassword", values, config)
        .then((response) => {
          console.log(response.data);
          if (response.data.success) {
            setIsSuccess(true);
            resetForm();
          } else {
            setIsError(true);
          }
        })
        .catch((error) => {
          console.error("There was an error changing the password!", error);
          setIsError(true);
        });
    },
  });

  return (
    <div className="w-full p-6 lg:p-10">
      <div className="bg-white rounded-lg shadow-lg p-6 lg:p-10">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label
                htmlFor="currentPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Current Password
              </label>
              <input
                id="currentPassword"
                name="currentPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.currentPassword}
                className={`mt-1 p-2 w-full border-b border-gray-300 focus:outline-none rounded-md ${
                  formik.touched.currentPassword &&
                  formik.errors.currentPassword
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.currentPassword &&
              formik.errors.currentPassword ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.currentPassword}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`mt-1 p-2 w-full border-b border-gray-300 focus:outline-none rounded-md ${
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
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className={`mt-1 p-2 w-full border-b border-gray-300 focus:outline-none rounded-md ${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <Button
              type="submit"
              disabled={!formik.isValid}
              className={`w-full ${
                !formik.isValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Change Password
            </Button>
          </form>
          {isSuccess && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
              Password changed successfully!
            </div>
          )}
          {isError && (
            <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg">
              Invalid credentials!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
