"use client"
import { useEffect, useState } from 'react';
import WorkCard from '@/Components/Cards/WorkCard';
import workData from '@/Data/Work.json';
import ourWorkData from '@/Data/Ourwork.json';

export default function Home() {
  const [work, setWork] = useState([]);
  const [events, setEvents]=useState([])
  const [workshops, setWorkshops]=useState([])

  useEffect(() => {
    // Simulate fetching data
    setWork(ourWorkData.Previous);
    setEvents(ourWorkData.Previous.Events)
    setWorkshops(ourWorkData.Previous.Workshops)
  
  }, []);

  return (
    <div className="container text-center mx-auto mt-5 p-6">
      <h1 className="text-4xl font-extrabold mb-6">Our Work</h1>
      <div className='mb-3'>
      <div className='text-3xl font-bold my-5'>Previous Year Events</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {events.map((item, index) => (
          <WorkCard key={events.id} index={index} work={item} year="PreviousYear" type="Events" />
        ))}
      </div>
      </div>

      {/* Workshops Section */}
      <div className="mt-5 pt-7">
      <div className="text-3xl font-bold my-5">Previous Year Workshops</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {workshops.map((item, index) => (
          <WorkCard key={workshops.id} work={item} year="PreviousYear" type="Workshops" />
        ))}
      </div>
      </div>
    </div>
  );
}
