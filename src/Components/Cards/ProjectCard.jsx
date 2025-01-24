"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {Popup} from '@/Components/ProjectPopUp/ProjectPopUp';

const ProjectCard = ({ project }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      {/* Card */}
      <motion.div
        className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl"
        style={{ backgroundImage: `url(${project.image})`, height: "300px" }}
        whileHover={{ scale: 1.05 }}
        onClick={openPopup}
      >
        <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="text-sm">{project.shortDescription}</p>
        </div>
      </motion.div>

      {/* Popup */}
      {isPopupOpen && (
        <Popup
          title={project.title}
          description={project.fullDescription}
          image={project.image}
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default ProjectCard;
