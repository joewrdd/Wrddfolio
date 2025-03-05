import Image from "next/image";
import { skillsImagesData } from "@/constants";

interface SkillsImages {
  [key: string]: {
    image: string;
  };
}

interface Props {
  skills: string[];
  skillsImages: SkillsImages;
}

export default function CircularSkills({ skills, skillsImages }: Props) {
  const getSkillDimensions = (skillName: string) => {
    const skillData = skillsImagesData.find((s) => s.skill_name === skillName);
    return {
      width: skillData?.width || 32,
      height: skillData?.height || 32,
    };
  };

  return (
    <div className="absolute bottom-4 left-4 flex items-center z-10">
      {skills
        .filter((skill) => skillsImages[skill])
        .map((skill, index) => {
          const { width, height } = getSkillDimensions(skill);
          return (
            <div
              key={index}
              className="border border-[#2A0E61] rounded-full w-8 h-8 flex justify-center items-center bg-gradient-to-br from-[#7042f8] to-[#b468f2] -ml-2 first:ml-0 hover:scale-110 transition-transform"
              style={{ zIndex: skills.length - index }}
            >
              <Image
                width={width}
                height={height}
                src={skillsImages[skill].image}
                alt={`${skill} icon`}
                className="p-1.5"
              />
            </div>
          );
        })}
    </div>
  );
}
