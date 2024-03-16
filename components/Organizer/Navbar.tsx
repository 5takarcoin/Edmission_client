"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AppDispatch, useAppSelector } from "@/store/store";
import { RxCross1 } from "react-icons/rx";
import Logout from "@/components/Organizer/Logout";
import { useDispatch } from "react-redux";
import { login } from "@/store/userSlice";

export default function Navbar() {
  const user = useAppSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>()


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
      link: "/universities",
    },
    {
      title: "EdJourney",
      link: "/",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const url = process.env.NEXT_PUBLIC_API + "currUser"; 
        const response = await fetch(url, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        dispatch(login(jsonData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if(!user.name) fetchData();
  }, []);

  return (
    <div className="h-20 lg:max-w-[80%] m-auto flex items-center justify-between p-4">
      <div>
        <Link href={"/"}>
          <img className="h-8" src="./edmission.svg" alt="" />
        </Link>
      </div>
      <div>
        <button
          className="lg:hidden focus:outline"
          onClick={() => {
            setMenuOpen(true);
            document.body.classList.add("hide-scroll");
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

        <div className="hidden lg:flex gap-8 items-center">
          {user.name && (
            <div>
              <div className="flex gap-4 text-xl items-center">
                <h3>{user.name}</h3>
                {/* <img
                  className=" h-12 w-12 object-cover rounded-full"
                  src={user.image}
                  alt=""
                /> */}
                {user.accType}
              </div>
            </div>
          )}
          {links.map((link, i) => {
            return (
              <div key={i}>
                <Link
                  onClick={() => {
                    setMenuOpen(false);
                    document.body.classList.remove("hide-scroll");
                  }}
                  href={link.link}
                  className="hover:text-ed-white"
                >
                  {link.title}
                </Link>
              </div>
            );
          })}
          <div className="flex items-center justify-end">
            {user.name ? (
              <Logout />
            ) : (
              <Link
                onClick={() => {
                    setMenuOpen(false);
                    document.body.classList.remove("hide-scroll");
                  }}
                href="/login"
                className="border-2 border-ed-prim text-ed-prim hover:text-white hover:bg-ed-prim px-8 py-2 rounded-md"
              >
                Login
              </Link>
            )}
          </div>
        </div>
        <div
          className={`${
            !menuOpen && "hidden"
          } lg:hidden flex justify-end w-[100vw] h-[100vh] bg-black bg-opacity-40 absolute top-0 right-0`}
        >
          <div
            className={`relative h-full bg-ed-prim w-[75%] text-white flex items-center`}
          >
            <div
              onClick={() => {
                setMenuOpen(false);
                document.body.classList.remove("hide-scroll");
              }}
              className="absolute top-4 right-4 p-8 text-2xl"
            >
              <RxCross1 />
            </div>

            <div className="h-[40%] w-[85%] flex-col flex justify-around">
              {user.name && (
                <div className="flex items-center justify-end">
                  <div className="flex gap-4 text-xl items-center">
                    <h3>{user.name}</h3>
                    {/* <img
                      className=" h-12 w-12 object-cover rounded-full"
                      src={user.image}
                      alt=""
                    /> */}
                {user.accType}
                  </div>
                </div>
              )}
              {links.map((link, i) => {
                return (
                  <div key={i} className="flex items-center justify-end">
                    <Link
                      onClick={() => {
                        setMenuOpen(false);
                        document.body.classList.remove("hide-scroll");
                      }}
                      href={link.link}
                      className="hover:text-ed-white"
                    >
                      {link.title}
                    </Link>
                  </div>
                );
              })}
              <div className="flex items-center justify-end">
                {user.name ? (
                  <Logout />
                ) : (
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                      document.body.classList.remove("hide-scroll");
                    }}
                    href="/login"
                    className="border-2 border-ed-white text-white hover:text-ed-prim hover:bg-ed-white px-8 py-2 rounded-md"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
