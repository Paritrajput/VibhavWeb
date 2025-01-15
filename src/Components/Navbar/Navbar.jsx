"use client";
import React, { useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { UserContext } from "@/Context/UserContext/UserContext";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

function Navbar() {
  const { scrollToContact } = useContext(UserContext);
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();

  const handleContactClick = () => {
    if (window.location.pathname === "/") {
      scrollToContact();
    } else {
      router.push("/");
      setTimeout(() => scrollToContact(), 100);
    }
  };

  const toggleNavbar = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (!showNavbar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    setShowNavbar(() => !showNavbar);
  };

  return (
    <div className="navbar sticky w-full top-0 z-30 inset-0">
      <div className="max-sm:hidden  py-1 bg-black px-2 w-[100%] ">
        <ul className="flex justify-between items-center ">
          <li>
            <img src="/vibhav_logo.png" className="h-16" />
          </li>
          <li>
            <ul className="flex items-center justify-evenly py-1 gap-5 bg-black w-[100%] ">
              <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
                <Link
                  href="/"
                  className={`${
                    pathname === "/" ? "text-white font-bold " : "text-gray-400"
                  } hover:text-white `}
                >
                  Home
                </Link>
              </li>
              <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
                <DropdownMenu>
                  <DropdownMenuTrigger>Projects</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => router.push("/Projects/aiml")}
                    >
                      AI/ML
                      {/* <button onClick={() => router.push("/Projects/aiml")}>
                        AI/ML
                      </button> */}
                      {/* <Link href="/Projects">AI/ML</Link> */}
                    </DropdownMenuItem>
                    {/* <DropdownMenuSeparator /> */}
                    <DropdownMenuItem
                      onClick={() => router.push("/Projects/arvr")}
                    >
                      AR/VR
                      {/* <button onClick={() => router.push("/Projects/arvr")}>
                        AR/VR
                      </button> */}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/Projects/iot")}
                    >
                      IOT
                      {/* <button onClick={() => router.push("/Projects/iot")}>
                        IOT
                      </button> */}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/Projects/dsp")}
                    >
                      DSP
                      {/* <button onClick={() => router.push("/Projects/dsp")}>
                        DSP
                      </button> */}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/Projects/embedded")}
                    >
                      EMBEDDED SYSTEMS
                      {/* <button onClick={() => router.push("/Projects/embedded")}>
                        EMBEDDED SYSTEMS
                      </button> */}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/Projects/quantumC")}
                    >
                      QUANTUM COMPUTING
                      {/* <button onClick={() => router.push("/Projects/quantumC")}>
                        QUANTUM COMPUTING
                      </button> */}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* <Link
                  href="/Projects"
                  className={`${
                    pathname === "/Projects"
                      ? "text-white font-bold  "
                      : "text-gray-400 "
                  } hover:text-white  `}
                >
                  Projects
                </Link> */}
              </li>
              <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
                <DropdownMenu>
                  <DropdownMenuTrigger>Team</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <button onClick={() => router.push("/Team/CurrentTeam")}>
                        Current
                      </button>
                      {/* <Link href="/Projects">AI/ML</Link> */}
                    </DropdownMenuItem>
                    {/* <DropdownMenuSeparator /> */}
                    <DropdownMenuItem>
                      <button onClick={() => router.push("/Team/Alumni")}>
                        Alumni
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {/* <Link
                  href="/Team"
                  className={`${
                    pathname === "/Team"
                      ? "text-white font-bold "
                      : "text-gray-400 "
                  } hover:text-white `}
                >
                  Team
                </Link> */}
              </li>
              <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
                <DropdownMenu>
                  <DropdownMenuTrigger>Work</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <button onClick={() => router.push("/Work/CurrentYear")}>
                        Current Year
                      </button>
                      {/* <Link href="/Projects">AI/ML</Link> */}
                    </DropdownMenuItem>
                    {/* <DropdownMenuSeparator /> */}
                    <DropdownMenuItem>
                      <button onClick={() => router.push("/Work/PreviousYear")}>
                        Previous Year
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {/* <Link
                  href="/Work"
                  className={`${
                    pathname === "/Work"
                      ? "text-white font-bold "
                      : "text-gray-400 "
                  } hover:text-white  `}
                >
                  Work
                </Link> */}
              </li>
            </ul>
          </li>
          <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
            <button onClick={handleContactClick}>Contact</button>
          </li>
        </ul>
      </div>
      <div className="sm:hidden flex flex-col w-full   top-0">
        <ul className="flex items-center justify-between px-3 py-1 w-[100%] mx-auto w-full  bg-black ">
          <li className="z-40">
            <img src="/vibhav_logo.png" className="h-14 " />
          </li>
          <li>
            <button
              onClick={toggleNavbar}
              className="relative w-6 h-6 flex flex-col justify-center items-center group"
            >
              <span
                className={`block w-full h-[3px] bg-stone-300 rounded-md transition-all duration-300 ease-in-out ${
                  showNavbar ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>

              <span
                className={`block w-full h-[3px] bg-stone-300 rounded-md my-1 transition-all duration-300 ease-in-out ${
                  showNavbar ? "opacity-0" : ""
                }`}
              ></span>

              <span
                className={`block w-full h-[3px] bg-stone-300 rounded-md transition-all duration-300 ease-in-out ${
                  showNavbar ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>

            {/* <img
              src={showNavbar ? "/cross.png" : "/showMenu.png"}
              className="w-7 z-20 "
            /> */}
          </li>
        </ul>

        <div
          className={`sm:hidden transition-all duration-700 delay-100 ease-in-out fixed top-14 bg-black w-[100%]   overflow-hidden ${
            showNavbar ? " h-full" : " h-0"
          } `}
        >
          <ul
            className={` flex flex-col gap-4 p-5 ml-4 justify-evenly  mx-auto z-20`}
          >
            <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white flex gap-4">
              <img src="/home.png" />
              <button
                onClick={() => {
                  router.push("/");
                  toggleNavbar();
                }}
              >
                Home
              </button>
            </li>
            <li className="text-3xs flex gap-4 border-solid border-4 border-black p-1 rounded w-20 text-white  top-3">
              <img src="/projects.png" />
              <button
                onClick={() => {
                  router.push("/Projects");
                  toggleNavbar();
                }}
              >
                Projects
              </button>
            </li>
            <li className="text-3xs flex gap-4 border-solid border-4 border-black p-1 rounded w-20 text-white  top-3">
              <img src="/team.png" />
              <button
                onClick={() => {
                  router.push("/Team");
                  toggleNavbar();
                }}
              >
                Team
              </button>
            </li>
            {/* <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
              <button
                onClick={() => {
                  router.push("/Work");
                  toggleNavbar();
                }}
              >
                Work
              </button>
            </li> */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <li className="text-3xs flex gap-4 border-solid border-4 border-black p-1 rounded w-20 text-white  top-3">
                  <img src="/projects.png" />
                  Work
                </li>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <button onClick={() => router.push("/Work/CurrentYear")}>
                    Current Year
                  </button>
                  {/* <Link href="/Projects">AI/ML</Link> */}
                </DropdownMenuItem>
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem>
                  <button onClick={() => router.push("/Work/PreviousYear")}>
                    Previous Year
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <li className="text-3xs flex gap-4 border-solid border-4 border-black p-1 rounded w-20 text-white  top-3">
              <img src="/contact-us.png" />
              <button
                onClick={() => {
                  handleContactClick();
                  toggleNavbar();
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
