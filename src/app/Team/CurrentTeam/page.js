"use client";
import { useEffect, useState } from "react";
import Team from "@/Data/Team.json";
import ProfileCard, { SkeletonProfileCard } from "@/Components/Cards/ProfileCard";

const CurrentTeam = () => {
  const [selectedYear, setSelectedYear] = useState("SuperFinal Year");
  const [loading, setLoading] = useState(true); // Loading state
  const [isOpen, setIsOpen] = useState(false);

  const yearLabels = {
    "SuperFinal Year": "Super Final Year Members",
    "Final Year": "Final Year Members",
    "Third Year": "Third Year Members",
    "Second Year": "Second Year Members",
    "First Year": "First Year Members",
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setLoading(true); 
    setTimeout(() => setLoading(false), 500);
  };

  const handleOptionClick = (option) => {
    setSelectedYear(option);
    setIsOpen(false);
  };
  useEffect(() => {
    setTimeout(() => setLoading(false), 500); 
  }, []);

  useEffect(() => {
    const handleOverflow = () => {
      if (window.innerWidth <= 640 && isOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    handleOverflow();
    window.addEventListener("resize", handleOverflow);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("resize", handleOverflow);
    };
  }, [isOpen]);

  return (
    <div className="p-4 mt-12">
      <h1 className="sm:text-4xl text-3xl font-extrabold text-center mb-7">Current Team</h1>
      <div className="flex flex-col items-center">
        <div className="w-[95vw] flex items-center justify-center mb-12 absolute">
          <div className="flex justify-evenly backdrop-blur max-sm:hidden rounded-[90px] px-7 transition-all duration-500 ease-in-out hover:px-12 py-6 w-fit gap-12 items-center backdrop-brightness-75 opacity-90 bg-zinc-900 border-1 border-gray-200 relative">
            {Object.keys(Team).map((year) => (
              <button
                key={year}
                className={`px-4 py-2 rounded-3xl text-white ${
                  selectedYear === year ? "bg-black" : "bg-gray-500"
                } transition-all duration-500 ease-in-out hover:bg-black hover:scale-110 z-10`}
                onClick={() => handleYearChange(year)}
              >
                {year}
              </button>
            ))}
          </div>

          <div
            className={`sm:hidden z-10 w-[100%] flex flex-col backdrop-blur-md rounded-[10px] px-7 transition-all duration-500 ease-in-out py-6 gap-12 items-center backdrop-brightness-75 h-fit opacity-100 relative`}
          >
            <div
              className={`relative inline-block text-left w-full transition-all duration-500 ease-in-out ${
                isOpen ? "transform scale-105" : "transform scale-100"
              }`}
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between px-4 py-2 bg-black text-gray-200 font-medium rounded-3xl shadow-lg focus:outline-none w-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                <span className="flex-1 text-center">{yearLabels[selectedYear]}</span>
                <svg
                  className={`w-5 h-5 ml-2 transition-transform transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isOpen && (
                <div
                  className={`left-0 z-10 mt-2 w-full rounded-md transition-all duration-500 ease-in-out transform ${
                    isOpen ? "scale-100 opacity-100 max-h-96" : "max-h-0 scale-95 opacity-0"
                  }`}
                >
                  <div className="h-[1px] bg-gray-300 w-full"></div>
                  <ul className="py-2 flex flex-col gap-3 items-center">
                    {Object.keys(Team).map((year) => (
                      <button
                        key={year}
                        className={`px-4 py-2 text-gray-200 font-medium bg-black rounded-3xl transition-all duration-300 ease-in-out w-full text-center ${
                          selectedYear === year
                            ? "bg-gray-800 text-white"
                            : "hover:bg-gray-800 hover:text-white"
                        } hover:scale-105`}
                        onClick={() => {
                          handleYearChange(year);
                          handleOptionClick(year);
                        }}
                      >
                        {yearLabels[year]}
                      </button>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-28">
          <div className="text-xl sm:text-4xl font-bold flex justify-center mb-4">
            <h1>{yearLabels[selectedYear]}</h1>
          </div>

          <div className="p-4 flex justify-center flex-wrap gap-12">
            {loading
              ? Array.from({ length: Team[selectedYear].length || 6 })
                  .map((_, index) => <SkeletonProfileCard key={index} />)
              : Team[selectedYear].map((member, index) => (
                  <ProfileCard
                    key={index}
                    name={member.Name}
                    position={member.Position}
                    profileImg={member.Profile}
                    backgroundImg={member.Profile}
                    githubLink={member.Github}
                    linkdinLink={member.LinkedIn}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTeam;
