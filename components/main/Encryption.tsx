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
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Image
                  src="/github-app.png"
                  alt="GitHub"
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
              </div>
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
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Image
                  src="/instagram-app.png"
                  alt="Instagram"
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
              </div>
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
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Image
                  src="/twitter-app.png"
                  alt="X"
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
              </div>
              <span className="text-white text-[10px] mt-2 font-roboto">X</span>
            </Link>

            {/* Whatsapp App */}
            <Link
              href="https://wa.me/96176000623"
              target="_blank"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Image
                  src="/wp-app.png"
                  alt="WhatsApp"
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
              </div>
              <span className="text-white text-[10px] mt-2 font-roboto">
                WhatsApp
              </span>
            </Link>

            {/* Projects App */}
            <Link
              href="#projects"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Image
                  src="/projects.png"
                  alt="Projects"
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
              </div>
              <span className="text-white text-[10px] mt-2 font-roboto">
                Projects
              </span>
            </Link>
            {/* LinkedIn App */}
            <Link
              href="https://www.linkedin.com/in/joe-ward-504718357/"
              target="_blank"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Image
                  src="/linkedin-app.png"
                  alt="LinkedIn"
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
              </div>
              <span className="text-white text-[10px] mt-2 font-roboto">
                LinkedIn
              </span>
            </Link>
            {/* Skills App */}
            <Link
              href="#skills"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Image
                  src="/skills.png"
                  alt="Skills"
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
              </div>
              <span className="text-white text-[10px] mt-2 font-roboto">
                Skills
              </span>
            </Link>
            {/* Youtube App */}
            <Link
              href="https://www.youtube.com/@wrd70z"
              target="_blank"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Image
                  src="/yt-app.png"
                  alt="Youtube"
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
              </div>
              <span className="text-white text-[10px] mt-2 font-roboto">
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
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Image
                  src="/aboutme.png"
                  alt="About Me"
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
              </div>
              <span className="text-white text-[10px] mt-2 font-roboto">
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
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Image
                  src="/tetris.png"
                  alt="Tetris"
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
              </div>
              <span className="text-white text-[10px] mt-2 font-roboto">
                Tetris
              </span>
            </Link>
            {/* MernAI App */}
            <Link
              href="https://github.com/joewrdd/AIWrdd"
              target="_blank"
              className="flex flex-col items-center group transition-transform duration-200 scale-120"
            >
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Image
                  src="/wrddai-app.png"
                  alt="MernAI"
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
              </div>
              <span className="text-white text-[10px] mt-2 font-roboto">
                MernAI
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[-25px] sm:bottom-[8px] md:bottom-[10px] px-[5px] w-full">
        <div className="cursive text-[16px] sm:text-[18px] md:text-[20px] font-medium text-center text-gray-300">
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
