"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { FaDownload } from "react-icons/fa";

const Cv = () => {
  const triggerDownload = () => {
    window.open("/api/download", "_blank");
  };

  return (
    <div
      className="flex flex-col items-center justify-center py-20 relative"
      id="cv"
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white py-20 font-orbitron"
      >
        Want To Know More About Me?
      </motion.div>

      <button
        onClick={triggerDownload}
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#2A0E61",
          color: "white",
          borderRadius: "0.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          border: "1px solid #7042f88b",
          cursor: "pointer",
          transition: "all 0.3s ease",
          outline: "none",
          position: "relative",
          zIndex: 50,
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#7042f88b";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#2A0E61";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <FaDownload />
        <span style={{ fontWeight: "bold" }}>Download CV</span>
      </button>
    </div>
  );
};

export default Cv;
