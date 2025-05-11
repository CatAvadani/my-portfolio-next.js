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
}) {
  const { theme } = useTheme();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-12 last:mb-0"
    >
      <div className="flex items-start px-10 mx-auto max-w-5xl">
        {/* Left side - Icon and line */}
        <div className="relative mt-2 mr-4 sm:mr-6 lg:mr-20 flex flex-col items-center">
          {/* Timeline track */}
          <div
            className={`absolute h-full w-[1px] ${
              index === experiencesData.length - 1 ? "h-[200px]" : "h-[80px]"
            } ${
              theme === "light"
                ? "bg-gradient-to-b from-purple-400 to-purple-100"
                : "bg-gradient-to-b from-purple-600 to-purple-900/20"
            } top-10 left-1/2 transform -translate-x-1/2`}
          />

          {/* Icon container */}
          <motion.div
            style={{ scale: scrollYProgress, opacity: scrollYProgress }}
          >
            <span
              className={`text-lg ${
                theme === "light" ? "text-purple-500" : "text-purple-300"
              }`}
            >
              {item.icon}
            </span>
          </motion.div>
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
            <span className="text-sm font-medium text-purple-600 dark:text-purple-300">
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
            <p className="text-gray-700 dark:text-gray-300">
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
