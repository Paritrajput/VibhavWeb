"use client"
import { useEffect, useState } from 'react';
import WorkCard from '@/Components/Cards/WorkCard';
import workData from '@/Data/Work.json';
import ourWorkData from '@/Data/Ourwork.json';
import { SparklesCore } from "@/Components/ui/sparkles";

export default function Home() {
  const [work, setWork] = useState([]);
  const [events, setEvents]=useState([])
  const [workshops, setWorkshops]=useState([])

  useEffect(() => {
    // Simulate fetching data
    setWork(ourWorkData.Current);
    setEvents(ourWorkData.Current.Events)
    setWorkshops(ourWorkData.Current.Workshops)
  
  }, []);

  return (
    <div className="container text-center mx-auto mt-12 p-2">
   
      <div className="h-[10rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-2xl lg:text-4xl font-bold text-center text-white relative z-20">
      Current Year Work
      </h1>
      <div className="w-[40rem] h-28 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      <div>
      
      {/* <div className='text-3xl font-bold my-5 p-5'>Current Year Events</div> */}

      <div className='text-3xl text-center '>Comming Soon ...</div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {events.map((item, index) => (
          <WorkCard key={events.id} index={index} work={item} year="CurrentYear" type="Events" />
        ))}
      </div> */}
      </div>
      {/* <div className='mt-16'>

      <div className="text-3xl font-bold my-5 p-5">Current Year Workshops</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {workshops.map((item, index) => (
          <WorkCard key={workshops.id} work={item} year="CurrentYear" type="Workshops" />
        ))}
      </div>
      </div> */}
    </div>
  );
}
