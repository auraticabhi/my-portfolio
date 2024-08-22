import { FaLocationArrow } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import userImg from "../public/profile2.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState(
    "hey! myself Abhijeet, I enjoy transforming Concepts into Seamless User Experiences..."
  );

  useEffect(() => {
    const updateText = () => {
      if (window.innerWidth >= 768) {
        setText(
          "hey! myself Abhijeet, I enjoy transforming Concepts into Seamless User Experiences..."
        );
      } else {
        setText(
          "hey! myself Abhijeet, I enjoy transforming Concepts into Seamless User Experiences."
        );
      }
    };

    updateText(); // Check the screen size when the component mounts
    window.addEventListener("resize", updateText);

    return () => window.removeEventListener("resize", updateText);
  }, []);

  return (
    <div id="home" className="md:pb-20 pt-36 pb-10">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative mt-[45px] mb-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center">
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90">
            Dynamic Web Magic with Next.js
          </p> */}
          <div className="w-[8rem] h-[8rem] rounded-full mb-[1.5rem] mt-[1rem] md:mt-0 animate-pulse">
            <Image
              src={userImg}
              alt="userImg"
              width={600}
              height={600}
              className="rounded-full border-gradient-to-b from-blue-900 to-blue-500 border-3"
            />
          </div>
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words={text}
            className="text-center text-2xl md:text-3xl lg:text-4xl lg:text-[43px] font-[650]"
          />

          <p className="text-center md:tracking-wider md:mb-4 mb-[2.5rem] md:mt-1 mt-[0.5rem] opacity-95 text-sm md:text-lg lg:text-2xl">
            I&apos;m a full stack developer based in India.
          </p>
          <div className="flex flex-col md:flex-row md:gap-[1rem] gap-[1.5rem] items-baseline">
            <div className="flex gap-[1rem] items-baseline">
              <div>
                <a href="https://drive.google.com/file/d/1-VeTkn3kKemiwfWNIYoHtLn_Yj0ViR08/view?usp=drivesdk">
                  <MagicButton
                    title="Download CV"
                    icon={<IoDownloadOutline />}
                    position="right"
                  />
                </a>
              </div>
              <a href="mailto:webmaster@example.com">
                <MagicButton
                  title="Contact Me"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
            <div className="flex items-baseline gap-[1rem] w-full justify-center">
              <a href="http://www.linkedin.com/in/abhijeet-gupta-0074a922b">
                <div className="h-[3rem] w-[3rem] flex items-center justify-center rounded-full border-opacity-90 border-white border-2">
                  <FaLinkedinIn />
                </div>
              </a>
              <a href="http://github.com/auraticabhi">
                <div className="h-[3rem] w-[3rem] flex items-center justify-center rounded-full border-opacity-90 border-white border-2">
                  <FaGithub />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
