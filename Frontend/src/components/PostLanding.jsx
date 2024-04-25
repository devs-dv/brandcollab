import React, { useState } from "react";

const PostLanding = () => {
  return (
    <>
      <>
        <header className="bg-white shadow py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <a href="#" className="text-indigo-600 font-bold text-xl">
              Community
            </a>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-md px-4 py-2 mr-2"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
                Go Premium
              </button>
              <div className="ml-4 flex items-center">
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 mr-4"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 mr-4"
                >
                  Settings
                </a>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  Sign out
                </a>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md ml-4">
                New Post
              </button>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 flex">
          <aside className="w-1/5 sticky top-0 h-screen overflow-auto mr-4">
            <nav className="bg-white shadow-md rounded-md p-4">
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                Home
              </a>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                Popular
              </a>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                Communities
              </a>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                Trending
              </a>
            </nav>
            <div className="mt-4">
              <h3 className="text-gray-600 font-semibold mb-2">Communities</h3>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                Movies
              </a>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                Food
              </a>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                Sports
              </a>
            </div>
          </aside>
          <div className="w-3/5 overflow-auto">
            <div className="bg-white shadow-md rounded-md p-4 mb-4">
              <div className="flex items-center mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <h4 className="text-lg font-semibold">Dries Vincent</h4>
                  <p className="text-gray-500 text-sm">
                    December 9 at 11:43 AM
                  </p>
                </div>
              </div>
              <p className="mb-2">You should use alpinejs framework</p>
              <p className="mb-4">
                Arradawark touches Spark was an incredible idea an but poor
                protocols and a disregard for human safety been one of the best
                businesses of our generation.
              </p>
              <p>
                Ultimately, I think that if you wanted to run the park
                successfully and keep visitors safe, the most important thing to
                prioritize would be...
              </p>
              <div className="flex items-center mt-4">
                <button className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                    <path d="M14.5 7.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-5 0C8.672 7.5 8 8.172 8 9s.672 1.5 1.5 1.5S11 9.828 11 9s-.672-1.5-1.5-1.5zm3.5 8c-2.763 0-5 2.237-5 5h2c0-1.654 1.346-3 3-3s3 1.346 3 3h2c0-2.763-2.237-5-5-5z" />
                  </svg>
                </button>
                <button className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                    <path d="M16 11H8c-.552 0-1 .448-1 1s.448 1 1 1h8c.552 0 1-.448 1-1s-.448-1-1-1z" />
                  </svg>
                </button>
                <button className="bg-gray-200 text-gray-700 rounded-full px-3 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                    <path d="M16 11h-3v3c0 .552-.448 1-1 1s-1-.448-1-1v-3H8c-.552 0-1-.448-1-1s.448-1 1-1 h3v3c0 .552.448 1 1 1s1-.448 1-1v-3h3c.552 0 1-.448 1-1s-.448-1-1-1zm0 0" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Add more posts here */}
          </div>
          <aside className="w-1/5 sticky top-0 h-screen overflow-auto ml-4">
            <div className="bg-white shadow-md rounded-md p-4">
              <h3 className="text-gray-600 font-semibold mb-2">
                Who to Follow
              </h3>
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <h4 className="text-lg font-semibold">Leonard Krasner</h4>
                  <p className="text-gray-500 text-sm">@leonardkrasner</p>
                </div>
                <button className="bg-indigo-600 text-white px-3 py-1 rounded-md ml-auto">
                  Follow
                </button>
              </div>
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <h4 className="text-lg font-semibold">Floyd Miles</h4>
                  <p className="text-gray-500 text-sm">@floydmiles</p>
                </div>
                <button className="bg-indigo-600 text-white px-3 py-1 rounded-md ml-auto">
                  Follow
                </button>
              </div>
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <h4 className="text-lg font-semibold">Emily Selman</h4>
                  <p className="text-gray-500 text-sm">@emilyselman</p>
                </div>
                <button className="bg-indigo-600 text-white px-3 py-1 rounded-md ml-auto">
                  Follow
                </button>
              </div>
              <a
                href="#"
                className="block text-center text-indigo-600 hover:underline"
              >
                View all
              </a>
            </div>
            <div className="bg-white shadow-md rounded-md p-4 mt-4">
              <h3 className="text-gray-600 font-semibold mb-2">Trending</h3>
              {/* Add trending content here */}
            </div>
          </aside>
        </main>
      </>
    </>
  );
};

export default PostLanding;
