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
          src="/jukyomall.png"
          link="https://youtube.com/shorts/kTMkjgB8FL8?"
          title="JukyoMall MS"
          description="A modern and feature-rich e-commerce mobile application built with Flutter and Firebase, offering a seamless shopping experience with robust user management and product handling capabilities. Users can browse products, add them to their cart, and place orders. Admins (Coming Soon) can manage products, orders, and users, and view sales analytics."
          skills={["Flutter", "Dart", "Fire base"]}
        />
        <ProjectCard
          src="/6.png"
          link="https://www.youtube.com/watch?v=Kxwv9YltdiU"
          title="Otaku Wrdd"
          description="OtakuWrdd an anime and manga tracking application built with Flutter and Firebase, offering users a seamless experience to discover, track, and manage their anime and manga collections. All data is fetched by Anime & Manga specific API's, and users can also search for any anime or manga they want by just a click of a button. Otaku Wrdd -_-"
          skills={["Flutter", "Dart", "Fire base"]}
        />
        <ProjectCard
          src="/5.png"
          link="https://youtube.com/shorts/jx3vP4s0-Ew?si=DKR8xHz8_3r9g8rA"
          title="Riwaya."
          description="Riwaya is a modern coffee shop mobile app built with Flutter that offers a seamless ordering experience. The app features an elegant UI with curved animations, intuitive product browsing across categories, detailed customization options, and a smooth checkout process. Users can earn & collect points which result in earning rewards, all while enjoying a premium coffee-ordering experience."
          skills={["Flutter", "Dart", "Fire base"]}
        />
        <ProjectCard
          src="/2.png"
          link="https://youtube.com/shorts/2Aa40WlWTU8?si=u5ot-gJwZd7LVK5Q"
          title="WrddWallet Flutter"
          description="A Web3-themed wallet that allows users to create and import wallets using a seed phrase, secured with the Moralis API. Features a beautifully themed UI built with Flutter. Section for NFTs, Tokens, Crypto, Wallet Balance, and Transaction History. Web3 is the future of the world and this wallet app is the best way to start my journey in the Web3 world. "
          skills={["Flutter", "Dart", "Moralis", "Web3API"]}
        />
        <ProjectCard
          src="/9.png"
          link="https://github.com/joewrdd/PokemonPokedex"
          title="Pokémon Pokédex"
          description="A modern Pokédex application that combines Flutter for the frontend, Django for the backend, and PyTorch for image classification. Search for Pokémon, view detailed information, and identify Pokémon through image recognition.Find Pokémon by name with instant results, view comprehensive information about each Pokémon and powered by the OpenPokeAPI for accurate information"
          skills={["Flutter", "Dart", "Django", "Python", "PyTorch"]}
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
        <ProjectCard
          src="/8.png"
          link="https://github.com/joewrdd/Sapori-D-Italia"
          title="Sapori D'Italia"
          description="Sapori Di Italia, A beautifully designed Italian food ordering application built with Flutter, offering users a seamless experience to browse, order, and enjoy authentic Italian cuisine delivered right to their doorstep. Created to Engage More Into GetX State Management (Using Stuff Im Unfamiliar With For Testing Purposes)."
          skills={["Flutter", "Dart", "Fire base"]}
        />
        <ProjectCard
          src="/7.png"
          link="https://github.com/joewrdd/FlappyBird-FlutterFlame"
          title="Flappy Bird"
          description="A pixel-perfect recreation of the classic Flappy Bird game built with Flutter and the Flame game engine, offering smooth gameplay, authentic retro graphics, and challenging physics. Flame is a modular Flutter game engine that provides a complete set of out-of-the-way solutions for games. Its flexible, open source and runs everywhere."
          skills={["Flutter", "Dart", "Flame"]}
        />
        <ProjectCard
          src="/10.png"
          link="https://youtu.be/-TRAjBLLWGM?si=Wo4uw_6ND11PApGi"
          title="WrddAI"
          description="A powerful AI-driven content generation platform built with React+Redux frontend and NestJS backend that helps users create high-quality, engaging content with voice input capabilities, centralized state management, and a seamless payment experience. The application integrates with Google's Gemini 1.5 Pro model to generate high-quality content."
          skills={["React", "Redux", "Nest Js", "MongoDB", "Stripe"]}
        />
      </div>
    </div>
  );
};

export default Projects;
