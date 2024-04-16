import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Text from "../../customComponents/Text";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const InfDashSocials = () => {
  // Initial values for social media links and followers
  const initialValues = {
    instagram: "",
    instagramFollowers: "",
    twitter: "",
    twitterFollowers: "",
    facebook: "",
    facebookFollowers: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    instagram: Yup.string().url("Invalid Instagram URL"),
    instagramFollowers: Yup.number()
      .min(0, "Followers cannot be negative")
      .required("Followers field is required"),
    twitter: Yup.string().url("Invalid Twitter URL"),
    twitterFollowers: Yup.number()
      .min(0, "Followers cannot be negative")
      .required("Followers field is required"),
    facebook: Yup.string().url("Invalid Facebook URL"),
    facebookFollowers: Yup.number()
      .min(0, "Followers cannot be negative")
      .required("Followers field is required"),
  });

  // Form submission handler
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // Submit logic goes here
    setSubmitting(false);
  };

  return (
    <div className="w-full p-6 lg:p-10">
      <div className="bg-white rounded-lg shadow-lg p-6 lg:p-10 lg:grid lg:grid-cols-4 lg:gap-10">
        <div className="">
          <Text size="large">Social Media</Text>
          <Text size="small" className="mb-6">
            Add links to your social media accounts and the respective number of
            followers.
          </Text>
        </div>
        <div className="lg:col-start-2 lg:col-end-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label
                    htmlFor="instagram"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    <FaInstagram className="mr-2" />
                    Instagram
                  </label>
                  <Field
                    type="text"
                    id="instagram"
                    name="instagram"
                    placeholder="https://instagram.com/yourusername"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="instagram"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="instagramFollowers"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Instagram Followers
                  </label>
                  <Field
                    type="number"
                    id="instagramFollowers"
                    name="instagramFollowers"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="instagramFollowers"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="twitter"
                    className="block text-sm font-medium text-gray-700 flex items-center"
                  >
                    <FaTwitter className="mr-2" />
                    Twitter
                  </label>
                  <Field
                    type="text"
                    id="twitter"
                    name="twitter"
                    placeholder="https://twitter.com/yourusername"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="twitter"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="twitterFollowers"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Twitter Followers
                  </label>
                  <Field
                    type="number"
                    id="twitterFollowers"
                    name="twitterFollowers"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="twitterFollowers"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="facebook"
                    className="block text-sm font-medium text-gray-700 flex items-center"
                  >
                    <FaFacebook className="mr-2" />
                    Facebook
                  </label>
                  <Field
                    type="text"
                    id="facebook"
                    name="facebook"
                    placeholder="https://facebook.com/yourusername"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="facebook"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="facebookFollowers"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Facebook Followers
                  </label>
                  <Field
                    type="number"
                    id="facebookFollowers"
                    name="facebookFollowers"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="facebookFollowers"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-500 text-white px-6 py-3 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default InfDashSocials;
