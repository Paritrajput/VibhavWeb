import React, { useEffect, useState } from "react";
import GradientText from '@/Components/ui/GradientText'
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import SocialHandles from "@/Components/ui/SocialHandle"
import {TextRevealCard} from '@/Components/ui/text-reveal'



function Intro() {

  return (
    <div className="h-screen w-screen text-white  pt-16 mb-16 mt-14 z-40">
      
    <div className="absolute opacity-0 md:opacity-100 z-10 right-0 bottom-0 mb-3 mr-3 bg-white rounded-lg">
    <SocialHandles/>
    </div>
      <div className="h-2/3 flex flex-col ">
        <div className="w-0 sm:w-auto image p-0 z-10 mx-auto opacity-0 absolute sm:right-40 sm:bottom-[125px] sm:opacity-90 flex items-center justify-center animate-spin-slow">
          <Image className="hover:border-white" src={'/Assets/video/balle.png'} width={360} height={360} />
        </div>
        {/* <SplashCursor /> */}
        <div className="absolute z-0 sm:left-[23%] opacity-55 ">
          <video src="/assets/video/aura.mp4" loop autoPlay muted height={screen}></video>
        </div>
        <div className="flex flex-col items-center mt-5 pt-5 ">
          <GradientText
            colors={["#0D0D0D", "#4169E1", "#4B0082","#FF00FF","#00CED1"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-7xl font-bold font-robotech mx-auto sm:text-9xl sm:ml-16"
          >
            TEAM
          </GradientText>
          <GradientText
            colors={["#0D0D0D", "#4169E1", "#4B0082","#FF00FF","#00CED1"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-8xl font-bold font-robotech mx-auto sm:text-9xl sm:ml-10"
          >
            VIBHAV
          </GradientText>
        </div>
        {/* <div className="text-3xl font-light relative p-5 mx-auto sm:text-7xl sm:ml-7">
          {" "}
          Beyond the infinity
        </div> */}
        <div className="text-6xl font-thin relative mx-auto mt-4 sm:text-5xl sm:ml-7"> 
        <TextRevealCard
        text="Beyond the Infinity"
        revealText="अनंत से भी आगे ! "
      />
        </div>
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
