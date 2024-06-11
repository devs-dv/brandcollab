import React from "react";
import BrandSideNav from "../components/navigation/BrandSideNav";
const BrandCollabComplete = () => {
  return (
    <div>
      <div>
        <BrandSideNav />
        <main className="content ml-12 transition-all ease-in-out duration-500 ">
          <div className="h-16" />
          {/* Your main content starts here */}
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <div className="p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl text-center font-bold my-4">
              🌟 Promoter Collaborations 🌟
            </h1>
            <p className="text-lg md:text-xl text-center my-4">
              Welcome to Our Collab Stars!
            </p>
            <div className="my-4">
              <div className="bg-gradient-to-r from-pink-500 to-pink-300 text-white font-bold p-2 rounded-lg mb-4">
                Influencer Name 1
              </div>
              <p>Project: [Campaign Name]</p>
              <p>Feedback: 🌟🌟🌟🌟🌟</p>
              <p>
                "Had an amazing experience working with the team! Looking
                forward to more collaborations."
              </p>
            </div>
            <div className="my-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold p-2 rounded-lg mb-4">
                Influencer Name 2
              </div>
              <p>Project: [Campaign Name]</p>
              <p>Feedback: 🌟🌟🌟🌟</p>
              <p>
                "Great collaboration! Everything was seamless and
                well-organized."
              </p>
            </div>
            <div className="my-4">
              <div className="bg-gradient-to-r from-blue-300 to-blue-700 text-white font-bold p-2 rounded-lg mb-4">
                Influencer Name 3
              </div>
              <p>Project: [Campaign Name]</p>
              <p>Feedback: 🌟🌟🌟🌟🌟</p>
              <p>
                "Loved the creative freedom and support from the team. Highly
                recommend!"
              </p>
            </div>
            <p className="text-lg md:text-xl text-center my-4">
              We Value Your Feedback!
            </p>
            <p className="text-center my-4">
              We strive to create the best experience for our influencers.
              Please share your thoughts on your recent collaboration with us.
              Your feedback helps us improve and grow together! 🌟
            </p>
            <form className="my-4">
              <label htmlFor="name" className="font-bold">
                Name:
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                className="border border-zinc-300 rounded-lg p-2 my-2"
              />
              <br />
              <br />
              <label htmlFor="feedback" className="font-bold">
                Your Feedback:
              </label>
              <br />
              <textarea
                id="feedback"
                name="feedback"
                rows={4}
                cols={50}
                className="border border-zinc-300 rounded-lg p-2 my-2"
                defaultValue={""}
              />
              <br />
              <br />
              <input
                type="submit"
                defaultValue="Submit"
                className="bg-gradient-to-r from-pink-500 to-pink-300 text-white font-bold p-2 rounded-lg"
              />
            </form>
            <p className="text-center my-4">
              Thank you for helping us create amazing collaborations! 🌟
            </p>
          </div>
          {/* Your main content ends here */}
        </main>
      </div>
    </div>
  );
};

export default BrandCollabComplete;
