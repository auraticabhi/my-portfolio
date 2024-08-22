"use client";

import {
  Backend_skill,
  Frontend_skill,
  Languages,
  Other_skill,
  Skill_data,
} from "@/constants";
import { FaLocationArrow } from "react-icons/fa6";
import SkillText from "./sub/SkillText";
import SkillDataProvider from "./sub/SkillDataProvider";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div id="skills" className="md:py-20 py-10">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>
      <div>
        <section
          className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-[0] md:py-20 py-5"
          style={{ transform: "scale(0.9" }}
        >
          {/* <SkillText /> */}

          {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Skill_data.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div> */}

          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Frontend_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Backend_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Languages.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Other_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>

          <div className="w-full h-full absolute">
            <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
              <video
                className="w-full h-auto"
                preload="false"
                playsInline
                loop
                muted
                autoPlay
                src="/cards-video.webm"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecentProjects;
