"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {Popup} from '@/Components/ProjectPopUp/ProjectPopUp';

export const SkeletonProjectCard = () => {
  return (
    <motion.div
      className="relative bg-gray-300 animate-pulse rounded-lg shadow-lg overflow-hidden group"
      style={{ height: "300px" }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Skeleton for card image */}
      <div className="absolute inset-0 bg-gray-400"></div>

      {/* Skeleton for text content */}
      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-gray-500 to-transparent">
        <div className="h-6 w-3/4 bg-gray-500 rounded mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-500 rounded"></div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      {/* Card */}
      <motion.div
        className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl"
        style={{ backgroundImage: `url(${project.images})`, height: "300px" }}
        whileHover={{ scale: 1.05 }}
        onClick={openPopup}
      >
        <div className="w-full flex justify-end p-2 ">
          <div className="hover:scale-105">
        <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 448 512" class="text-white text-2xl transform hover:scale-150 duration-300" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"></path></svg>
        </div>
        </div>
        <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
          <h2 className="text-xl font-bold">{project.name}</h2>
          {/* <p className="text-sm">{project.shortDescription}</p> */}
        </div>
      </motion.div>

      {/* Popup */}
      {isPopupOpen && (
        <Popup
          title={project.name}
          description={project.content}
          image={project.images}
          github={project.github||""}
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default ProjectCard;
