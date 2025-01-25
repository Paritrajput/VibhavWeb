"use client";
import React, { useState } from "react";
import { HomeButton, HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0 h-16" />
    
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const pathname = usePathname();
  return (
    <div
      className={cn("fixed top-2 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* <Link
          setActive={false}
          active={active}
          href="/"
          className={`${
            pathname === "/" ? "text-white font-bold " : "text-gray-400"
          } hover:text-white `}
        >
          Home
        </Link> */}
        <HomeButton href="/" setActive={setActive} />

        <MenuItem setActive={setActive} active={active} item="Projects" className="hover:text-white">
          <div className="grid grid-cols-3 gap-4 space-y-4 text-sm p-3">
            <HoveredLink href="/Projects/aiml">AI/ML</HoveredLink>
            <HoveredLink href="/Projects/arvr">AR/VR</HoveredLink>
            <HoveredLink href="/Projects/iot">IOT</HoveredLink>
            <HoveredLink href="/Projects/dsp">DSP</HoveredLink>
            <HoveredLink href="/Projects/embedded">
              EMBEDDED SYSTEMS
            </HoveredLink>
            <HoveredLink href="/Projects/quantumC">
              QUANTUM COMPUTING
            </HoveredLink>
          </div>
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Work">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Work/CurrentYear">Current Year</HoveredLink>
            <HoveredLink href="/Work/PreviousYear">Previous Year</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Team">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Team/CurrentTeam">Current Team</HoveredLink>
            <HoveredLink href="/Team/Alumni">Alumni</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
