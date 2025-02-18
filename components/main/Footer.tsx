"use client";

import React from "react";
import { RxDiscordLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      name: "Youtube",
      icon: <FaYoutube size={20} />,
      link: "https://youtube.com/@wrd70z",
    },
    {
      name: "Github",
      icon: <RxGithubLogo size={20} />,
      link: "https://github.com/joewrdd",
    },
    {
      name: "Discord",
      icon: <RxDiscordLogo size={20} />,
      link: "https://discord.com/users/1304563130583482511",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
      link: "https://instagram.com/joewrdd",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter size={20} />,
      link: "https://x.com/joewrdd",
    },
    {
      name: "LinkedIn",
      icon: <RxLinkedinLogo size={20} />,
      link: "https://linkedin.com/in/joe-ward-385901309/",
    },
  ];

  return (
    <footer className="relative w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[50]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] mb-4">Community</div>
            {socialLinks.slice(0, 3).map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 py-3 px-4 w-full justify-center text-gray-200 hover:text-[#b249f8] transition-all duration-200 z-[51]"
              >
                <div className="flex items-center gap-2 relative z-[52]">
                  {social.icon}
                  <span className="text-[15px]">{social.name}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] mb-4">Social Media</div>
            {socialLinks.slice(3).map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 py-3 px-4 w-full justify-center text-gray-200 hover:text-[#b249f8] transition-all duration-200 z-[51]"
              >
                <div className="flex items-center gap-2 relative z-[52]">
                  {social.icon}
                  <span className="text-[15px]">{social.name}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] mb-4">About</div>
            <a
              href="#"
              className="relative py-3 px-4 w-full text-center text-gray-200 hover:text-[#b249f8] transition-all duration-200 z-[51]"
            >
              <span className="text-[15px]">Become A Part Of The Team</span>
            </a>
            <a
              href="#"
              className="relative py-3 px-4 w-full text-center text-gray-200 hover:text-[#b249f8] transition-all duration-200 z-[51]"
            >
              <span className="text-[15px]">Learning About WrddX</span>
            </a>
            <a
              href="mailto:joewrdd@gmail.com"
              className="relative py-3 px-4 w-full text-center text-gray-200 hover:text-[#b249f8] transition-all duration-200 z-[51]"
            >
              <span className="text-[15px]">joewrdd@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center mt-8">
          &copy; WrddX 2025 Inc. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
