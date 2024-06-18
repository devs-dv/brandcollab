import React, { useState, useEffect } from "react";
import SideNav from "./navigation/SideNav";
import axios from "axios";
import moment from "moment";
import { Country } from "country-state-city";

const JobListing = () => {
  const [profiles, setProfiles] = useState([]);
  const [country, setCountry] = useState("");
  const [minFollowers, setMinFollowers] = useState(0);
  const countryData = Country.getAllCountries();
  const [filled, setFilled] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const socialData = JSON.parse(localStorage.getItem("socialsData"));

  useEffect(() => {
    if (socialData?.instagramFollowers === 0) {
      setFilled(false);
    }
  }, [socialData]);

  useEffect(() => {
    fetchProfiles();
  }, [country, minFollowers]);

  const fetchProfiles = () => {
    const params = { country, minFollowers };
    console.log(params);
    axios
      .get("http://localhost:8000/api/v1/profile/get", { params })
      .then((response) => {
        console.log("Data received:", response.data);
        setProfiles(response.data.brandProfiles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleApply = (profileId) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    axios
      .post(
        `http://localhost:8000/api/v1/appliedJob/create?brandId=${profileId}`,
        {},
        config
      )
      .then((response) => {
        console.log("Application submitted:", response.data);
        setProfiles((prevProfiles) =>
          prevProfiles.map((profile) =>
            profile._id === profileId ? { ...profile, applied: true } : profile
          )
        );
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch((error) => {
        console.error("Error submitting application:", error);
      });
  };

  return (
    <div>
      <SideNav />
      <main className="content ml-12 transition-all ease-in-out duration-500">
        <div className="h-16" />
        <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 p-4">
          {filled ? (
            <p className="text-center text-green-500 p-2">Good to go</p>
          ) : (
            <p className="text-center text-red-500 p-2">
              NOTE: Fill up Your Social media data before applying
            </p>
          )}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
              <select
                onChange={(e) => setCountry(e.target.value)}
                className="p-2 border border-zinc-300 rounded-md w-full sm:w-auto"
              >
                <option value="">Select Country</option>
                {countryData.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>

              <select
                className="p-2 border border-zinc-300 rounded-md w-full sm:w-auto"
                onChange={(e) => setMinFollowers(parseInt(e.target.value, 10))}
              >
                <option value="">Sort by Followers</option>
                <option value="10000">Minimum 10K</option>
                <option value="100000">Minimum 100K</option>
                <option value="500000">Minimum 500K</option>
                <option value="1000000">Minimum 1M</option>
                <option value="10000000">Minimum 10M</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <span className="text-zinc-700 dark:text-zinc-300 text-center md:text-left">
              BrandCollab found {profiles.length} campaigns
            </span>
          </div>
          <div className="flex flex-wrap justify-center p-4">
            {profiles.map((profile) => (
              <ProfileCard
                key={profile._id}
                profile={profile}
                handleApply={handleApply}
              />
            ))}
          </div>
        </div>
        {showPopup && (
          <div className="fixed top-4 right-4 bg-green-500 text-white p-2 rounded">
            Application submitted successfully!
          </div>
        )}
      </main>
    </div>
  );
};

const ProfileCard = ({ profile, handleApply }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className={`max-w-sm w-full sm:w-1/2 lg:w-1/3 p-4 ${
        profile.applied ? "opacity-50" : ""
      }`}
    >
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src="https://placehold.co/600x400"
            alt="Campaign"
          />
          <div className="absolute top-2 left-2 bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">
            {moment(profile.createdAt).fromNow()}
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-center -mt-12">
            <img
              className="w-24 h-24 rounded-full border-4 border-white dark:border-zinc-800"
              src="https://placehold.co/100x100"
              alt="Company Logo"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
              {profile.brandName}
            </h2>
          </div>
          <div className="mt-4 flex justify-around">
            <div className="text-center">
              <span className="text-zinc-600 dark:text-zinc-400">Formats</span>
              <div className="mt-1 bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                {profile.format}
              </div>
            </div>
            <div className="text-center">
              <span className="text-zinc-600 dark:text-zinc-400">
                Industries
              </span>
              <div className="mt-1 bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                {profile.industry}
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-around">
            <div className="text-center">
              <span className="text-lg font-semibold text-zinc-800 dark:text-white">
                {profile.followersRequired}+
              </span>
              <span className="text-zinc-600 dark:text-zinc-400">
                Followers
              </span>
            </div>
            <div className="text-center">
              <span className="text-lg font-semibold text-zinc-800 dark:text-white">
                {profile.duration}
              </span>
              <span className="text-zinc-600 dark:text-zinc-400">Duration</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-zinc-600 dark:text-zinc-400">
              Content Type
            </span>
            <div className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">
              {profile.format}
            </div>
          </div>
          <div className="mt-4 text-center">
            {showDescription && (
              <p className="text-zinc-600 dark:text-zinc-400">
                {profile.description}
              </p>
            )}
            <button
              className="text-blue-500"
              onClick={() => setShowDescription(!showDescription)}
            >
              {showDescription ? "Read Less" : "Read More"}
            </button>
          </div>
          <div className="mt-4 text-center">
            <button
              className={`bg-green-200 text-green-800 px-4 py-2 rounded ${
                profile.applied ? "cursor-not-allowed" : ""
              }`}
              onClick={() => !profile.applied && handleApply(profile.user)}
              disabled={profile.applied}
            >
              {profile.applied ? "Applied" : "Apply Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
