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

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@radix-ui/react-navigation-menu";

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
  const menus = document.querySelectorAll(".menu");

  menus.forEach((menu) => {
    menu.addEventListener("toggle", (event) => {
      if (menu.open) {
        menus.forEach((otherMenu) => {
          if (otherMenu !== menu) {
            otherMenu.open = false;
          }
        });
      }
    });
  });

  return (
    <div className="navbar sticky w-full top-0 z-30 inset-0">
      <div className="max-sm:hidden  py-1 bg-black px-2 w-[100%] ">
        <ul className="flex justify-between items-center ">
          <li className="w-20">
            <img
              src="/vibhav_logo.png"
              className="h-16 transition-all duration-700 delay-100 ease-in-out hover:scale-125 hover:ml-3"
            />
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
                  <DropdownMenuTrigger
                    className={`${
                      pathname.startsWith("/Projects/")
                        ? "text-white font-bold "
                        : "text-gray-400"
                    } hover:text-white `}
                  >
                    Projects
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => router.push("/Projects/aiml")}
                    >
                      AI/ML
                    </DropdownMenuItem>
                    {/* <DropdownMenuSeparator /> */}
                    <DropdownMenuItem
                      onClick={() => router.push("/Projects/arvr")}
                    >
                      AR/VR
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/Projects/iot")}
                    >
                      IOT
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/Projects/dsp")}
                    >
                      DSP
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/Projects/embedded")}
                    >
                      EMBEDDED SYSTEMS
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/Projects/quantumC")}
                    >
                      QUANTUM COMPUTING
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={`${
                      pathname.startsWith("/Team/")
                        ? "text-white font-bold "
                        : "text-gray-400"
                    } hover:text-white `}
                  >
                    Team
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <button onClick={() => router.push("/Team/CurrentTeam")}>
                        Current
                      </button>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <button onClick={() => router.push("/Team/Alumni")}>
                        Alumni
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20 text-white">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={`${
                      pathname.startsWith("/Work/")
                        ? "text-white font-bold "
                        : "text-gray-400"
                    } hover:text-white `}
                  >
                    Work
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <button onClick={() => router.push("/Work/CurrentYear")}>
                        Current Year
                      </button>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <button onClick={() => router.push("/Work/PreviousYear")}>
                        Previous Year
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </li>
          <li className="text-3xs border-solid border-4 border-black p-1 rounded w-20  mr-3">
            <button
              className="text-gray-400 hover:text-black transition-all duration-500 ease-in-out hover:scale-125 px-3 py-1 bg-white text-black rounded-3xl "
              onClick={handleContactClick}
            >
              Contact
            </button>
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
          <div class="flex h-screen flex-col justify-between border-e text-gray-500">
            <div class="px-4 py-6">
              <ul class="mt-6 space-y-1">
                <li>
                  <a
                    href="/"
                    class="block rounded-lg px-4 py-2 text-sm font-medium"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <details class="group menu [&_summary::-webkit-details-marker]:hidden">
                    <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2">
                      <span class="text-sm font-medium"> Projects </span>

                      <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <ul class="mt-2 space-y-1 px-4">
                      <li>
                        <a
                          href="/Projects/aiml"
                          class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          AI/ML
                        </a>
                      </li>

                      <li>
                        <a
                          href="/Projects/arvr"
                          class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          AR/VR
                        </a>
                      </li>

                      <li>
                        <a
                          href="/Projects/iot"
                          class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          IOT
                        </a>
                      </li>

                      <li>
                        <a
                          href="/Projects/dsp"
                          class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          DSP
                        </a>
                      </li>

                      <li>
                        <a
                          href="/Projects/embedded"
                          class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          EMBEDDED SYSTEMS
                        </a>
                      </li>

                      <li>
                        <a
                          href="/Projects/quantumC"
                          class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          QUANTAM COMPUTING
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details class="group menu [&_summary::-webkit-details-marker]:hidden">
                    <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2">
                      <span class="text-sm font-medium"> Team </span>

                      <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <ul class="mt-2 space-y-1 px-4">
                      <li>
                        <a
                          href="/Team/CurrentTeam"
                          class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          Current
                        </a>
                      </li>

                      <li>
                        <a
                          href="/Team/Alumni"
                          class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          Alumni
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details class="group menu [&_summary::-webkit-details-marker]:hidden">
                    <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2">
                      <span class="text-sm font-medium"> Work </span>

                      <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>

                    <ul class="mt-2 space-y-1 px-4">
                      <li>
                        <a
                          href="/Work/CurrentYear"
                          class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          Current Year
                        </a>
                      </li>

                      <li>
                        <a
                          href="/Work/PreviousYear"
                          class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          Previous Year
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>

                <li
                  onClick={() => {
                    setShowNavbar(false);
                    setTimeout(() => {
                      handleContactClick();
                    }, 800);
                  }}
                >
                  <span className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Contact
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
