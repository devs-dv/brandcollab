import React from 'react'
import BrandSideNav from "../components/navigation/BrandSideNav";

const BrandCollabOngoing = () => {
  return (
    <div>
      <BrandSideNav />
      <main className="content ml-12 transition-all ease-in-out duration-500 ">
        <div className="h-16" />
        {/* Your main content starts here */}
         <div>
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
              {/* Component */}
              <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
                {/* Heading Content */}
                <div className="max-w-[720px]">
                  <h1 className="mb-3 pb-4 text-4xl font-bold text-green-700 md:text-6xl">
                    On Going Collab !
                  </h1>
                  <p className="mb-6 max-w-[528px] text-xl md:mb-10">
                    {/* description of the brand  */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus
                    
                  </p>
                  <div className="flex items-center">
                    <a
                    // here we have to give link of the direct chat 
                      href="#"
                      className="] mr-5 inline-block rounded-full bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8"
                    >
                      Let's Talk
                    </a>
                    <a
                      href="#"
                      className="flex max-w-full flex-row rounded-full border border-solid border-[#636262] px-6 py-4 font-bold"
                    >
                      <p className="">View Contract</p>
                      {/* dummy contract report  */}
                    </a>
                  </div>
                </div>
                <div>
                  <>
                    {/* Card start */}
                    <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                      <div className="border-b px-4 pb-6">
                        <div className="text-center my-4">
                          <img
                            className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                            src="https://randomuser.me/api/portraits/women/21.jpg"
                            alt=""
                          />
                          <div className="py-2">
                            <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                              Influencer Name 
                            </h3>
                            <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                              <svg
                                className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                              >
                                <path
                                  className=""
                                  d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                />
                              </svg>
                              Location , NY
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 px-2">
                          <button className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                            Followers 
                          </button>
                          <button className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                           following 
                          </button>
                        </div>
                      </div>
                      <div className="px-4 py-4">
                        <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                          <svg
                            className="h-6 w-6 text-gray-600 dark:text-gray-400"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                          >
                            <path
                              className=""
                              d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                            />
                          </svg>
                          <span>
                            <strong className="text-black dark:text-white">
                            On boarded
                            </strong>{" "}
                            influencers for this project 
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Card end */}
                  </>
                </div>
              </div>
            </div>
            </div>

        {/* Your main content ends here */}
      </main>
    </div>
  );
}

export default BrandCollabOngoing