"use client";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import ProjectModal from "./projectModal";
import SectionHeading from "./section-heading";

interface MouseEventWithClient
  extends React.MouseEvent<HTMLAnchorElement | HTMLDivElement> {
  clientX: number;
  clientY: number;
}

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  techStack: string;
  href: string;
  github?: string;
  isNexerProject?: boolean;
  project?: any;
  onClick?: (e: React.MouseEvent) => void;
}

export const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const [activeProject, setActiveProject] = useState<any | null>(null);

  const handleProjectClick = (e: React.MouseEvent, project: any) => {
    if (project.isNexerProject) {
      e.preventDefault();
      setActiveProject(project);
    } else if (
      !e.defaultPrevented &&
      project.href &&
      !project.techStack.includes("React Native")
    ) {
      // For non-Nexer projects with a valid href, open the demo in a new tab
      window.open(project.href, "_blank", "noopener,noreferrer");
    } else if (
      !e.defaultPrevented &&
      project.github &&
      project.techStack.includes("React Native")
    ) {
      // For React Native projects, open the GitHub repo
      window.open(project.github, "_blank", "noopener,noreferrer");
    }
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="p-4 md:p-8 w-full max-w-7xl scroll-mt-28 mb-28"
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
            github={project.github}
            isNexerProject={project.isNexerProject}
            project={project}
            onClick={(e) => handleProjectClick(e, project)}
          />
        ))}
      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={closeModal} />
      )}
    </section>
  );
};

const TechChip = ({ tech }: { tech: string }) => {
  return (
    <span className="inline-block rounded-full px-3 py-1 bg-purple-100/50 shadow-sm text-gray-500 dark:bg-gray-800 dark:text-purple-100 text-sm">
      {tech}
    </span>
  );
};

const Link = ({
  heading,
  imgSrc,
  subheading,
  href,
  github,
  techStack,
  isNexerProject,
  onClick,
}: LinkProps) => {
  const ref = useRef<HTMLDivElement>(null);

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

  const technologies = techStack.split(", ");

  // Handle clicks for live demo links in non-Nexer projects
  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault(); // This prevents the card click handler from firing
    if (!isNexerProject && href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  // Handle clicks for GitHub links
  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault(); // This prevents the card click handler from firing
    if (github) {
      window.open(github, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-gray-200 py-4 transition-colors duration-500 hover:border-gray-400 md:py-8 cursor-pointer"
      onClick={onClick}
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
        <div className="relative z-10 mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <TechChip key={index} tech={tech} />
          ))}
        </div>

        {/* Project Links */}
        {!isNexerProject ? (
          <div className="relative z-10 mt-4 flex space-x-3">
            {!techStack.includes("React Native") && href && href !== "" && (
              <button
                onClick={handleDemoClick}
                className="flex items-center gap-1 text-sm text-purple-600 hover:text-purple-800 dark:text-purple-300 dark:hover:text-purple-200 transition-colors"
                aria-label={`Visit live demo for ${heading}`}
              >
                <FiExternalLink className="text-lg" />
                <span>Live Demo</span>
              </button>
            )}
            {github && (
              <button
                onClick={handleGithubClick}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors border border-gray-200 dark:border-gray-700 rounded-full px-2 py-1"
                aria-label={`View source code for ${heading} on GitHub`}
              >
                <FiGithub className="text-lg" />
                <span>Source Code</span>
              </button>
            )}
            {techStack.includes("React Native") && (
              <div className="flex items-center gap-1 text-sm text-purple-600 dark:text-gray-400">
                <span className="italic">Mobile app</span>
              </div>
            )}
          </div>
        ) : (
          <div className="relative z-10 mt-4 flex space-x-3">
            <span className="text-sm text-purple-600 dark:text-gray-400">
              Nexer Group Project -{" "}
              <span className="italic text-gray-600">Click for details</span>
            </span>
          </div>
        )}
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
        <FiArrowRight className="text-3xl text-gray-500" />
      </motion.div>
    </motion.div>
  );
};
