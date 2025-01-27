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
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default ProjectCard;
