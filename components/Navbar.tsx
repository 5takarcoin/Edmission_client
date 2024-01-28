"use client";

import { useState } from "react";
import Link from "next/link";
import { useAppSelector } from "@/store/store";
import { FaStar } from "react-icons/fa";

export default function Navbar() {
  const user = useAppSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(true);

  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "High Schools",
      link: "/",
    },
    {
      title: "Colleges",
      link: "/",
    },
    {
      title: "Universities",
      link: "/",
    },
    {
      title: "EdJourney",
      link: "/",
    },
  ]

  return (
    // <div className="px-4">
    //   <div className="flex items-center justify-between py-4">
    //     <div className="h-8">
    //       <img className='h-full' src="./edmission.svg" alt="" />
    //       <p>{user ? user.username : "HaHa"}</p>
    //     </div>

    // <button
    //   className="lg:hidden focus:outline- z-10"
    //   onClick={() => setMenuOpen(!menuOpen)}
    // >
    //   <svg
    //     className="w-6 h-6 text-gray-700 hover:text-gray-900"
    //     fill="none"
    //     stroke="currentColor"
    //     viewBox="0 0 24 24"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth="2"
    //       d="M4 6h16M4 12h16m-7 6h7"
    //     ></path>
    //   </svg>
    // </button>

    //     <div className={`p-8 lg:flex lg:items-center lg:space-x-4 ${menuOpen ? 'flex-col absolute bg-ed-white border-2 border-ed-prim right-0 top-0 h-[400px] space-y-4 w-96' : 'hidden'}`}>
    //       <div className='flex items-center justify-center'><Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link></div>
    //       <div className='flex items-center justify-center'><Link href="/high-schools" className="text-gray-700 hover:text-gray-900">High Schools</Link></div>
    //       <div className='flex items-center justify-center'><Link href="/colleges" className="text-gray-700 hover:text-gray-900">Colleges</Link></div>
    //       <div className='flex items-center justify-center'><Link href="/universities" className="text-gray-700 hover:text-gray-900">Universities</Link></div>
    //       <div className='flex items-center justify-center'><Link href="/edjourney" className="text-gray-700 hover:text-gray-900">EdJourney</Link></div>
    //       <div className='flex items-center justify-center'><Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link></div>
    //     </div>
    //   </div>
    // </div>

    <div className="h-20 flex items-center justify-between p-4">
      <div>
        <img className="h-8" src="./edmission.svg" alt="" />
      </div>
      <div>
        <button
          className="lg:hidden focus:outline"
          onClick={() => {
            setMenuOpen(true);
            document.body.classList.add('hide-scroll');
          }}
        >
          <svg
            className="w-6 h-6 text-gray-700 hover:text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div className={`${
              !menuOpen && "hidden"
            } flex justify-end w-[100vw] h-[100vh] bg-black bg-opacity-40 absolute top-0 right-0`}>
          <div
            className={`relative h-full bg-blue-400 w-[70%] flex items-center`}
          >

            <div onClick={() => {
            setMenuOpen(false);
            document.body.classList.remove('hide-scroll');
          }} className="absolute top-8 right-8 p-8 text-2xl"><FaStar /></div>

            <div className="h-[50%] w-[80%] flex-col flex justify-around">


              <div className="flex items-center justify-end">
                <Link href="/" className="text-gray-700 hover:text-gray-900">
                  Home
                </Link>
              </div>


              <div className="flex items-center justify-end">
                <Link
                  href="/high-schools"
                  className="text-gray-700 hover:text-gray-900"
                >
                  High Schools
                </Link>
              </div>
              <div className="flex items-center justify-end">
                <Link
                  href="/colleges"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Colleges
                </Link>
              </div>
              <div className="flex items-center justify-end">
                <Link
                  href="/universities"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Universities
                </Link>
              </div>
              <div className="flex items-center justify-end">
                <Link
                  href="/edjourney"
                  className="text-gray-700 hover:text-gray-900"
                >
                  EdJourney
                </Link>
              </div>
              <div className="flex items-center justify-end">
                <Link
                  href="/login"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
