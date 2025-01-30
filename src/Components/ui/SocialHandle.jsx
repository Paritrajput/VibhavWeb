import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function SocialHandle() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleIcons, setVisibleIcons] = useState(5); // Initially, all 5 icons visible

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setVisibleIcons(5); // Show all icons when near top
      } else if (currentScrollY < 200) {
        setVisibleIcons(4);
      } else if (currentScrollY < 300) {
        setVisibleIcons(3);
      } else if (currentScrollY < 400) {
        setVisibleIcons(2);
      } else if (currentScrollY < 500) {
        setVisibleIcons(1);
      } else {
        setVisibleIcons(0); // Hide completely after 500px scroll
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const icons = [
    { src: "/Assets/icons/github.png", href: "", alt: "GitHub" },
    { src: "/Assets/icons/facebook.png", href: "", alt: "Facebook" },
    { src: "/Assets/icons/discord.png", href: "", alt: "Discord" },
    { src: "/Assets/icons/instagram.png", href: "", alt: "Instagram" },
    { src: "/Assets/icons/linkedin.png", href: "", alt: "LinkedIn" },
  ];

  return (
    <div
      className={`static right-5 top-1/3  transition-all duration-500 ${
        visibleIcons === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        height: `${visibleIcons * 44}px`, // Adjust height dynamically
        overflow: "hidden",
      }}
    >
      <ul className="flex flex-col gap-2 items-center p-1 transition-all duration-300">
        {icons.slice(0, visibleIcons).map((icon, index) => (
          <li key={index}>
            <Link href="#">
              <Image src={icon.src} width={35} height={35} alt={icon.alt} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialHandle;
