"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function RocketLoader({ onAnimationComplete }: { onAnimationComplete: () => void }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFading(true);
    }, 3500); // Time when rocket reaches top
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      onAnimationComplete={onAnimationComplete}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: -800 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="relative"
      >
        <Image
          src="/ParthTailor.webp" // Replace with your rocket image
          width={150}
          height={150}
          alt="Rocket Loader"
          className="animate-pulse"
        />
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 h-32 w-10 bg-orange-500 opacity-70 blur-xl" />
      </motion.div>
    </motion.div>
  );
}
