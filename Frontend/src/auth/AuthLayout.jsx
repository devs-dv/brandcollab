import React, { createContext, useState, useContext } from "react";
import Text from "../customComponents/Text";
import Button from "../customComponents/Button";

const AuthLayout = () => {
  const context = createContext()
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      console.log("Selected option:", selectedOption);
    } else {
      console.log("Please select an option");
    }
    <context.Provider value={selectedOption}>
    </context.Provider>
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
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
              className="absolute top-0 left-0 mt-9 ml-2 w-4 h-4"
            />
            <img
              src="/assets/brand.jpg"
              alt="Option 1"
              className="h-auto w-[20vw] rounded-xl"
            />
          </label>
          <label className="relative">
            <Text>As a Brand Promoter</Text>
            <input
              type="radio"
              name="option"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
              className="absolute top-0 left-0 mt-9 ml-2 w-4 h-4"
            />
            <img
              src="/assets/influencer.jpg"
              alt="Option 2"
              className="h-auto w-[20vw] rounded-xl"
            />
          </label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AuthLayout;
