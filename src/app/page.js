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

export default function Home() {
  const { contactRef } = useContext(UserContext);
  const [cc, setCc] = useState([]);

  // Fetch Core Coordinators
  useEffect(() => {
    const coreCoordinators = Team["Third Year"].filter(
      (member) => member.Position === "CORE COORDINATOR"
    );
    setCc(coreCoordinators);
  }, []);



  const logoImgs = [
    { imgUrl: "/Assets/Homepage/t1.webp", altText: "React Bits Logo" },
    { imgUrl: "/Assets/Homepage/t1.webp", altText: "React Bits Logo" },
    { imgUrl: "/Assets/Homepage/t1.webp", altText: "React Bits Logo" },
    { imgUrl: "/Assets/Homepage/t1.webp", altText: "React Bits Logo" },
    { imgUrl: "/Assets/Homepage/t1.webp", altText: "React Bits Logo" },
    { imgUrl: "/Assets/Homepage/t1.webp", altText: "React Bits Logo" },
  ];

  return (
    <div className="overflow-x-hidden flex flex-col items-center gap-2">
      <Intro />
      <First />

      <div style={{ height: "600px", width: "100%", position: "relative" }}>
        <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="60s"
          bgColor="#060606"
          bgAccentColor="#111111"
        />
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
  );
}
