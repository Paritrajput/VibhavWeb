"use client";
import Faq from "../Components/Faq/Faq";
import Contact from "../Components/Contact/Contact";
import First from "../Components/Main/First/First"
import { UserContext } from "@/Context/UserContext/UserContext";
import { useContext } from "react";
import Intro from "../Components/IntroSection/Intro";
import RollingGallery from '@/Components/ui/RollingGallery'
import { Video } from "lucide-react";



export default function Home() {
  const { contactRef } = useContext(UserContext);
  return (
    <div className="overflow-x-hidden flex flex-col items-center gap-2">
  
      <Intro />
      <First />
      {/* <div style={{ height: '600px', width: '100%', position: 'relative' }}>
        <div className="text"></div>
        <LogoWall
          items={logoImgs}
          direction='horizontal'
          pauseOnHover={true}
          size='clamp(8rem, 1rem + 20vmin, 25rem)'
          duration='60s'
          bgColor='#060606'
          bgAccentColor='#111111'
        />
      </div> */}
      <div className="flex flex-col items-center">
      <h6 className="mx-auto sm:text-5xl text-3xl mt-10 p-7 pb-1 font-bold text-center">REFLECTING ON THE JOURNEY</h6>
      <h6 className="pl-4 pr-4 mx-auto sm:opacity-100 sm:mx-auto sm:text-2xl sm:pl-7 sm:pt-0 text-center">A glimpse into our team's past adventures, memories that shape our present.</h6>
      </div>

      <div className="gallery">
        <RollingGallery autoplay={true} pauseOnHover={false} className='w-[100%]' />
      </div>
      <Faq />
      <Contact ref={contactRef} />

    </div>
  );
}




