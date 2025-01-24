"use client"
import { useEffect, useState } from 'react';
import WorkCard from '@/Components/Cards/WorkCard';
import workData from '@/Data/Work.json';

export default function Home() {
  const [work, setWork] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setWork(workData);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Our Work</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {work.map((item) => (
          <WorkCard key={item.id} work={item} />
        ))}
      </div>
    </div>
  );
}
