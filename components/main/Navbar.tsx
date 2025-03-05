"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface TabProps {
  children: string;
  setPosition: (position: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
}

const Tab = ({ children, setPosition }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer text-xs uppercase"
    >
      <a
        href={`#${children.toLowerCase().replace(/\s+/g, "-")}`}
        className="px-3 py-1.5 block"
      >
        {children}
      </a>
    </li>
  );
};

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-gradient-to-r from-[#2A0E61] to-black"
    />
  );
};

const Navbar = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/WRDD AI-2.png"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
            WrddX
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <ul
            onMouseLeave={() => {
              setPosition((pv) => ({
                ...pv,
                opacity: 0,
              }));
            }}
            className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 relative"
          >
            <Tab setPosition={setPosition}>About me</Tab>
            <Tab setPosition={setPosition}>Skills</Tab>
            <Tab setPosition={setPosition}>Projects</Tab>
            <Cursor position={position} />
          </ul>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
