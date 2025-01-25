import React, { useEffect, useState } from "react";
import GradientText from '@/Components/ui/GradientText'
import SplashCursor from "../ui/SplashCursor"
import Navbar from "../Navbar/Navbar";





function Intro() {
  return (
    <div className="h-screen w-screen text-white  pt-5 mb-16  bg-white">
      <div className="h-2/3 flex flex-col">
        <div className=" text-align mt-5 pt-5 ">
          <SplashCursor/>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-8xl font-bold font-\[Arkhip\]"
          >
            Team Vibhav
          </GradientText>
        </div>
        <div className="text-3xl font-light relative p-2"> Beyond the infinity</div>
      </div>
    </div>
  );
}

export default Intro;



