import React, { useState } from "react";

const PostLanding = () => {

  return (
    <div>
      {/* main dash board */}
      <div className="bg-orange-100 min-h-screen">
        <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
          <div className="flex items-center justify-between py-2 text-5x1">
            <div className="font-bold text-blue-900 text-xl">
              Admin<span className="text-orange-600">Panel</span>
            </div>
            <div className="flex items-center text-gray-500">
              <span
                className="material-icons-outlined p-2"
                style={{ fontSize: 30 }}
              >
                search
              </span>
              <span
                className="material-icons-outlined p-2"
                style={{ fontSize: 30 }}
              >
                notifications
              </span>
              <div
                className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2"
                style={{
                  backgroundImage:
                    "url(https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row pt-24 px-10 pb-4">
          <div className="w-2/12 mr-6">
            <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  dashboard
                </span>
                Home
                
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  tune
                </span>
                Some menu item
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  file_copy
                </span>
                Another menu item
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  face
                </span>
                Profile
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  settings
                </span>
                Settings
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  power_settings_new
                </span>
                Log out
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
            </div>
          </div>
          <div className="w-10/12">
            <div className="flex flex-row">
              <div
                className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6"
                style={{
                  backgroundImage:
                    "url(https://previews.dropbox.com/p/thumb/AAvyFru8elv-S19NMGkQcztLLpDd6Y6VVVMqKhwISfNEpqV59iR5sJaPD4VTrz8ExV7WU9ryYPIUW8Gk2JmEm03OLBE2zAeQ3i7sjFx80O-7skVlsmlm0qRT0n7z9t07jU_E9KafA9l4rz68MsaZPazbDKBdcvEEEQPPc3TmZDsIhes1U-Z0YsH0uc2RSqEb0b83A1GNRo86e-8TbEoNqyX0gxBG-14Tawn0sZWLo5Iv96X-x10kVauME-Mc9HGS5G4h_26P2oHhiZ3SEgj6jW0KlEnsh2H_yTego0grbhdcN1Yjd_rLpyHUt5XhXHJwoqyJ_ylwvZD9-dRLgi_fM_7j/p.png?fv_content=true&size_mode=5)",
                  backgroundPosition: "90% center",
                }}
              >
                <p className="text-5xl text-indigo-900">
                  Welcome <br />
                  <strong>Lorem Ipsum</strong>
                </p>
                <span className="bg-red-300 text-xl text-white inline-block rounded-full mt-12 px-8 py-2">
                  <strong>01:51</strong>
                </span>
              </div>
              <div
                className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-5/12 ml-2 p-6"
                style={{
                  backgroundImage:
                    "url(https://previews.dropbox.com/p/thumb/AAuwpqWfUgs9aC5lRoM_f-yi7OPV4txbpW1makBEj5l21sDbEGYsrC9sb6bwUFXTSsekeka5xb7_IHCdyM4p9XCUaoUjpaTSlKK99S_k4L5PIspjqKkiWoaUYiAeQIdnaUvZJlgAGVUEJoy-1PA9i6Jj0GHQTrF_h9MVEnCyPQ-kg4_p7kZ8Yk0TMTL7XDx4jGJFkz75geOdOklKT3GqY9U9JtxxvRRyo1Un8hOObbWQBS1eYE-MowAI5rNqHCE_e-44yXKY6AKJocLPXz_U4xp87K4mVGehFKC6dgk_i5Ur7gspuD7gRBDvd0sanJ9Ybr_6s2hZhrpad-2WFwWqSNkh/p.png?fv_content=true&size_mode=5)",
                  backgroundPosition: "100% 40%",
                }}
              >
                <p className="text-5xl text-indigo-900">
                  Inbox <br />
                  <strong>23</strong>
                </p>
                <a
                  href=""
                  className="bg-orange-300 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"
                >
                  <strong>See messages</strong>
                </a>
              </div>
            </div>
            <div className="flex flex-row h-64 mt-6">
              <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
                a
              </div>
              <div className="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12">
                b
              </div>
              <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
                c
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main dash board */}

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
