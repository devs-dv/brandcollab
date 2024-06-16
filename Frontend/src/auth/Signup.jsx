import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../customComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      consent: false,
      role: "Influencer",
      gender: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      consent: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
      gender: Yup.string().required("Gender is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();

      axios
        .post("http://localhost:8000/api/v1/register", values)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          let myObject = JSON.stringify(response.data.user);
          localStorage.setItem("userData", myObject);
          console.log("Data sent successfully:", response.data);
          if (response.data.success) {
            navigate("/postlanding");
          }
        })
        .catch((error) => {
          console.error("There was an error sending the data!", error);
        });
    },
  });

  return (
    <div className="lg:grid lg:grid-cols-3">
      <div className="max-lg:hidden bg-[url('/assets/signup.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="lg:col-start-2 lg:col-end-4">
        <div className="flex flex-col items-center justify-center h-screen max-lg:bg-[url('/assets/signup.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl shadow-md transform -rotate-6"></div>
            <div className="relative z-10 bg-white rounded-3xl shadow-md overflow-hidden max-w-md">
              <div className="p-8">
                <h2 className="text-gray-800 text-2xl font-semibold mb-4">
                  Sign Up
                </h2>
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                  <div className="flex gap-2 mb-4">
                    <div className="flex-1">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        className={`mt-1 p-2 w-full border-b border-gray-300 focus:outline-none ${
                          formik.touched.firstName && formik.errors.firstName
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="text-red-500 text-sm">
                          {formik.errors.firstName}
                        </div>
                      ) : null}
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        className={`mt-1 p-2 w-full border-b border-gray-300 focus:outline-none ${
                          formik.touched.lastName && formik.errors.lastName
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="text-red-500 text-sm">
                          {formik.errors.lastName}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className={`mt-1 p-2 w-full border-b border-gray-300 focus:outline-none ${
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
                      className={`mt-1 p-2 w-full border-b border-gray-300 focus:outline-none ${
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
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                      className={`mt-1 p-2 w-full border-b border-gray-300 focus:outline-none ${
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
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Gender
                    </label>
                    <div className="flex items-center mt-1">
                      <label className="mr-4 flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="MALE"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          checked={formik.values.gender === "MALE"}
                          className="mr-2"
                        />
                        Male
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="FEMALE"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          checked={formik.values.gender === "FEMALE"}
                          className="mr-2"
                        />
                        Female
                      </label>
                    </div>
                    {formik.touched.gender && formik.errors.gender ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.gender}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="consent" className="flex items-center">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.consent}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">
                        I agree to the terms and conditions
                      </span>
                    </label>
                    {formik.touched.consent && formik.errors.consent ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.consent}
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
                    Submit
                  </Button>
                </form>
                <div className="p-4 bg-white">
                  <div className="text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
