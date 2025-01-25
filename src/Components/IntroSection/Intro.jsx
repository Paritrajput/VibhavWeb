import React, { useEffect, useState } from "react";
import GradientText from '@/Components/ui/GradientText'
import SplashCursor from "../ui/SplashCursor"
import Navbar from "../Navbar/Navbar";





function Intro() {
  return (
    <div className="h-screen w-screen text-white  pt-5 mb-16">
      <div className="h-2/3 flex flex-col ">
        <SplashCursor />
        <div className="flex flex-col items-center mt-5 pt-5 ">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-6xl font-bold font-\[Arkhip\] mx-auto sm:text-8xl sm:ml-5"
          >
            Team 
          </GradientText>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-6xl font-bold font-\[Arkhip\] mx-auto sm:text-8xl sm:ml-5"
          >
            Vibhav
          </GradientText>
        </div>
        <div className="text-3xl font-light relative p-5 mx-auto sm:text-3xl sm:ml-7"> Beyond the infinity</div>
      </div>
    </div>
  );
}

export default Intro;



