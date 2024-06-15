import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Text from "../../customComponents/Text";
import axios from "axios";
import { Country, State, City } from "country-state-city";

const BranDashAbout = () => {
  const initialValues = {
    brandName: "ABC Brand",
    firstName: "",
    lastName: "",
email:"abc@gmail.com",
    industry: "Fashion",
    country: "",
    state: "",
    city: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    logo: "",
  };

  const validationSchema = Yup.object().shape({
    brandName: Yup.string().required("Brand Name is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    industry: Yup.string().required("Industry is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    description: Yup.string(),
  });

  const countryData = Country.getAllCountries();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

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

  const handleSubmit = (values, { setSubmitting }) => {
    const token = localStorage.getItem("token");
console.log(values);
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(values, config);
    axios
      .put("http://localhost:8000/api/v1/influencer/update", formData, config)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error sending the data!", error);
      });

    setSubmitting(false);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="w-full p-6 lg:p-10">
      <div className="bg-white rounded-lg shadow-lg p-6 lg:p-10 lg:grid lg:grid-cols-4">
        <div className="">
          <Text size="large">About</Text>
          <Text size="small" className="mb-6">
            Tell us about your brand so that influencers can know about you.
          </Text>
        </div>

        <div className="lg:col-start-2 lg:col-end-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:col-span-1 flex flex-col items-center justify-center">
                  <label
                    htmlFor="logo"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Logo
                  </label>
                  <div className="relative w-48 h-48 mb-4 overflow-hidden border">
                    <img
                      src={values.logo || "/placeholder.jpg"}
                      alt="Logo"
                      className="w-full h-full object-cover"
                    />
                    <label
                      htmlFor="logo"
                      className="absolute bottom-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-md cursor-pointer"
                    >
                      Change
                    </label>
                    <input
                      type="file"
                      id="logo"
                      name="logo"
                      accept="image/*"
                      className="sr-only"
                      onChange={(event) => {
                        const file = event.target.files[0];
                        setFieldValue("logo", file);
                        setFieldValue("logoPreview", URL.createObjectURL(file));
                      }}
                    />
                    {values.logo && (
                      <button
                        type="button"
                        onClick={() => setFieldValue("logo", "")}
                        className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
                <div className="lg:col-span-1 flex flex-col">
                  <div className="mb-4">
                    <label
                      htmlFor="brandName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Brand Name
                    </label>
                    <Field
                      type="text"
                      id="brandName"
                      name="brandName"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="brandName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mb-4">
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
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mb-4">
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
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      disabled
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="industry"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Industry
                    </label>
                    <Field
                      type="text"
                      id="industry"
                      name="industry"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="industry"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="mb-4">
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
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                  <div className="mb-4">
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
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) =>
                        handleStateChange(e, values, setFieldValue)
                      }
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
                  <div className="mb-4">
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
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                  <div className="mb-4 lg:col-span-2">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <Field
                      as="textarea"
                      id="description"
                      name="description"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      rows="3"
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="lg:col-span-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          {showPopup && (
            <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-lg">
              Profile updated successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BranDashAbout;
