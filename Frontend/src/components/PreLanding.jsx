import React, { useEffect, useState } from "react";
// import { useTransition, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import Button from "../customComponents/Button";
import price from "./assets/pricing.png";
import '../App.css'

const PreLanding = () => {
 const words = [
   "Brands!",
   "Influencers!",
   "Connect in 1 touch!.",
 ];
 const [index, setIndex] = useState(0);
 const [charIndex, setCharIndex] = useState(0);
 const [currentWord, setCurrentWord] = useState(words[0]);
 const [isDeleting, setIsDeleting] = useState(false);

 useEffect(() => {
   const typingTimeout = setTimeout(
     () => {
       if (!isDeleting && charIndex < currentWord.length) {
         setCharIndex(charIndex + 1);
       } else if (isDeleting && charIndex > 0) {
         setCharIndex(charIndex - 1);
       } else {
         setIsDeleting(!isDeleting);
       }
     },
     isDeleting ? 100 : 50
   ); // Faster typing speed, slower deleting speed

   // Clear timeout on unmount or when transitioning to the next word
   return () => clearTimeout(typingTimeout);
 }, [charIndex, currentWord, isDeleting]);

 // Logic to handle transition to the next word
 useEffect(() => {
   if (charIndex === currentWord.length && !isDeleting) {
     const nextWordTimeout = setTimeout(() => {
       setIsDeleting(true);
     }, 1000); // Delay before transitioning to the next word

     // Clear timeout on unmount or when transitioning to the next word
     return () => clearTimeout(nextWordTimeout);
   } else if (charIndex === 0 && isDeleting) {
     const nextWordIndex = (index + 1) % words.length;
     setCurrentWord(words[nextWordIndex]);
     setIndex(nextWordIndex);
     setIsDeleting(false);
   }
 }, [charIndex, currentWord, index, isDeleting, words]);



  return (
    <div>
      {/* <div>
        <div className="bg-black text-white h-screen">
          <nav className="flex justify-between items-center py-4 px-8">
            <span className="text-xl font-bold">BrandCollab</span>
            <div className="flex space-x-4">
              <Link className="hover:text-gray-300" href="#">
                About Us
              </Link>
              <Link className="hover:text-gray-300" href="#">
                Pricing
              </Link>
              <Link className="hover:text-gray-300" href="#">
                Contact Us
              </Link>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Start now
              </Button>
            </div>
          </nav>
          <header className="flex flex-col items-center justify-center text-center space-y-6 py-24 px-8">
            <h1 className="text-6xl font-bold leading-tight">
              Connect with Influencers
              <br />
              in 28 days
            </h1>
            <p className="text-xl">
              A platform dedicated to bridging the gap between brands and
              influencers.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Get Started Now
            </Button>
          </header>
          <div className="absolute bottom-0 right-0 p-8">
            <Button className="bg-white text-black hover:bg-gray-100">
              Book my Call
            </Button>
          </div>
        </div>
      </div> */}

      {/* new Landing with animation and creation  */}

      <div className="bg-gradient-to-br from-gray-900 to-black">
        <div className="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
          <div className="flex justify-between">
            <h1 className="font-serif text-3xl font-medium">BrandCollab</h1>
            <a
              href="#"
              className="self-start px-3 py-2 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black"
            >
              Get Started!
            </a>
          </div>
          <div className="h-32 md:h-40" />
          <>
            <span className="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
              Early Access
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="sm:text-6xl">
                Empower Your Presence: Connect with
              </span>
              <br />
              {/* <br /> */}
              <div>
                <h1
                  id="typewriter"
                  className="w-full h-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600"
                >
                  {currentWord.substring(0, charIndex)}
                </h1>
              </div>
              {/* <br /> */}
              for Enhanced Visibility & Impact.
            </h1>
            <p className="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              A platform dedicated to bridging the gap between brands and
              influencers.
            </p>
          </>

          <div className="h-32 md:h-40" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
                Simple and easy
              </p>
              <h2 className="text-4xl font-bold">
                Made for Brands & Influencers
              </h2>
              <div className="h-6" />
              <p className="font-serif text-xl text-gray-400 md:pr-10">
                Welcome to CollabHub, your premier destination for seamless
                brand-influencer collaborations. Discover a dynamic platform
                where brands and influencers converge, unlocking endless
                possibilities for partnership and growth. Join us in
                revolutionizing the way brands connect with influencers, shaping
                the future of digital influence together.
              </p>
              <div className="h-8" />
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
                <div>
                  <p className="font-semibold text-gray-400">Made with love</p>
                  <div className="h-4" />
                  <p className="font-serif text-gray-400">
                    "CollabHub: Where genuine connections are made with love,
                    shaping impactful brand-influencer collaborations."{" "}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-400">
                    It's easy to Use
                  </p>
                  <div className="h-4" />
                  <p className="font-serif text-gray-400">
                    "CollabHub: Making impactful collaborations effortless with
                    its user-friendly interface."
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96" />
            </div>
          </div>
          <div className="h-32 md:h-40" />
          <p className="font-serif text-4xl">
            <span className="text-gray-400">If we work all together</span>
            <span className="text-gray-600">
              &nbsp;Unlocking boundless potential, together we forge a path to
              success, where collaboration knows no bounds!
            </span>
          </p>
          <br />
          <br />
          <br />
          <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
            <h2 className="text-base font-semibold leading-7 text-blue-100 bg-blue-600 px-3 rounded-lg uppercase mb-4 lg:mb-8">
              How it Works !{/* Add Icon Here for here UI */}
            </h2>
          </div>
          <div className="h-32 md:h-40" />
          <h1 className="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-purple-900">
              Step Into Success:
            </span>
          </h1>
          <br />

          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-gray-900 to-black transform hover:scale-105 transition duration-300 ">
              <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">
                1
              </p>
              <div className="h-6" />
              <p className="font-serif text-3xl">
                "Unlock opportunities: Sign up or log in to get started."{" "}
              </p>
            </div>
            <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-gray-900 to-black transform hover:scale-105 transition duration-300">
              <p className="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14">
                2
              </p>
              <div className="h-6" />
              <p className="font-serif text-3xl">
                "Craft your profile: Showcase your unique brand or personality."{" "}
              </p>
            </div>
            <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-gray-900 to-black transform hover:scale-105 transition duration-300">
              <p className="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14">
                3
              </p>
              <div className="h-6" />
              <p className="font-serif text-3xl">
                "Watch your influence soar: Connect and grow with our vibrant
                community."{" "}
              </p>
            </div>
          </div>
          <div className="h-40" />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col justify-center md:col-span-2">
              <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600">
                We are humans
              </p>
              <h2 className="text-4xl font-bold">We could work together</h2>
              <div className="h-6" />
              <p className="font-serif text-xl text-gray-400 md:pr-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                autem, a recusandae vero praesentium qui impedit doloremque
                molestias.
              </p>
              <div className="h-8" />
              <div className="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
                <div>
                  <p className="font-semibold text-gray-400">Made with love</p>
                  <div className="h-4" />
                  <p className="font-serif text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus labor.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-400">
                    It's easy to build
                  </p>
                  <div className="h-4" />
                  <p className="font-serif text-gray-400">
                    Ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                    amet consectetur.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-400">
                    It's easy to build
                  </p>
                  <div className="h-4" />
                  <p className="font-serif text-gray-400">
                    Ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                    amet consectetur.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96" />
            </div>
          </div>

          {/* Pricing Starts Here*/}
          <div className="pt-5 bg-gray-900" id="pricing">
            <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-base font-semibold leading-7 text-indigo-400">
                  Pricing
                </h1>
                <div className="flex flex-col md:flex-row">
                  {/* Left side: Text */}
                  <div className="md:w-1/2">
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                      Whether it's just you, or your entire team - we've got you
                      covered.
                    </p>
                    <p className="mx-auto mt-6 max-w-2xl text-center md:text-left text-lg leading-8 text-gray-300">
                      Choose the product that works best
                    </p>
                  </div>

                  {/* Right side: Image */}
                  <div className="md:w-1/2 flex justify-center items-center">
                    <img
                      src={price}
                      alt="Avtar for Price"
                      className="max-w-xs sm:max-w-md md:max-w-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {/* First Product */}
                <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10 transform hover:scale-105 transition duration-300">
                  <div className="flex items-center justify-between gap-x-4">
                    <h2
                      id="product1"
                      className="text-lg font-semibold leading-8 text-white"
                    >
                      Plan Type 1
                    </h2>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    Plan details for Basic Plan Type 1
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">
                      $ 0 / mon
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-300" />
                  </p>
                  <a
                    href="#"
                    aria-describedby="product1"
                    className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Get Started !
                  </a>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                  >
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      40 connects
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      1 Ai Support
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Fast Connection
                    </li>
                  </ul>
                </div>
                {/* Second Product */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 xl:p-10  transform hover:scale-105 transition duration-300">
                  {/* <div className="w-full p-6 rounded-lg shadow-xl sm:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 sm:p-8"> */}

                  <div className="flex items-baseline justify-between gap-x-4">
                    <h2
                      id="product2"
                      className="text-lg font-semibold leading-8 text-white"
                    >
                      Plan Type 2
                    </h2>
                    <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                      Most popular
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    The most popular choice. Plan details for Plan Type 2
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">
                      $ 20 / mon
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-300" />
                  </p>
                  <a
                    href="/order"
                    aria-describedby="product2"
                    className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Pay Now
                  </a>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                  >
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      120 connections
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      3 different features
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Fast Connection
                    </li>
                  </ul>
                </div>
                {/* Third Product */}
                <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10 transform hover:scale-105 transition duration-300">
                  <div className="flex items-center justify-between gap-x-4">
                    <h2
                      id="product3"
                      className="text-lg font-semibold leading-8 text-white"
                    >
                      Plan Type 3
                    </h2>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    Plan details for Plan Type 3
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">
                      $ 50 / mon
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-300" />
                  </p>
                  <a
                    href="/order"
                    aria-describedby="product3"
                    className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Pay Now
                  </a>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                  >
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      240 connections
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      6 different features
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Fast Connection
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Ends Here*/}

          {/* Benifits Section for the website */}
          {/* Benifits Section Starts here  */}
          <div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
                <h1 className="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight from-yellow-600  to-pink-600 text-center">
                  "Unlock
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-purple-900">
                    Your Advantages"{" "}
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <section className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
                  We are just getting started!
                </h2>
                <p className="mb-4">
                  Discover the exceptional features of our CollabHub Platform,
                  designed to streamline processes and provide comprehensive
                  coverage for your needs.
                </p>
              </div>
              <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                <div className="relative">
                  <div className="absolute -inset-1">
                    <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                  </div>
                  <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div className="p-9">
                      <svg
                        className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 8L20 8"
                          stroke="#111827"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                        <path
                          d="M4 16L14 16"
                          stroke="#111827"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                        <ellipse
                          cx={7}
                          cy={8}
                          rx={3}
                          ry={3}
                          transform="rotate(90 7 8)"
                          stroke="#111827"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                        <ellipse
                          cx={17}
                          cy={16}
                          rx={3}
                          ry={3}
                          transform="rotate(90 17 16)"
                          stroke="#111827"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                      <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                        Realtime Collaboration
                      </h3>
                      <p className="mt-6 text-base text-gray-600">
                        Collaborate in realtime with other Brands in a project.
                        See what othe Influencers are doing and edit even a simple
                        text together
                      </p>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden bg-white shadow-md rounded-xl">
                  <div className="p-9">
                    <svg
                      className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x={13}
                        y={14}
                        width={2}
                        height={2}
                        rx={1}
                        fill="#111827"
                      />
                      <rect
                        x={7}
                        y={11}
                        width={2}
                        height={6}
                        rx={1}
                        fill="#111827"
                      />
                      <rect
                        x={11}
                        y={13}
                        width={2}
                        height={6}
                        rx={1}
                        transform="rotate(90 11 13)"
                        fill="#111827"
                      ></rect>
                      <rect
                        x={16}
                        y={12}
                        width={2}
                        height={2}
                        rx={1}
                        fill="#111827"
                      />
                      <path
                        d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                        stroke="#111827"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                      <path
                        d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                        stroke="#111827"
                        strokeWidth={2}
                      />
                    </svg>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                      History of Edits
                    </h3>
                    <p className="mt-6 text-base text-gray-600">
                      Go back and forth your history of changes and restore your
                      profile to any point in time
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-1">
                    <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                  </div>
                  <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div className="p-9">
                      <svg
                        className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 8L20 8"
                          stroke="#111827"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                        <path
                          d="M4 16L14 16"
                          stroke="#111827"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                        <ellipse
                          cx={7}
                          cy={8}
                          rx={3}
                          ry={3}
                          transform="rotate(90 7 8)"
                          stroke="#111827"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                        <ellipse
                          cx={17}
                          cy={16}
                          rx={3}
                          ry={3}
                          transform="rotate(90 17 16)"
                          stroke="#111827"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                      <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                        Integrations
                      </h3>
                      <p className="mt-6 text-base text-gray-600">
                        Step up your profile and brand with integrations with
                        your favourite tools.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden bg-white shadow-md rounded-xl">
                  <div className="p-9">
                    <svg
                      className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x={13}
                        y={14}
                        width={2}
                        height={2}
                        rx={1}
                        fill="#111827"
                      />
                      <rect
                        x={7}
                        y={11}
                        width={2}
                        height={6}
                        rx={1}
                        fill="#111827"
                      />
                      <rect
                        x={11}
                        y={13}
                        width={2}
                        height={6}
                        rx={1}
                        transform="rotate(90 11 13)"
                        fill="#111827"
                      ></rect>
                      <rect
                        x={16}
                        y={12}
                        width={2}
                        height={2}
                        rx={1}
                        fill="#111827"
                      />
                      <path
                        d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                        stroke="#111827"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                      <path
                        d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                        stroke="#111827"
                        strokeWidth={2}
                      />
                    </svg>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                      Collab With Brands
                    </h3>
                    <p className="mt-6 text-base text-gray-600">
                      Effortlessly publish your profile to our platform and make it
                      available to the world with a click of a button
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-1">
                    <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                  </div>
                  <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div className="p-9">
                      <svg
                        className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 8L20 8"
                          stroke="#111827"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                        <path
                          d="M4 16L14 16"
                          stroke="#111827"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                        <ellipse
                          cx={7}
                          cy={8}
                          rx={3}
                          ry={3}
                          transform="rotate(90 7 8)"
                          stroke="#111827"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                        <ellipse
                          cx={17}
                          cy={16}
                          rx={3}
                          ry={3}
                          transform="rotate(90 17 16)"
                          stroke="#111827"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                      <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                         Data Collection for Brands
                      </h3>
                      <p className="mt-6 text-base text-gray-600">
                        Collect data and information from influencers with forms built
                        on our platform and sort through them in a nice interface
                      </p>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden bg-white shadow-md rounded-xl">
                  <div className="p-9">
                    <svg
                      className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x={13}
                        y={14}
                        width={2}
                        height={2}
                        rx={1}
                        fill="#111827"
                      />
                      <rect
                        x={7}
                        y={11}
                        width={2}
                        height={6}
                        rx={1}
                        fill="#111827"
                      />
                      <rect
                        x={11}
                        y={13}
                        width={2}
                        height={6}
                        rx={1}
                        transform="rotate(90 11 13)"
                        fill="#111827"
                      ></rect>
                      <rect
                        x={16}
                        y={12}
                        width={2}
                        height={2}
                        rx={1}
                        fill="#111827"
                      />
                      <path
                        d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                        stroke="#111827"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                      <path
                        d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                        stroke="#111827"
                        strokeWidth={2}
                      />
                    </svg>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                      Custom Requests 
                    </h3>
                    <p className="mt-6 text-base text-gray-600">
                      Attach your own custom Message to your published Profile
                      or Brand on our platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benifits Section Ends here  */}

          {/* This Section is for the Join Now Action BUtton */}
          {/* Join Now Section Starts here  */}
          <div>
            <div className="h-screen w-screen bg-black ">
              <div className="relative pt-20">
                <div aria-hidden="true" className="hidden sm:block">
                  <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-800 rounded-r-3xl"></div>
                  <svg
                    className="absolute top-8 left-1/2 -ml-3"
                    width={404}
                    height={392}
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={392}
                      fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
                    />
                  </svg>
                </div>
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                  <div className="relative rounded-2xl px-6 py-10 bg-gray-700 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                    >
                      <svg
                        className="absolute inset-0 h-full w-full"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 1463 360"
                      >
                        <path
                          className="text-gray-600 text-opacity-40"
                          fill="currentColor"
                          d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                        />
                        <path
                          className="text-gray-800 text-opacity-40"
                          fill="currentColor"
                          d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                        />
                      </svg>
                    </div>
                    <div className="relative flex flex-col">
                      <div className="sm:text-center">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                          {" "}
                          Ready to Grow Your Business?
                        </h2>
                        <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-100">
                          {" "}
                          Like you hit a Follow Button!{" "}
                        </p>
                      </div>
                      <a
                        href="#"
                        className="w-auto inline-block mt-5 mx-auto rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                      >
                        Get started →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Join Now Section Ends here  */}

          {/* footer */}
          <div className="h-10 md:h-40" />
          <div className="grid gap-4 md:grid-cols-4">
            <ul className="space-y-1 text-gray-400">
              <li className="pb-4 font-serif text-gray-400">Social networks</li>
              <li>
                <a
                  href="https://twitter.com/victormustar"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
            <ul className="space-y-1 text-gray-400">
              <li className="pb-4 font-serif text-gray-400">Locations</li>
              <li>
                <a href="#" className="hover:underline">
                  Paris
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  New York
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  London
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Singapour
                </a>
              </li>
            </ul>
            <ul className="space-y-1 text-gray-400">
              <li className="pb-4 font-serif text-gray-400">Company</li>
              <li>
                <a href="#" className="hover:underline">
                  The team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Join us
                </a>
              </li>
            </ul>
            <ul className="space-y-1 text-gray-400">
              <li className="pb-4 font-serif text-gray-400">Join</li>
              <li>
                <a
                  href="#"
                  className="self-start px-3 py-2 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black"
                >
                  Get Started Now!
                </a>
              </li>
            </ul>
          </div>
          <div className="h-12" />
        </div>
      </div>
    </div>
  );
};

export default PreLanding;
