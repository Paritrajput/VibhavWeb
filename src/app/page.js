"use client";
import Faq from "../Components/Faq/Faq";
import Contact from "../Components/Contact/Contact";
import First from "../Components/Main/First/First";
import { UserContext } from "@/Context/UserContext/UserContext";
import { useContext, useEffect, useState } from "react";
import Intro from "../Components/IntroSection/Intro";
import LogoWall from "@/Components/ui/Logowall";
import Team from "@/Data/Team.json";
import ProfileCard from "@/Components/Cards/ProfileCard";
import Loader from "@/Components/ui/RocketLoader";

// import Cards  from "@/Components/Cards/test"


export default function Home() {
  const { contactRef } = useContext(UserContext);
  const [cc, setCc] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  

  // Fetch Core Coordinators
  useEffect(() => {
    const coreCoordinators = Team["Third Year"].filter(
      (member) => member.Position === "CORE COORDINATOR"
    );
    setCc(coreCoordinators);
  }, []);



  const logoImgs = [
    { imgUrl: '/Assets/Homepage/t1.webp', altText: "React Bits Logo" },
    { imgUrl: '/Assets/Homepage/t2.webp', altText: "React Bits Logo" },
    { imgUrl: '/Assets/Homepage/t3.webp', altText: "React Bits Logo" },
    { imgUrl: '/Assets/Homepage/t4.webp', altText: "React Bits Logo" },
    { imgUrl: '/Assets/Homepage/t5.webp', altText: "React Bits Logo" },
    { imgUrl: '/Assets/Homepage/t6.webp', altText: "React Bits Logo" },
  ];
 

  useEffect(() => {
    // Simulating a delay (e.g., fetching data, images, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000); // Change time as per your requirement (2000ms = 2s)

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    
    <div className="overflow-x-hidden flex flex-col items-center gap-2">

   
    <div className="overflow-x-hidden flex flex-col items-center gap-2">
            {/* <video
        className="fixed top-0 left-0 w-screen h-screen object-cover "
        src="/Assets/video/WhatsApp Video 2025-01-26 at 16.20.59_302f2ed0.mp4" // Replace with your video file path
        autoPlay
        loop
        muted
      /> */}
       

      <Intro />
      <First />
      <div style={{ width: '100%', position: 'relative' }}>
      <div className="flex flex-col items-center mb-4">
      <h6 className="mx-auto sm:text-5xl text-3xl mt-10 p-7 pb-1 font-bold text-center">REFLECTING ON THE JOURNEY</h6>
      <h6 className="pl-4 pr-4 mx-auto sm:opacity-100 sm:mx-auto sm:text-2xl sm:pl-7 sm:pt-0 text-center sm:mb-11">A glimpse into our team's past adventures, memories that shape our present.</h6>
      {/* </div>
        {/* <div className="text"></div> */}
        <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size='clamp(8rem, 1rem + 20vmin, 25rem)'
          duration='60s'
          bgColor='#060606'
          bgAccentColor='#111111'
        /></div>
      </div>

      <div className="mt-12  ">
        <h1 className="sm:text-4xl text-2xl  text-center font-extrabold mt-10">Core Coordinators</h1>
        <div className="flex  flex-wrap gap-24 pt-7 mt-4">
          {cc.map((member, index) => (
            <ProfileCard 
            key={index} name={member.Name}
            position={member.Position}
            profileImg={member.Profile}
            backgroundImg={member.Profile}/>
            
          ))}
        </div>
      </div>

      <Faq />
      <Contact ref={contactRef} />
    </div>
       
    </div>
  );
}
