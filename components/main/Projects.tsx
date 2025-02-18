import React from "react";
import ProjectCard from "../widgets/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
        <ProjectCard
          src="/1.png"
          title="Kirito Flutter"
          description="A Web3-themed wallet where users can create a portfolio wallet, track live cryptocurrency price changes, stay updated with live cryptocurrency news, and search for any cryptocurrency they admire—all within a fun, pixelated interface using Flutter. Users can also play a PVP XO game and place bets using their credit."
        />
        <ProjectCard
          src="/2.png"
          title="WrddWallet Flutter"
          description="A Web3-themed wallet that allows users to create and import wallets using a seed phrase, secured with the Moralis API. Features a beautifully themed UI built with Flutter."
        />
        <ProjectCard
          src="/3.png"
          title="HyperCar Club"
          description="A Hypercar Showcase Club where users can browse hypercars and manufacturers, view individual car details such as speed, price, horsepower, and fuel type, and add or remove cars from their favorites. Includes a live chat box where car enthusiasts can connect and discuss cars. Users can also take on a challenging quiz to test their knowledge of hypercars."
        />
        <ProjectCard
          src="/4.png"
          title="AI Buddy"
          description="An AI-powered buddy using Gemini AI, where users can chat with the bot about various topics, similar to ChatGPT. Additionally, users can upload images and PDFs for summarization and explanation."
        />
      </div>
    </div>
  );
};

export default Projects;
