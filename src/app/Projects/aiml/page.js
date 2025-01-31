"use client";
import { useEffect, useState } from "react";
import ProjectCard, {SkeletonProjectCard} from "@/Components/Cards/ProjectCard";
import projects from "@/Data/Projects.json";



const Page = () => {
  const [loading , setLoading]=useState(true)
const [projectList, setProjectList]=useState([])
useEffect(()=>{
  
  setProjectList(projects["AI/ML"])
  setTimeout(()=>{setLoading(false)},500)
  
})

  return (
    <div className="pt-12 bg-black/50 text-center z-50">
      <div className="text-4xl text-white text-center font-extrabold mb-5 z-50">
        Projects
      </div>
      <span className="text-3xl text-white text-center mt-12 font-bold z-50">
        AI-ML
      </span>
      <div className="container mx-auto  p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {loading? Array.from({ length: projectList.length || 6 }).map((projectSkelatol, index)=>(<SkeletonProjectCard key={index}/> )) :projectList.map((project, index) => (
          <ProjectCard key={index} project={project}  />
        ))}
      </div>
    </div>
  );
};

export default Page;
