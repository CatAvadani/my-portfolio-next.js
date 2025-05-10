"use client";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "./section-heading";

interface MouseEventWithClient extends React.MouseEvent<HTMLAnchorElement> {
  clientX: number;
  clientY: number;
}

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  techStack: string;
  href: string;
}

export const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
      id="projects"
      ref={ref}
      className=" p-4 md:p-8 w-full max-w-7xl scroll-mt-28 mb-28"
    >
      <div className="mb-20">
        <SectionHeading>Projects</SectionHeading>
      </div>
      <div className="mx-auto">
        {projectsData.map((project, index) => (
          <Link
            key={index}
            heading={project.heading}
            subheading={project.subheading}
            techStack={project.techStack}
            imgSrc={project.imgSrc}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
};

const TechChip = ({ tech }: { tech: string }) => {
  return (
    <span className="inline-block  rounded-full px-3 py-2 text-xs font-semibold text-gray-700 mr-2 mb-2 transition-colors duration-300 hover:bg-purple_200/50 border border-gray-300">
      {tech}
    </span>
  );
};

const Link = ({ heading, imgSrc, subheading, href, techStack }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: MouseEventWithClient) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  // Split the techStack string into an array of individual technologies
  const technologies = techStack.split(", ");

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-gray-200 py-4 transition-colors duration-500 hover:border-gray-400 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-xl sm:text-2xl font-bold text-gray-500 transition-colors duration-500 group-hover:text-gray-600 md:text-4xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-sm sm:text-base text-gray-500 transition-colors duration-500 group-hover:text-gray-600 max-w-[70%] sm:max-w-[60%]">
          {subheading}
        </span>

        {/* Tech Stack Chips */}
        <div className="relative z-10 mt-4 flex flex-wrap max-w-[90%] sm:max-w-[80%]">
          {technologies.map((tech, index) => (
            <TechChip key={index} tech={tech} />
          ))}
        </div>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-gray-500" />
      </motion.div>
    </motion.a>
  );
};
