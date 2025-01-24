"use client"
import { useEffect, useState } from 'react';
import ProjectCard from '@/Components/Cards/ProjectCard';
import projects from '@/Data/Projects.json';



const Page = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Page;


