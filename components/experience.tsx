"use client";
import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const containerRef = useRef(null);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <div ref={containerRef} className="relative mt-12 max-w-7xl mx-auto">
        {experiencesData.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            containerRef={containerRef}
            isLast={index === experiencesData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
  containerRef,
  isLast,
}: {
  item: {
    icon: React.ReactNode;
    title: string;
    date: string;
    location: string;
    description: string;
    skills?: string[];
  };
  index: number;
  containerRef: React.RefObject<HTMLDivElement>;
  isLast: boolean;
}) {
  const { theme } = useTheme();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start end", "end end"],
  });

  // Calculate line heights based on content length
  const descriptionLength = item.description.length;
  // Adjust the height based on the content length - longer text gets longer line
  const getLineHeight = () => {
    if (isLast) return "h-24"; // Last item gets shorter line

    // Calculate dynamic height based on description length
    if (descriptionLength > 500) return "h-[400px]";
    if (descriptionLength > 300) return "h-[300px]";
    return "h-[250px]"; // Default line height
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-12 last:mb-0"
    >
      <div className="flex items-start px-4 sm:px-10 mx-auto max-w-5xl">
        {/* Left side - Icon and line */}
        <div className="relative mr-4 sm:mr-6 lg:mr-12 flex flex-col items-center">
          {/* Timeline track - Fixed with better heights */}
          <div
            className={`absolute w-[1px] ${getLineHeight()} ${
              theme === "light"
                ? "bg-gradient-to-b from-purple-400 via-blue-100 to-blue-100"
                : "bg-gradient-to-b from-purple-400 via-purple-300 to-blue-900/10"
            } top-8 left-1/2 transform -translate-x-1/2`}
          />

          {/* Icon container with improved visibility */}
          <div
            className={`relative z-10 flex items-center justify-center w-8 h-8 `}
          >
            <span
              className={`text-lg ${
                theme === "light" ? "text-purple-600" : "text-purple-300"
              }`}
            >
              {item.icon}
            </span>
          </div>
        </div>

        {/* Right side - Content */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-300 mt-1 sm:mt-0">
              {item.date}
            </span>
          </div>

          <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
            {item.location}
          </p>

          <div
            className={`p-4 rounded-xl shadow-sm ${
              theme === "light"
                ? "bg-purple-50/50 backdrop-blur-sm"
                : "bg-purple-900/10 backdrop-blur-sm"
            }`}
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>

            {item.skills && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.skills.map((skill: string, skillIndex: number) => (
                  <span
                    key={skillIndex}
                    className={`text-xs px-2 py-1 rounded-full ${
                      theme === "light"
                        ? "bg-white/80 text-purple-700"
                        : "bg-gray-800/80 text-purple-300"
                    } border ${
                      theme === "light"
                        ? "border-purple-200"
                        : "border-purple-800"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
