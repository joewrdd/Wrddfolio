import React from "react";
import CircularSkills from "./CircularSkills";
import { skillsImagesData } from "@/constants";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  src: string;
  link: string;
  title: string;
  description: string;
  skills: string[];
}

const ProjectCard = ({ src, link, title, description, skills }: Props) => {
  const skillsImages = skillsImagesData.reduce(
    (acc, skill) => ({
      ...acc,
      [skill.skill_name]: { image: skill.Image },
    }),
    {}
  );

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-full w-full">
      <div
        className="w-full h-[450px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${src}')` }}
      />
      <div className="relative p-4 pb-16">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <CircularSkills skills={skills} skillsImages={skillsImages} />
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 flex items-center justify-center p-2 rounded-full bg-[#2A0E61] hover:text-[#b249f8] transition-all duration-200 z-[51]"
      >
        <div className="flex items-center relative z-[52]">
          <FaArrowRight className="text-xl" />
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
