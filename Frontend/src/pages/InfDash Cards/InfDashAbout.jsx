import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Text from "../../customComponents/Text";
import axios from "axios";
import { Country, State, City } from "country-state-city";

const InfDashAbout = () => {
  const initialValues = {
    firstName: "John",
    lastName: "Doe",
    country: "",
    state: "",
    city: "",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gmail: "sarangisatya2002@gmail.com",
    profilePicture: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    bio: Yup.string(),
  });

  const countryData = Country.getAllCountries();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (initialValues.country) {
      const selectedCountry = Country.getCountryByCode(initialValues.country);
      setStates(State.getStatesOfCountry(selectedCountry?.isoCode));
    }
  }, [initialValues.country]);

  useEffect(() => {
    if (initialValues.state) {
      const selectedState = State.getStateByCodeAndCountry(
        initialValues.state,
        initialValues.country
      );
      setCities(
        City.getCitiesOfState(initialValues.country, selectedState?.isoCode)
      );
    }
  }, [initialValues.state, initialValues.country]);

  const handleSubmit = (values, { setSubmitting }) => {
    
    console.log(values);
    axios
      .post("http://localhost:8000/api/v1/influencer/profile", values)

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
            Tell us about yourself so that brands can know who you are.
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
                    htmlFor="profilePicture"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Profile Picture
                  </label>
                  <div className="relative w-48 h-48 mb-4 overflow-hidden border">
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

                <div className="lg:col-span-1 flex flex-col">
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
                      onChange={(e) => {
                        const selectedCountry = e.target.value;
                        setFieldValue("country", selectedCountry);
                        setFieldValue("state", ""); // Reset state
                        setFieldValue("city", ""); // Reset city
                        setStates(State.getStatesOfCountry(selectedCountry));
                      }}
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
                      onChange={(e) => {
                        const selectedState = e.target.value;
                        setFieldValue("state", selectedState);
                        setFieldValue("city", ""); // Reset city
                        setCities(
                          City.getCitiesOfState(values.country, selectedState)
                        );
                      }}
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

                  <div className="mb-4">
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
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>

                  <div className="mb-4">
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
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="bio"
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
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {showPopup && (
        <div className="fixed bottom-0 right-0 m-4 bg-white p-4 rounded-md shadow-md">
          Changes are being saved...
        </div>
      )}
    </div>
  );
};

export default InfDashAbout;
