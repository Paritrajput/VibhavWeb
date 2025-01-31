import React, { useEffect, useState } from "react";
import GradientText from '@/Components/ui/GradientText'
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import SocialHandles from "@/Components/ui/SocialHandle"
import { TextRevealCard } from '@/Components/ui/text-reveal'
import { px } from "framer-motion";
import { motion } from "framer-motion";



function Intro() {

  return (
    <div className=" text-white  pt-16 mb-16 mt-14 z-5 overflow-hidden">
      <div className="absolute h-screen w-screen top-0 overflow-hidden inset-0">
        <motion.img src="assets/video/background.jpg" 
        className="overflow-hidden w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] object-cover" 
        alt="Background"
        initial={{ filter: "brightness(50%)" }}
        animate={{ filter: ["brightness(50%)", "brightness(120%)", "brightness(50%)"] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      
      <div className="h-2/3 flex flex-col ">
        {/* <div className="w-0 sm:w-auto image p-0 z-10 mx-auto opacity-0 absolute sm:right-40 sm:bottom-[125px] sm:opacity-90 flex items-center justify-center animate-spin-slow">
          <Image className="hover:border-white" src={'/Assets/video/balle.png'} width={360} height={360} />
        </div> */}
        {/* <SplashCursor /> */}
        {/* <div className="absolute z-0 sm:left-[10%] top-0 opacity-55 ">
          <video src="/assets/video/aura.mp4" loop autoPlay muted className="h-screen"></video>
        </div> */}
        <div className="flex flex-col text-center items-center justify-center relative">
          <GradientText
            colors={["#00FF00", "#8A2BE2" ,"#00FF7F","#00FFFF"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-4xl font-bold font-batman sm:text-9xl mt-40 sm:ml-16"
          >
            TEAM Vibhav
          </GradientText>

          <TextRevealCard
            text="Beyond the Infinity"
            revealText="अनंत से भी आगे ! "
            className={'text-6xl font-thin relative w-fit sm:text-5xl sm:ml-7'}
          />
          <div className="flex flex-wrap z-10 gap-3 m-5">
          <Image src={'/assets/icons/star.png'} width={32} height={32}></Image>
          <Image src={'/assets/icons/star.png'} width={32} height={32}></Image>
          <Image src={'/assets/icons/star.png'} width={32} height={32}></Image>
          <Image src={'/assets/icons/star.png'} width={32} height={32}></Image>
          <Image src={'/assets/icons/star.png'} width={32} height={32} className="animate-fade-in"></Image>
          </div>
          <SocialHandles />
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
