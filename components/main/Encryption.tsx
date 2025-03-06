"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";
import AboutMeDialog from "../widgets/AboutMeDialog";
import TetrisDialog from "../widgets/TetrisDialog";

const Encryption = () => {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const [isTetrisOpen, setIsTetrisOpen] = useState(false);

  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full pt-120">
      <div className="flex flex-col items-center justify-center translate-y-[-40px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto relative">
          <Image
            src="/myphone.png"
            alt="Phone"
            width={500}
            height={500}
            className="z-10"
          />
          <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2 grid grid-cols-4 gap-12 z-20 w-[300px]">
            {/* GitHub App */}
            <Link
              href="https://github.com/joewrdd"
              target="_blank"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <Image
                src="https://skillicons.dev/icons?i=github"
                alt="GitHub"
                width={70}
                height={70}
                className="rounded-xl scale-125"
              />
              <span className="text-white text-[10px] mt-2 font-roboto">
                GitHub
              </span>
            </Link>

            {/* Instagram App */}
            <Link
              href="https://instagram.com/joewrdd"
              target="_blank"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <Image
                src="/egg.png"
                alt="Instagram"
                width={65}
                height={65}
                className="rounded-xl scale-150"
              />
              <span className="text-white text-[10px] mt-2 font-roboto">
                Instagram
              </span>
            </Link>

            {/* Twitter App */}
            <Link
              href="https://x.com/joewrdd"
              target="_blank"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <Image
                src="/xx.png"
                alt="X"
                width={70}
                height={70}
                className="rounded-xl scale-150"
              />
              <span className="text-white text-[10px] mt-2 font-roboto">X</span>
            </Link>

            {/* Whatsapp App */}
            <Link
              href="https://wa.me/96176000623"
              target="_blank"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <Image
                src="/wp.png"
                alt="WhatsApp"
                width={52}
                height={52}
                className="rounded-xl scale-125"
              />
              <span className="text-white text-[10px] mt-2 font-roboto">
                WhatsApp
              </span>
            </Link>

            {/* Projects App */}
            <Link
              href="#projects"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <Image
                src="/projects.png"
                alt="Projects"
                width={52}
                height={52}
                className="rounded-xl scale-125"
              />
              <span className="text-white text-[10px] mt-2 font-roboto">
                Projects
              </span>
            </Link>
            {/* LinkedIn App */}
            <Link
              href="https://www.linkedin.com/in/joe-ward-385901309/"
              target="_blank"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <Image
                src="/linkedinn-2.png"
                alt="LinkedIn"
                width={60}
                height={60}
                className="rounded-xl scale-125"
              />
              <span className="text-white text-[10px] mt-2 font-roboto">
                LinkedIn
              </span>
            </Link>
            {/* Skills App */}
            <Link
              href="#skills"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <Image
                src="/skills.png"
                alt="Skills"
                width={55}
                height={55}
                className="rounded-xl scale-125"
              />
              <span className="text-white text-[10px] mt-2.5 font-roboto">
                Skills
              </span>
            </Link>
            {/* Youtube App */}
            <Link
              href="https://www.youtube.com/@wrd70z"
              target="_blank"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <Image
                src="/youtubee.png"
                alt="Youtube"
                width={60}
                height={60}
                className="rounded-xl scale-125"
              />
              <span className="text-white text-[10px] mt-2.5 font-roboto">
                Youtube
              </span>
            </Link>
            {/* About Me App */}
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsAboutMeOpen(true);
              }}
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <Image
                src="/aboutme.png"
                alt="About Me"
                width={55}
                height={55}
                className="rounded-xl scale-125"
              />
              <span className="text-white text-[10px] mt-2.5 font-roboto">
                About
              </span>
            </Link>
            {/* Tetris App */}
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsTetrisOpen(true);
              }}
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <Image
                src="/tetris.png"
                alt="Tetris"
                width={55}
                height={55}
                className="rounded-xl scale-125"
              />
              <span className="text-white text-[10px] mt-2.5 font-roboto">
                Tetris
              </span>
            </Link>
            {/* MernAI App */}
            <Link
              href="https://github.com/joewrdd/AIWrdd-MERN"
              target="_blank"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <Image
                src="/mermaid.png"
                alt="MernAI"
                width={55}
                height={55}
                className="rounded-xl scale-125"
              />
              <span className="text-white text-[10px] mt-2.5 font-roboto">
                MernAI
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          私はジョー・ワード、フルスタックフラッター開発者です
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>

      <AboutMeDialog
        isOpen={isAboutMeOpen}
        onClose={() => setIsAboutMeOpen(false)}
      />
      <TetrisDialog
        isOpen={isTetrisOpen}
        onClose={() => setIsTetrisOpen(false)}
      />
    </div>
  );
};

export default Encryption;
