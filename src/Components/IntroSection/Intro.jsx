import React, { useEffect, useState } from "react";
import GradientText from '@/Components/ui/GradientText'
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import SocialHandles from "@/Components/ui/SocialHandle"






function Intro() {

  return (
    <div className="h-screen w-screen text-white  pt-16 mb-16 mt-14 z-40">
      
    <div className="absolute opacity-0 md:opacity-100 right-0 bottom-0 mb-3 mr-3 bg-white rounded-lg">
    <SocialHandles/>
    </div>
      <div className="h-2/3 flex flex-col ">
        <div className="image p-0 mx-auto opacity-0 absolute sm:right-60 sm:bottom-24 sm:opacity-100 flex items-center justify-center animate-spin-slow">
          <Image className="hover:border-white" src={'/Assets/video/balle.png'} width={360} height={360} alt="Ball"/>
        {/* <SplashCursor /> */}
        </div>
        <div className="flex flex-col items-center mt-5 sm:ml-5 sm:mt-0 ">
          <GradientText
            colors={["#0D0D0D", "#4169E1", "#4B0082","#FF00FF","#FFD700","#00CED1"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-6xl font-bold font-robotech mx-auto sm:text-9xl sm:ml-5"
          >
            TEAM
          </GradientText>
          <GradientText
            colors={["#0D0D0D", "#4169E1", "#4B0082","#FF00FF","#FFD700","#00CED1"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-6xl font-bold font-robotech mx-auto sm:text-9xl sm:ml-5"
          >
           VIBHAV
          </GradientText>

        </div>
        <div className="text-3xl font-light font-robotech relative p-5 mx-auto ml-10 sm:text-7xl sm:ml-7"> Beyond the infinity</div>
        {/* <div className="flex items-center justify-center h-[35rem] w-full">
              <FloatingDock
                desktopClassName="translate-y-20"
                items={links} />
       </div> */}
      </div>
    </div>
  );
}

export default Intro;



