"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Projects() {
  const [content,setcontent]=useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe amet qui quas officiis quisquam soluta ullam quia minima voluptatem fugiat mollitia dolorum consectetur ipsum, doloremque molestias est quasi quo rerum in excepturi reiciendis illum. Nobis autem, ullam rerum eveniet impedit molestiae ex hic neque voluptatibus et odit illum suscipit nesciunt maiores explicabo amet.");
  const [display,setdisplay]=useState(content.slice(0,100).concat("..."));
  const [button,setbutton]=useState("Read more");
  const contentCheck=()=>{
    console.log("button is clicked")
    if(button==="Read more"){
      setdisplay(content);
      setbutton("Read Less");
    }else{
      setdisplay(content.slice(0,100).concat("..."));
      setbutton("Read more");
    }
  }

  return (
  <div className="project m-6 w-[80%] mx-auto ">
    <div className="heading text-5xl font-bold text-center mb-4">Projects</div>
 
  </div>
  )
}

export default Projects;