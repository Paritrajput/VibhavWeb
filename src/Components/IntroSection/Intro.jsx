import React, { useEffect, useState } from "react";
import GradientText from '@/Components/ui/GradientText'
import SplashCursor from "../ui/SplashCursor"
import Navbar from "../Navbar/Navbar";
import Image from "next/image";





function Intro() {
  return (
    <div className="h-screen w-screen text-white  pt-16 mb-16 mt-14">
      <div className="h-2/3 flex flex-col ">
        <div className="image mx-auto opacity-30 top-36 absolute sm:right-40 sm:bottom-36 animate-spin-slow hover:animate-spin sm:opacity-100">
          <Image className="hover:border-white" src={'/Assets/Events/—Pngtree—light effect technology 6g starlight_7511477.png'} width={380} height={380}/>
        </div>
        <SplashCursor />
        <div className="flex flex-col items-center mt-5 pt-5 ">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-6xl font-bold font-\[Arkhip\] mx-auto sm:text-9xl sm:ml-5"
          >
            Team 
          </GradientText>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-6xl font-bold font-\[Arkhip\] mx-auto sm:text-9xl sm:ml-5"
          >
            Vibhav
          </GradientText>
        </div>
        <div className="text-3xl font-light relative p-5 mx-auto sm:text-7xl sm:ml-7"> Beyond the infinity</div>
      </div>
    </div>
  );
}

export default Intro;



