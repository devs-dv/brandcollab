import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../customComponents/Button";


const ChangePassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Current password is required"),
      newPassword: Yup.string()
        .required("New password is required")
        .min(8, "Password must be at least 8 characters"),
      confirmNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm new password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // Your password change logic here
      resetForm();
    },
  });

  return (
    <div className="w-full p-6 lg:p-10">
      <div className="bg-white rounded-lg shadow-lg p-6 lg:p-10">
        <div className="max-w-md mx-auto ">
          <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Current Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`mt-1 p-2 w-full border-b border-gray-300 focus:outline-none rounded-md ${
                  formik.touched.password &&
                  formik.errors.password
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.password &&
              formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword}
                className={`mt-1 p-2 w-full border-b border-gray-300 focus:outline-none rounded-md ${
                  formik.touched.newPassword && formik.errors.newPassword
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.newPassword && formik.errors.newPassword ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.newPassword}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmNewPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <input
                id="confirmNewPassword"
                name="confirmNewPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmNewPassword}
                className={`mt-1 p-2 w-full border-b border-gray-300 focus:outline-none rounded-md ${
                  formik.touched.confirmNewPassword &&
                  formik.errors.confirmNewPassword
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.confirmNewPassword &&
              formik.errors.confirmNewPassword ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.confirmNewPassword}
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
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
