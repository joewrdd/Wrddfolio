import React from "react";
import ProjectCard from "../widgets/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white py-20 font-orbitron">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
        <ProjectCard
          src="/1.png"
          link="https://youtube.com/shorts/AlmUSEHlNxs?si=x8CIEV-34P-Zx5wW"
          title="Kirito Flutter"
          description="A Web3-themed wallet where users can create a portfolio wallet, track live cryptocurrency price changes, stay updated with live cryptocurrency news, and search for any cryptocurrency they admire—all within a fun, pixelated interface using Flutter. Users can also play a PVP XO game and place bets using their credit. Crypto news is fetched from CoinGeckoNews API."
          skills={["Flutter", "Dart", "CoinGeckoNews", "Web3API"]}
        />
        <ProjectCard
          src="/2.png"
          link="https://youtube.com/shorts/2Aa40WlWTU8?si=u5ot-gJwZd7LVK5Q"
          title="WrddWallet Flutter"
          description="A Web3-themed wallet that allows users to create and import wallets using a seed phrase, secured with the Moralis API. Features a beautifully themed UI built with Flutter. Section for NFTs, Tokens, Crypto, Wallet Balance, and Transaction History. Web3 is the future of the world and this wallet app is the best way to start my journey in the Web3 world. "
          skills={["Flutter", "Dart", "Moralis", "Web3API"]}
        />
        <ProjectCard
          src="/3.png"
          link="https://youtube.com/shorts/uiFwAOrMZWg?si=3Ab-B0AxqnkBaFxZ"
          title="HyperCar Club"
          description="A Hypercar Showcase Club where users can browse hypercars and manufacturers, view individual car details such as speed, price, horsepower, and fuel type, and add or remove cars from their favorites. Includes a live chat box where car enthusiasts can connect and discuss cars. Users can also take on a challenging quiz to test their knowledge of hypercars."
          skills={["Flutter", "Dart", "Fire base"]}
        />
        <ProjectCard
          src="/4.png"
          link="https://youtube.com/shorts/IUnKFGLb22E?si=6tBCe5Nf43w3p9Hb"
          title="AI Buddy"
          description="An AI-powered buddy using Gemini AI, where users can chat with the bot about various topics, similar to ChatGPT. Additionally, users can upload images and PDFs for summarization and explanation. For users to login, they need to provide a private Gemini API Key that can be provided from their official website when you sign up for a free account."
          skills={["Flutter", "Dart", "Gemini", "Hive"]}
        />
      </div>
    </div>
  );
};

export default Projects;
