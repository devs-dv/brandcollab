import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BrandCreatePost = () => {
  const initialValues = {
    brandName: "",
    productDescription: "",
    targetAudience: "",
    advertisementObjective: "",
    budget: "",
    duration: "",
    contactEmail: "",
  };

  const validationSchema = Yup.object().shape({
    brandName: Yup.string().required("Brand name is required"),
    productDescription: Yup.string().required(
      "Product description is required"
    ),
    targetAudience: Yup.string().required("Target audience is required"),
    advertisementObjective: Yup.string().required(
      "Advertisement objective is required"
    ),
    budget: Yup.number()
      .required("Budget is required")
      .positive("Budget must be positive"),
    duration: Yup.string().required("Duration is required"),
    contactEmail: Yup.string()
      .email("Invalid email address")
      .required("Contact email is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission (e.g., send data to backend)
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Post Advertisement Requirement
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="brandName"
                className="block text-sm font-medium text-gray-700"
              >
                Brand Name:
              </label>
              <Field
                type="text"
                name="brandName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage
                name="brandName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="productDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Product Description:
              </label>
              <Field
                as="textarea"
                name="productDescription"
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage
                name="productDescription"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="targetAudience"
                className="block text-sm font-medium text-gray-700"
              >
                Target Audience:
              </label>
              <Field
                type="text"
                name="targetAudience"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage
                name="targetAudience"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="advertisementObjective"
                className="block text-sm font-medium text-gray-700"
              >
                Advertisement Objective:
              </label>
              <Field
                type="text"
                name="advertisementObjective"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage
                name="advertisementObjective"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700"
              >
                Budget ($):
              </label>
              <Field
                type="number"
                name="budget"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage
                name="budget"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="duration"
                className="block text-sm font-medium text-gray-700"
              >
                Duration:
              </label>
              <Field
                type="text"
                name="duration"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage
                name="duration"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="contactEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Email:
              </label>
              <Field
                type="email"
                name="contactEmail"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage
                name="contactEmail"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BrandCreatePost;
