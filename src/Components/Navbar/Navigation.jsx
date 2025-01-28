"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { HiPresentationChartBar } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  AudioLines,
  BookMarked,
  Box,
  Cpu,
  History,
  Home,
  Mail,
  Slack,
  User,
  Wifi,
} from "lucide-react";
import { Bot } from "lucide-react";
import { useRef } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";


const projects = [
  {
    name: "AI/ML",
    href: "/Projects/aiml",
    icon: Bot,
  },
  {
    name: "AR/VR",
    href: "/Projects/arvr",
    icon: Box,
  },
  {
    name: "IoT",
    href: "/Projects/iot",
    icon: Wifi,
  },
  {
    name: "DSP",
    href: "/Projects/dsp",
    icon: AudioLines,
  },
  {
    name: "EMBEDDED SYSTEMS",
    href: "/Projects/embedded",
    icon: Cpu,
  },

  {
    name: "QUANTUM COMPUTING",
    href: "/Projects/quantumC",
    icon: Slack,
  },
];
const ourwork = [
  {
    name: "Current Year",
    href: "/Work/CurrentYear",
    icon: MdWork,
  },
  {
    name: "Previous Year",
    href: "/Work/PreviousYear",
    icon: HiPresentationChartBar,
  },
];
const ourteam = [
  {
    name: "Current Team",
    href: "/Team/CurrentTeam",
    icon: RiTeamLine,
  },
  {
    name: "Alumni",
    href: "/Team/Alumni",
    icon: AiOutlineTeam,
  },
];

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [ProjectVisible, setProjectVisible] = useState(false);
  const [WorkVisible, setWorkVisible] = useState(false);
  const [TeamVisible, setTeamVisible] = useState(false);
  const navRef = useRef(null);
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState("");
  const pathname = usePathname();

  const scrollToBottom = () => {
    setTimeout(() => {
      if (window.innerWidth <= 640) {
        window.scrollTo({
          top: document.body.scrollHeight - window.innerHeight - 200,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight - window.innerHeight - 400,
          behavior: "smooth",
        });
      }
    }, 800);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };
    setActiveRoute(router.pathname);

    handleResize(); // Call handleResize initially to set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [router.pathname]); //for resize

  const toggleProjectVisibility = () => {
    setProjectVisible(!ProjectVisible);
  };

  const handleProjectClick = (e) => {
    e.preventDefault();
    if (ProjectVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "50px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "192px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "32px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "23px"
      );
    }
    toggleProjectVisibility();
    setWorkVisible(false);
    setTeamVisible(false);
  };

  const toggleWorkVisibility = () => {
    setWorkVisible(!WorkVisible);
  };

  const handleWorkClick = (e) => {
    e.preventDefault();
    if (WorkVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "50px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "192px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "32px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "23px"
      );
    }
    toggleWorkVisibility();
    setProjectVisible(false);
    setTeamVisible(false);
  };

  const toggleTeamVisibility = () => {
    setTeamVisible(!TeamVisible);
  };

  const handleTeamClick = (e) => {
    e.preventDefault();
    if (TeamVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "50px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "192px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "32px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "23px"
      );
    }
    toggleTeamVisibility();
    setProjectVisible(false);
    setWorkVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setProjectVisible(false);
        setWorkVisible(false);
        setTeamVisible(false);
      }
    };

    const handleScroll = () => {
      // Close subnavigation menus when scrolling down
      if (
        window.scrollY > window.scrollY / 2 &&
        (ProjectVisible || WorkVisible || TeamVisible)
      ) {
        setProjectVisible(false);
        setWorkVisible(false);
        setTeamVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ProjectVisible, WorkVisible, TeamVisible]); //navigation of submenus

  const handleSubmenuClick = () => {
    setProjectVisible(false);
    setWorkVisible(false);
    setTeamVisible(false);
  };

  return isMobile ? (
    <nav
      ref={navRef}
      className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-screen-xl gap-x-2 gap-y-2  bg-[rgba(26,27,30,0.4)] border flex-col flex  p-[9px] max-sm:p-[5px] border-solid border-[#222325]  transition-custom "
    >
      {ProjectVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
          <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6 ">
            {projects.map((item) => (
              <Link
                onClick={handleSubmenuClick}
                key={item.name}
                href={item.href}
                className="text-white text-center text-md font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
              >
                <item.icon className="inline mx-4 w-7 h-7" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {WorkVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
          <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6">
            {ourwork.map((item) => (
              <Link
                onClick={handleSubmenuClick}
                key={item.name}
                href={item.href}
                className="text-white text-center text-md font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
              >
                <item.icon className="inline mx-4 w-7 h-7" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {TeamVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
          <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6">
            {ourteam.map((item) => (
              <Link
                onClick={handleSubmenuClick}
                key={item.name}
                href={item.href}
                className="text-white text-center text-md font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
              >
                <item.icon className="inline mx-4 w-7 h-7" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="w-full gap-x-2 max-md:gap-1 gap-y-2 bg-[#1a1b1e] justify-between flex overflow-auto p-3 max-sm:p-2 transition-custom">
        <div
          onClick={(e) => {
            handleProjectClick(e);
          }}
          className={`menuLinkm ${
            activeRoute === "/Projects/[id]" ? "active" : ""
          }`}
        >
          <div>
            <BookMarked className="w-7 h-7 text-gray-200 mx-auto" />
            <p>Projects</p>
          </div>
        </div>

        <div
          onClick={(e) => {
            handleWorkClick(e);
          }}
          className={`menuLinkm ${
            activeRoute === "/OurWork/[id]" ? "active" : ""
          }`}
        >
          <div>
            <History className="w-7 h-7 text-gray-200 mx-auto" />
            <p> Work</p>
          </div>
        </div>

        <Link
          href="/"
          className={`menuLinkm ${location.pathname === "/" ? "active" : ""}`}
        >
          <div>
            <Home className="w-7 h-7 text-gray-300 mx-auto" />
            <p>Home</p>
          </div>
        </Link>

        <div
          onClick={(e) => {
            handleTeamClick(e);
          }}
          className={`menuLinkm ${
            activeRoute === "/OurTeam/[id]" ? "active" : ""
          }`}
        >
          <div>
            <User className="w-7 h-7 text-gray-200 mx-auto" />
            <p>Team</p>
          </div>
        </div>

        <Link href="/" scroll={false}>
          <div onClick={scrollToBottom} className="menuLinkm">
            <div>
              <Mail className="w-7 h-7 text-gray-200 mx-auto " />
              <p>Contact</p>
            </div>
          </div>
        </Link>
      </div>
    </nav> //for mobile view
  ) : (
    <>
    <nav
    ref={navRef}
    className=" fixed top-8 left-5 z-50 mx-auto  max-w-screen-lg gap-x-2 gap-y-2 text-gray-200 rounded-[var(--border-radius--menu-wrapper)]  bg-[rgba(26,27,30,0.4)] border flex-col-reverse flex  p-[9px] max-sm:p-[5px] border-solid border-[#333333]  transition-custom "
  >
       <ul className="flex justify-between items-center bg-[#1a1b1e] rounded-[30px] p-1">
           <li className="w-20">
             <img
               src="/vibhav_logo.png"
               className="h-16 transition-all duration-700 delay-100 ease-in-out hover:scale-125 hover:ml-3"
             />
           </li>
          

         </ul>
 
 

  </nav> 
    <nav
      ref={navRef}
      className=" fixed top-8 right-0 left-0 z-50 mx-auto w-2/3 max-w-screen-lg gap-x-2 gap-y-2 text-gray-200 rounded-[var(--border-radius--menu-wrapper)]  bg-[rgba(26,27,30,0.4)] border flex-col-reverse flex  p-[9px] max-sm:p-[5px] border-solid border-[#333333]  transition-custom "
    >
      {ProjectVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col-reverse flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
          <div className="gap-x-4 gap-y-4 grid-rows-[auto_auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6 ">
            {projects.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
                onClick={handleSubmenuClick}
              >
                <item.icon className="inline mx-4 w-6 h-6" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {WorkVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
          <div className="grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6">
            {ourwork.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleSubmenuClick}
                className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
              >
                <item.icon className="inline mx-4 w-6 h-6" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {TeamVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
          <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6">
            {ourteam.map((item) => (
              <Link
                onClick={handleSubmenuClick}
                key={item.name}
                href={item.href}
                className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
              >
                <item.icon className="inline mx-4 w-6 h-6" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="w-full gap-x-2 max-md:gap-1 gap-y-2 rounded-[var(--border-radius--menu-link)] bg-[#1a1b1e] justify-between flex overflow-auto p-3 max-sm:p-2 transition-custom">
        <p
          onClick={(e) => {
            handleProjectClick(e);
          }}
          className={`text-white menuLink ${
            pathname.startsWith("/Work/") ? "active" : ""
          }`}
        >
          Projects
        </p>
        <p
          onClick={(e) => {
            handleWorkClick(e);
          }}
          className={`menuLink ${
            activeRoute === "/OurWork/[id]" ? "active" : ""
          }`}
        >
          Work
        </p>

        <Link
          href="/"
          className={`flex gap-2 items-center menuLink ${location.pathname === "/" ? "active" : ""}`}
        >
          <Home className="w-5 h-5 text-gray-300" />
          Home
        </Link>

        <p
          onClick={(e) => {
            handleTeamClick(e);
          }}
          className={`menuLink ${
            activeRoute === "/OurTeam/[id]" ? "active" : ""
          }`}
        >
          Team
        </p>

        <Link href="/" scroll={false}>
          <p className="menuLink" onClick={scrollToBottom}>
            Contact
          </p>
        </Link>
      </div>
    </nav> 
    <nav
    ref={navRef}
    className=" fixed top-8 right-5 z-50 mx-auto  max-w-screen-lg gap-x-2 gap-y-2 text-gray-200 rounded-[var(--border-radius--menu-wrapper)]  bg-[rgba(26,27,30,0.4)] border flex-col-reverse flex  p-[9px] max-sm:p-[5px] border-solid border-[#333333]  transition-custom "
  >
       <ul className="flex justify-between items-center bg-[#1a1b1e] rounded-[30px] p-1">
           <li className="w-20">
             <img
               src="/vibhav_logo.png"
               className="h-16 transition-all duration-700 delay-100 ease-in-out hover:scale-125 hover:ml-3"
             />
           </li>
          

         </ul>
 
 

  </nav> //navigation for desktop view
    </>
  );
}
