"use client"
import { useEffect, useState } from "react";
import WorkCard, {SkeletonWorkCard} from "@/Components/Cards/WorkCard";

import ourWorkData from "@/Data/Ourwork.json";
// import { SparklesCore } from "@/Components/ui/sparkles";



export default function Home() {
 
  const [events, setEvents] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {

    setTimeout(() => {
      
      setEvents(ourWorkData.Previous.Events);
      setWorkshops(ourWorkData.Previous.Workshops);
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="container relative text-center mx-auto mt-0 p-1 pt-32" >
      <h1 className="text-3xl font-extrabold">Our Work</h1>


     
      <div className="mb-3 md:p-5 xl:p-10">
        <div className="text-3xl font-bold pb-5 mb-5">Previous Year Events</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-sm:gap-10 px-0">
          {isLoading
            ? Array.from({ length: 2 }).map((_, index) => <SkeletonWorkCard key={index} />)
            : events.map((item, index) => (
                <WorkCard key={item.id} index={index} work={item} year="PreviousYear" type="Events" />
              ))}
        </div>
      </div>

    
      <div className="mt-7 mb-4 pt-7 md:p-5 xl:p-10">
        <div className="text-3xl font-bold pb-5">Previous Year Workshops</div>
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
