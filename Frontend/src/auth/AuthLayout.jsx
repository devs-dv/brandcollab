import React, { createContext, useContext, useState } from "react";
import Text from "../customComponents/Text";
import Button from "../customComponents/Button";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
import { valContext } from "../context/context";

const AuthLayout = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const {data,setData} = useContext(valContext)

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      setData(selectedOption)
      navigate(`/signup`);
    } else {
      console.log("Please select an option");
    }
  };

  return (
    <div className="text-center">
      <Text size="large">Choose Your Preference</Text>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex lg:justify-evenly max-lg:flex-col">
          <label className="relative mr-4">
            <Text>As an Influencer</Text>
            <input
              type="radio"
              name="option"
              value="Influencer"
              checked={selectedOption === "Influencer"}
              onChange={handleOptionChange}
              className="absolute top-0 left-0 mt-9 ml-2 w-4 h-4"
            />
            <img
              src="/assets/brand.jpg"
              alt="Influencer"
              className="h-auto w-[20vw] rounded-xl"
            />
          </label>
          <label className="relative">
            <Text>As a Brand Promoter</Text>
            <input
              type="radio"
              name="option"
              value="Promoter"
              checked={selectedOption === "Promoter"}
              onChange={handleOptionChange}
              className="absolute top-0 left-0 mt-9 ml-2 w-4 h-4"
            />
            <img
              src="/assets/influencer.jpg"
              alt="Promoter"
              className="h-auto w-[20vw] rounded-xl"
            />
          </label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
  
};



export { AuthLayout };
