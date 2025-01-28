import React, { useEffect, useState } from "react";
import GradientText from '@/Components/ui/GradientText'
import SplashCursor from "../ui/SplashCursor"
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import { Orbitron, Michroma } from "next/font/google";
import FloatingDockDemo from '@/Components/ui/FloatingDock'





function Intro() {
  return (
    <div className="h-screen w-screen text-white  pt-16 mb-16 mt-14 z-40">

      <div className="h-2/3 flex flex-col ">
        <div className="image p-0 mx-auto opacity-0 absolute sm:right-60 sm:bottom-11 sm:opacity-100 flex items-center justify-center">
          <Image className="hover:border-white" src={'/Assets/video/pngegg.png'} width={240} height={330} />
        </div>
        {/* <SplashCursor /> */}
        <div className="flex flex-col items-center mt-5 pt-5 ">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-6xl font-bold font-robotech mx-auto sm:text-9xl sm:ml-5"
          >
            TEAM
          </GradientText>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-6xl font-bold font-robotech mx-auto sm:text-9xl sm:ml-5"
          >
           VIBHAV
          </GradientText>

        </div>
        <div className="text-3xl font-light relative p-5 mx-auto sm:text-7xl sm:ml-7"> Beyond the infinity</div>
        {/* <FloatingDockDemo/> */}
      </div>
    </div>
  );
}

export default Intro;



