import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SideNav from "./navigation/SideNav";
import TopNav from "./navigation/TopNav";
import Text from "../customComponents/Text";

const InfluencerDashboard = () => {
  // Initial values for the form fields
  const initialValues = {
    firstName: "John",
    lastName: "Doe",
    location: "New York",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gmail: "example@gmail.com",
    profilePicture: "", // Initial profile picture URL or base64 data
  };

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    location: Yup.string().required("Location is required"),
    bio: Yup.string(),
  });

  // State for displaying the popup
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <TopNav />
      <div className="flex flex-col lg:flex-row">
        <div className="sticky top-0 left-0 h-screen bg-gray-800 text-white">
          <SideNav />
        </div>

        <div className="w-full lg:w-3/4 xl:w-2/3 p-6 lg:p-10">
          <div className="bg-white rounded-lg shadow-lg p-6 lg:p-10">
            <Text size="large">About</Text>
            <Text size="small" className="mb-6">
              Tell us about yourself so that brands can know who you are.
            </Text>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, values }) => (
                <Form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col justify-center items-center">
                    <label
                      htmlFor="profilePicture"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Profile Picture
                    </label>
                    <div className="relative w-48 h-48 mb-4 overflow-hidden">
                      <img
                        src={values.profilePicture || "/placeholder.jpg"}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                      <label
                        htmlFor="profilePicture"
                        className="absolute bottom-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-md cursor-pointer"
                      >
                        Change
                      </label>
                      <input
                        type="file"
                        id="profilePicture"
                        name="profilePicture"
                        accept="image/*"
                        className="sr-only"
                        onChange={(event) => {
                          setFieldValue(
                            "profilePicture",
                            URL.createObjectURL(event.target.files[0])
                          );
                        }}
                      />
                      {values.profilePicture && (
                        <button
                          type="button"
                          onClick={() => setFieldValue("profilePicture", "")}
                          className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <Field
                      type="text"
                      id="location"
                      name="location"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="location"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="gmail"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gmail
                    </label>
                    <Field
                      type="text"
                      id="gmail"
                      name="gmail"
                      disabled
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="bio"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bio
                    </label>
                    <Field
                      as="textarea"
                      id="bio"
                      name="bio"
                      rows="3"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="bio"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="col-span-2 text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
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
      {/* Popup */}
      {showPopup && (
        <div className="fixed bottom-0 right-0 m-4 bg-white p-4 rounded-md shadow-md">
          Changes are being saved...
        </div>
      )}
    </div>
  );
};

export default InfluencerDashboard;
