"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";

const Journey = () => {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });
  const theme = "dark";

  return (
    <div id="journey" className="pt-20 w-full">
      <h1 className="heading">
        <span className="text-purple">Journey</span>
      </h1>

      <div className="mt-[1.5rem]">
        <section
          id="experience"
          ref={ref}
          className="scroll-mt-28 mb-28 sm:mb-40"
        >
          <VerticalTimeline lineColor="rgba(255, 255, 255, 0.10)">
            {experiencesData.map((item: any, index: number) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  visible={inView}
                  contentStyle={{
                    background: "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                  }}
                  contentArrowStyle={{
                    borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
                  }}
                  date={item.date}
                  icon={item.icon}
                  iconStyle={{
                    background: "rgba(255, 255, 255, 0.15)",
                    fontSize: "1.5rem",
                  }}
                >
                  <h3 className="font-semibold capitalize">{item.title}</h3>
                  <p className="font-normal !mt-0">{item.location}</p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
        </section>
      </div>
    </div>
  );
};

export default Journey;
