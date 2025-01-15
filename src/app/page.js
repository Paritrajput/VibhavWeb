"use client";
import Faq from "../Components/Faq/Faq";
import Contact from "../Components/Contact/Contact";
import First from "../Components/Main/First/First";
import { UserContext } from "@/Context/UserContext/UserContext";
import { useContext } from "react";
import Intro from "../Components/IntroSection/Intro";

export default function Home() {
  const { contactRef } = useContext(UserContext);
  return (
    <div className="overflow-x-hidden   flex flex-col items-center ">
      <Intro />
      <First />
      <Faq />
      <Contact ref={contactRef} />
    </div>
  );
}
