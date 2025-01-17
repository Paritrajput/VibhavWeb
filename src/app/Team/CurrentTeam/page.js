"use client";
import { useState } from "react";
import Team from "@/Data/Team.json";
import ProfileCard from "@/Components/Cards/ProfileCard";

const CurrentTeam = () => {
  const [selectedYear, setSelectedYear] = useState("superFinal");

  const yearLabels = {
    superFinal: "Super Final Year Members",
    final: "Final Year Members",
    third: "Third Year Members",
    second: "Second Year Members",
    first: "First Year Members",
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-extrabold text-center mb-6">Current Team</h1>

      <div className=" w-[97vw]  flex items-center justify-center mb-12">
      <div className="flex justify-evenly backdrop-blur max-sm:flex-col  rounded-[90px] px-7 transition-all duration-500 ease-in-out hover:px-12 py-6 w-fit gap-12 items-center backdrop-brightness-75 opacity-90  border-1 border-gray-200 ">
        {Object.keys(Team).map((year) => (
          <button
          key={year}
          className={`px-4 py-2 rounded-3xl text-white ${
            selectedYear === year ? "bg-black" : "bg-gray-500"
          } transition-all duration-500 ease-in-out hover:bg-black hover:scale-110 z-10`}
          onClick={() => handleYearChange(year)}
        >
          {yearLabels[year]}
        </button>
        ))}
      </div>
      </div>

      {/* Display Selected Year */}
      <div className="text-4xl font-bold flex justify-center mb-4">
        <h1>{yearLabels[selectedYear]}</h1>
      </div>
 
      {/* Render Team Members */}
      <div className="p-4 flex justify-center flex-wrap gap-12">
        {Team[selectedYear].map((member) => (
          <ProfileCard
          
            name={member.name}
            position={member.position}
            profileImg={member.image}
            backgroundImg={member.image}
            githubLink={member.github}
            linkdinLink={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrentTeam;
