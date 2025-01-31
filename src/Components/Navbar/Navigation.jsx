"use client";
import React, { useContext } from "react";
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
import { UserContext } from "@/Context/UserContext/UserContext";
// import { faL } from "@fortawesome/free-solid-svg-icons";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

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

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
   const [isAnimating, setIsAnimating] = useState(false);
     const { scrollToContact } = useContext(UserContext);


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

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if(window.scrollY>300){
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
    }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

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

  const handleProjectClick = () => {
  
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

  const handleContactClick = () => {
    if (window.location.pathname === "/") {
      scrollToContact();
    } else {
      router.push("/");
      setTimeout(() => scrollToContact(), 100);
    }
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
    setTimeout(()=>{
      setProjectVisible(false);
      setWorkVisible(false);
      setTeamVisible(false);
   
    },1000)

   
  };

  return isMobile ? (
    
    <div className={`navbar sticky  z-[100] inset-0 flex flex-col w-full   top-0 z-90 transition-colors duration-300
      ease-in-out ${isVisible?"bg-black  ":"" } `}>
     <ul className="flex items-center justify-between px-3 py-1 mx-auto w-full ">
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
       className={` transition-all duration-700 delay-100 ease-in-out fixed top-14 bg-black w-[100%]   overflow-hidden ${
         showNavbar ? " h-full" : " h-0"
       } `}
     >
       <div className="flex h-screen flex-col justify-between border-e text-gray-500">
         <div className="px-4 py-6">
           <ul className="mt-6 space-y-1">
             <li>
               <a
                 href="/"
                 className="block rounded-lg px-4 py-2 text-sm font-medium"
               >
                 Home
               </a>
             </li>

             <li>
               <details className="group menu [&_summary::-webkit-details-marker]:hidden">
                 <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2">
                   <span className="text-sm font-medium"> Projects </span>

                   <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="size-5"
                       viewBox="0 0 20 20"
                       fill="currentColor"
                     >
                       <path
                         fillRule="evenodd"
                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                         clipRule="evenodd"
                       />
                     </svg>
                   </span>
                 </summary>

                 <ul className="mt-2 space-y-1 px-4">
                   <li>
                     <a
                       href="/Projects/aiml"
                       className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                     >
                       AI/ML
                     </a>
                   </li>

                   <li>
                     <a
                       href="/Projects/arvr"
                       className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                     >
                       AR/VR
                     </a>
                   </li>

                   <li>
                     <a
                       href="/Projects/iot"
                       className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                     >
                       IOT
                     </a>
                   </li>

                   <li>
                     <a
                       href="/Projects/dsp"
                       className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                     >
                       DSP
                     </a>
                   </li>

                   <li>
                     <a
                       href="/Projects/embedded"
                       className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                     >
                       EMBEDDED SYSTEMS
                     </a>
                   </li>

                   <li>
                     <a
                       href="/Projects/quantumC"
                       className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                     >
                       QUANTAM COMPUTING
                     </a>
                   </li>
                 </ul>
               </details>
             </li>

             <li>
               <details className="group menu [&_summary::-webkit-details-marker]:hidden">
                 <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2">
                   <span className="text-sm font-medium"> Team </span>

                   <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="size-5"
                       viewBox="0 0 20 20"
                       fill="currentColor"
                     >
                       <path
                         fillRule="evenodd"
                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                         clipRule="evenodd"
                       />
                     </svg>
                   </span>
                 </summary>

                 <ul className="mt-2 space-y-1 px-4">
                   <li>
                     <a
                       href="/Team/CurrentTeam"
                       className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                     >
                       Current
                     </a>
                   </li>

                   <li>
                     <a
                       href="/Team/Alumni"
                       className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                     >
                       Alumni
                     </a>
                   </li>
                 </ul>
               </details>
             </li>

             <li>
               <details className="group menu [&_summary::-webkit-details-marker]:hidden">
                 <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2">
                   <span className="text-sm font-medium"> Work </span>

                   <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="size-5"
                       viewBox="0 0 20 20"
                       fill="currentColor"
                     >
                       <path
                         fillRule="evenodd"
                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                         clipRule="evenodd"
                       />
                     </svg>
                   </span>
                 </summary>

                 <ul className="mt-2 space-y-1 px-4">
                   <li>
                     <a
                       href="/Work/CurrentYear"
                       className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                     >
                       Current Year
                     </a>
                   </li>

                   <li>
                     <a
                       href="/Work/PreviousYear"
                       className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
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
  ) : (
    <div className="top-1">
      <nav
        ref={navRef}
        className={`fixed top-1 left-5 z-50 mx-auto  max-w-screen-lg gap-x-2 gap-y-2 text-gray-200 rounded-[var(--border-radius--menu-wrapper)]  bg-[rgba(26,27,30,0.4)] border flex-col-reverse flex  max-sm:p-[5px] border-solid border-[#333333] transition-custom transition-all ease-in-out duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex justify-center items-center bg-[#1a1b1e] rounded-[20px] p-1">
          <li className="w-[5rem] px-1 py-1 flex justify-center">
            <img
              src="/vibhav_logo.png"
              className="h-[3.7rem] transition-all duration-700 delay-100 ease-in-out"
            />
          </li>
        </ul>
      </nav>
      <nav
        ref={navRef}
        className={` fixed top-1 right-0 left-0 z-50 mx-auto sm:w-[70%]  max-w-screen-lg gap-x-2 gap-y-2 text-gray-200 rounded-[var(--border-radius--menu-wrapper)]  bg-[rgba(26,27,30,0.4)] border flex-col-reverse flex   max-sm:p-[5px] border-solid border-[#333333]  transition-custom transition-all ease-in-out duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {ProjectVisible && (
          <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col-reverse flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
            <div className="gap-x-4 gap-y-4 grid-rows-[auto_auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6 ">
              {projects.map((item) => (
                
                <button
               
                onClick={(e) => {
                  e.preventDefault(); // Prevents URL from showing in status bar
                  router.push("/");
              
             
                }}
              >
                <item.icon className="inline mx-4 w-6 h-6" />
                {item.name}
              </button>
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
        <div className="w-full justify-evenly gap-x-1 overflow-x-hidden md:gap-x-7 max-md:gap-1 gap-y-2 rounded-[var(--border-radius--menu-link)] bg-[#1a1b1e]  items-center flex overflow-auto p-3 max-sm:p-2 transition-custom">
          <p
            onClick={(e) => {
              handleProjectClick(e);
            }}
            className={`text-white menuLink ${
              pathname.startsWith("/Projects/") ? "active" : ""
            }`}
          >
            Projects
          </p>
          <p
               onClick={(e) => {
                handleWorkClick(e);
              }}
            className={`menuLink ${pathname.startsWith("/Work") ? "active" : ""}`}
          >
            Work
          </p>

          <Link
            href="/"
            className={`flex gap-2 items-center menuLink ${
              pathname === "/" ? "active" : ""
            }`}
          >
            <Home className="w-5 h-5 text-gray-300" />
            Home
          </Link>

          <p
            onClick={(e) => {
              handleTeamClick(e);
            }}
            className={`menuLink ${
              pathname.startsWith("/Team/") ? "active" : ""
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
        className={`fixed top-1 right-5 z-50 mx-auto  max-w-screen-lg gap-x-2 gap-y-2 text-gray-200 rounded-[var(--border-radius--menu-wrapper)]  bg-[rgba(26,27,30,0.4)] border flex-col-reverse flex   border-solid border-[#333333]  transition-custom transition-all ease-in-out duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full p-0 opacity-0"
        }`}
      >
        <ul className="flex justify-between items-center bg-[#1a1b1e] rounded-[20px] ">
          <li className="w-[5.9rem] p-2 flex justify-center  ">
            <img
              src="/nimbusLogo.png"
              className="h-[3.8rem]  "
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}