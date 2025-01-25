"use client"
import { useEffect, useState } from 'react';
import ProjectCard from '@/Components/Cards/ProjectCard';
import projects from '@/Data/Projects.json';



const Page = () => {
  return (
    <div className='mt-12 text-center'>
      <div className='text-4xl text-white text-center font-extrabold mb-5'>Projects</div>
      <span className='text-3xl text-white text-center mt-12 font-bold'>IOT</span>
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects["IoT"].map((project, index) => (
  <ProjectCard key={index} project={project} />
))}
    </div>
    </div>
  );
};

export default Page;


