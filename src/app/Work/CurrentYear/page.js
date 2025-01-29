"use client"
import { useEffect, useState } from "react";
import WorkCard, {SkeletonWorkCard} from "@/Components/Cards/WorkCard";

import ourWorkData from "@/Data/Ourwork.json";
import { SparklesCore } from "@/Components/ui/sparkles";



export default function Home() {
 
  const [events, setEvents] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  

  useEffect(() => {

    setTimeout(() => {
      
      setEvents(ourWorkData.Current.Events);
      setWorkshops(ourWorkData.Current.Workshops);
      setIsLoading(false);
    }, 500);
  }, []);
  

  return (
    <div className="container text-center mx-auto mt-0 p-1">
    
      {/* <div className="h-[10rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-4xl text-2xl lg:text-4xl font-bold text-center text-white relative z-20">
          Our Work
        </h1>
        <div className="w-[40rem] h-20 relative">
          
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div> */}
      <h1 className="text-3xl font-extrabold">Our Work</h1>

     
      <div className="mb-3 md:p-5 xl:p-10">
        <div className="text-3xl font-bold pb-5 mb-5">Current Year Events</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-sm:gap-10 px-0">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => <SkeletonWorkCard key={index} />)
            : events.map((item, index) => (
                <WorkCard key={item.id} index={index} work={item} year="PreviousYear" type="Events" />
              ))}
        </div>
      </div>

    
      <div className="mt-7 mb-4 pt-7 md:p-5 xl:p-10">
        <div className="text-3xl font-bold pb-5">Current Year Workshops</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-sm:gap-10 mt-5">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => <SkeletonWorkCard key={index} />)
            : workshops.map((item, index) => (
                <WorkCard key={item.id} work={item} year="PreviousYear" type="Workshops" />
              ))}
        </div>
      </div>
    </div>
  );
}
