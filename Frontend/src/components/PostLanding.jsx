import React, { useState } from "react";

const PostLanding = () => {

  return (
    <div>
      <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 bg-white dark:bg-zinc-800 p-4">
            <div className="flex items-center justify-center mb-6">
              <img
                src="https://placehold.co/40x40"
                alt="Logo"
                className="mr-2"
              />
              <span className="text-xl font-bold">BrandCollab</span>
            </div>
            <nav className="space-y-2">
              <a
                href="#"
                className="flex items-center p-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded"
              >
                <img
                  src="https://placehold.co/20x20"
                  alt="Home"
                  className="mr-2"
                />
                Home
              </a>
              <a
                href="#"
                className="flex items-center p-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded"
              >
                <img
                  src="https://placehold.co/20x20"
                  alt="Popular"
                  className="mr-2"
                />
                Popular
              </a>
              <a
                href="#"
                className="flex items-center p-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded"
              >
                <img
                  src="https://placehold.co/20x20"
                  alt="Communities"
                  className="mr-2"
                />
                Communities
              </a>
              <a
                href="#"
                className="flex items-center p-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded"
              >
                <img
                  src="https://placehold.co/20x20"
                  alt="Trending"
                  className="mr-2"
                />
                Trending
              </a>
            </nav>
          </div>
          <div className="w-full md:w-3/4 p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="p-2 border border-zinc-300 dark:border-zinc-700 rounded"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  New Post
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-zinc-200 dark:bg-zinc-700 p-2 rounded-full">
                  <img src="https://placehold.co/20x20" alt="Notifications" />
                </button>
                <div className="relative">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Profile"
                    className="rounded-full cursor-pointer"
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 rounded shadow-lg hidden">
                    <a
                      href="#"
                      className="block px-4 py-2 text-zinc-700 dark:text-zinc-300"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-zinc-700 dark:text-zinc-300"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-zinc-700 dark:text-zinc-300"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded shadow p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/40x40"
                    alt="User"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Dries Vincent</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      December 9 at 11:43 AM
                    </p>
                  </div>
                </div>
                <button className="text-zinc-600 dark:text-zinc-400">
                  <img src="https://placehold.co/20x20" alt="More options" />
                </button>
              </div>
              <div className="mt-4">
                <p className="font-bold">You should use alpinejs framework</p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Arradawark touches Spark was an incredible idea and...
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Like"
                      className="mr-2"
                    />
                    29
                  </button>
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Comment"
                      className="mr-2"
                    />
                    11
                  </button>
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Share"
                      className="mr-2"
                    />
                    2.7k
                  </button>
                </div>
                <button className="text-zinc-600 dark:text-zinc-400">
                  <img src="https://placehold.co/20x20" alt="Share" />
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded shadow p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/40x40"
                    alt="User"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Dries Vincent</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      December 9 at 11:43 AM
                    </p>
                  </div>
                </div>
                <button className="text-zinc-600 dark:text-zinc-400">
                  <img src="https://placehold.co/20x20" alt="More options" />
                </button>
              </div>
              <div className="mt-4">
                <p className="font-bold">You should use alpinejs framework</p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Arradawark touches Spark was an incredible idea and...
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Like"
                      className="mr-2"
                    />
                    29
                  </button>
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Comment"
                      className="mr-2"
                    />
                    11
                  </button>
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Share"
                      className="mr-2"
                    />
                    2.7k
                  </button>
                </div>
                <button className="text-zinc-600 dark:text-zinc-400">
                  <img src="https://placehold.co/20x20" alt="Share" />
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded shadow p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/40x40"
                    alt="User"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Dries Vincent</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      December 9 at 11:43 AM
                    </p>
                  </div>
                </div>
                <button className="text-zinc-600 dark:text-zinc-400">
                  <img src="https://placehold.co/20x20" alt="More options" />
                </button>
              </div>
              <div className="mt-4">
                <p className="font-bold">You should use alpinejs framework</p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Arradawark touches Spark was an incredible idea and...
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Like"
                      className="mr-2"
                    />
                    29
                  </button>
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Comment"
                      className="mr-2"
                    />
                    11
                  </button>
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Share"
                      className="mr-2"
                    />
                    2.7k
                  </button>
                </div>
                <button className="text-zinc-600 dark:text-zinc-400">
                  <img src="https://placehold.co/20x20" alt="Share" />
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded shadow p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/40x40"
                    alt="User"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Dries Vincent</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      December 9 at 11:43 AM
                    </p>
                  </div>
                </div>
                <button className="text-zinc-600 dark:text-zinc-400">
                  <img src="https://placehold.co/20x20" alt="More options" />
                </button>
              </div>
              <div className="mt-4">
                <p className="font-bold">You should use alpinejs framework</p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Arradawark touches Spark was an incredible idea and...
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Like"
                      className="mr-2"
                    />
                    29
                  </button>
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Comment"
                      className="mr-2"
                    />
                    11
                  </button>
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Share"
                      className="mr-2"
                    />
                    2.7k
                  </button>
                </div>
                <button className="text-zinc-600 dark:text-zinc-400">
                  <img src="https://placehold.co/20x20" alt="Share" />
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded shadow p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/40x40"
                    alt="User"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Dries Vincent</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      December 9 at 11:43 AM
                    </p>
                  </div>
                </div>
                <button className="text-zinc-600 dark:text-zinc-400">
                  <img src="https://placehold.co/20x20" alt="More options" />
                </button>
              </div>
              <div className="mt-4">
                <p className="font-bold">You should use alpinejs framework</p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Arradawark touches Spark was an incredible idea and...
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Like"
                      className="mr-2"
                    />
                    29
                  </button>
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Comment"
                      className="mr-2"
                    />
                    11
                  </button>
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Share"
                      className="mr-2"
                    />
                    2.7k
                  </button>
                </div>
                <button className="text-zinc-600 dark:text-zinc-400">
                  <img src="https://placehold.co/20x20" alt="Share" />
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded shadow p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/40x40"
                    alt="User"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Dries Vincent</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      December 9 at 11:43 AM
                    </p>
                  </div>
                </div>
                <button className="text-zinc-600 dark:text-zinc-400">
                  <img src="https://placehold.co/20x20" alt="More options" />
                </button>
              </div>
              <div className="mt-4">
                <p className="font-bold">You should use alpinejs framework</p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Arradawark touches Spark was an incredible idea and...
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Like"
                      className="mr-2"
                    />
                    29
                  </button>
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Comment"
                      className="mr-2"
                    />
                    11
                  </button>
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Share"
                      className="mr-2"
                    />
                    2.7k
                  </button>
                </div>
                <button className="text-zinc-600 dark:text-zinc-400">
                  <img src="https://placehold.co/20x20" alt="Share" />
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded shadow p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/40x40"
                    alt="User"
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Lindsay Walton</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      December 8 at 10:45 PM
                    </p>
                  </div>
                </div>
                <button className="text-zinc-600 dark:text-zinc-400">
                  <img src="https://placehold.co/20x20" alt="More options" />
                </button>
              </div>
              <div className="mt-4">
                <p className="font-bold">
                  What's it like to be a golden retriever?
                </p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Man I am glad you asked this question...
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Like"
                      className="mr-2"
                    />
                    29
                  </button>
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Comment"
                      className="mr-2"
                    />
                    11
                  </button>
                  <button className="flex items-center text-zinc-600 dark:text-zinc-400">
                    <img
                      src="https://placehold.co/20x20"
                      alt="Share"
                      className="mr-2"
                    />
                    2.7k
                  </button>
                </div>
                <button className="text-zinc-600 dark:text-zinc-400">
                  <img src="https://placehold.co/20x20" alt="Share" />
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PostLanding;
