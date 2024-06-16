import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Country, State, City } from "country-state-city";
import axios from "axios";

const BrandCreatePost = () => {
  const dataString = localStorage.getItem("userData");
  const dataObject = dataString ? JSON.parse(dataString) : {};
  const initialValues = {
    brandName: dataObject.brandName || "",
    industry: "",
    targetAudience: "",
    description: "",
    budget: "",
    duration: "",
    followersRequired: "",
    country: dataObject.country || "",
    state: dataObject.state || "",
    city: dataObject.city || "",
    email: dataObject.email || "",
    format: "",
  };

  const countryData = Country.getAllCountries();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (dataObject.country) {
      setStates(State.getStatesOfCountry(dataObject.country));
    }
    if (dataObject.state && dataObject.country) {
      setCities(City.getCitiesOfState(dataObject.country, dataObject.state));
    }
  }, [dataObject.country, dataObject.state]);

  const handleCountryChange = (e, setFieldValue) => {
    const selectedCountry = e.target.value;
    setFieldValue("country", selectedCountry);
    setFieldValue("state", ""); // Reset state
    setFieldValue("city", ""); // Reset city
    setStates(State.getStatesOfCountry(selectedCountry));
    setCities([]); // Reset cities
  };

  const handleStateChange = (e, values, setFieldValue) => {
    const selectedState = e.target.value;
    setFieldValue("state", selectedState);
    setFieldValue("city", ""); // Reset city
    setCities(City.getCitiesOfState(values.country, selectedState));
  };

  const validationSchema = Yup.object().shape({
    brandName: Yup.string().required("Brand name is required"),
    industry: Yup.string().required("Industry is required"),
    targetAudience: Yup.string().required("Target audience is required"),
    description: Yup.string().required("Description is required"),
    budget: Yup.number()
      .required("Budget is required")
      .positive("Budget must be positive"),
    duration: Yup.string().required("Duration is required"),
    followersRequired: Yup.number()
      .required("Followers required is required")
      .positive("Followers required must be positive"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    format: Yup.string().required("Format is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/profile/save",
        values,
        config
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        let myObject = JSON.stringify(response.data.user);
        localStorage.setItem("userData", myObject);
        console.log("Form submission successful:", response.data);
        resetForm();
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 6000);
      } else {
        console.error("Form submission failed:", response.data.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const Popup = ({ message, show }) => {
    if (!show) return null;
    return (
      <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
        {message}
      </div>
    );
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
        {({ isSubmitting, setFieldValue, values }) => (
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
                disabled
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
                htmlFor="industry"
                className="block text-sm font-medium text-gray-700"
              >
                Industry:
              </label>
              <Field
                type="text"
                name="industry"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage
                name="industry"
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
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description:
              </label>
              <Field
                as="textarea"
                name="description"
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage
                name="description"
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
                htmlFor="followersRequired"
                className="block text-sm font-medium text-gray-700"
              >
                Followers Required:
              </label>
              <Field
                type="number"
                name="followersRequired"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage
                name="followersRequired"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <Field
                as="select"
                id="country"
                name="country"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                onChange={(e) => handleCountryChange(e, setFieldValue)}
              >
                <option value="">Select Country</option>
                {countryData.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="country"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <Field
                as="select"
                id="state"
                name="state"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                onChange={(e) => handleStateChange(e, values, setFieldValue)}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="state"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <Field
                as="select"
                id="city"
                name="city"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <Field
                type="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                disabled
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="format"
                className="block text-sm font-medium text-gray-700"
              >
                Format:
              </label>
              <div className="mt-1">
                <label className="inline-flex items-center mr-4">
                  <Field
                    type="radio"
                    name="format"
                    value="Reels"
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2">Reels</span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <Field
                    type="radio"
                    name="format"
                    value="Vlogs"
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2">Vlogs</span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <Field
                    type="radio"
                    name="format"
                    value="Shorts"
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2">Shorts</span>
                </label>
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="format"
                    value="Posts"
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2">Posts</span>
                </label>
              </div>
              <ErrorMessage
                name="format"
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

      <Popup
        message="Post requirement created successfully!"
        show={showPopup}
      />
    </div>
  );
};

export default BrandCreatePost;
