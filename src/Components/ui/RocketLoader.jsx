"use client";
import { useState, useEffect } from "react";

const fonts = [
  "Arial, sans-serif",
  "Georgia, serif",
  "Courier New, monospace",
  "Lucida Console, monospace",
  "Times New Roman, serif",
  "Verdana, sans-serif",
  "Comic Sans MS, cursive",
  "Impact, sans-serif",
];

const AnimatedText = ({ text }) => {
  const [fontStyles, setFontStyles] = useState([]);

  useEffect(() => {
    const changeFonts = () => {
      setFontStyles(
        text
          .split("")
          .map(() => fonts[Math.floor(Math.random() * fonts.length)])
      );
    };

    changeFonts();
    const interval = setInterval(changeFonts, 250);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex space-x-1 text-4xl font-bold text-white">
      {text.split("").map((char, index) => (
        <span key={index} style={{ fontFamily: fontStyles[index] }}>
          {char}
        </span>
      ))}
    </div>
  );
};

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000); // Loader disappears after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return visible ? (
    <div className="fixed h-screen w-screen inset-0 flex items-center justify-center bg-black text-white backdrop-blur-sm blur-[1px]">
      <AnimatedText text="Team Vibhav" />
    </div>
  ) : null;
};

export default Loader;
