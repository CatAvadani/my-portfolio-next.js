"use client";
import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref } = useSectionInView("experience");
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const t = useTranslations("Experience");

  const translations = t.raw("entries") as {
    title: string;
    location: string;
    description: string;
    date: string;
  }[];

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t("title")}</SectionHeading>
      <div ref={containerRef} className="relative mt-12 max-w-7xl mx-auto">
        {translations.map((translation, index) => (
          <TimelineItem
            key={index}
            item={{ ...translation, icon: experiencesData[index].icon }}
            index={index}
            containerRef={containerRef}
            isLast={index === translations.length - 1}
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

  const descriptionLength = item.description?.length || 0;

  const getLineHeight = () => {
    if (isLast) return "h-24";
    if (descriptionLength > 500) return "h-[400px]";
    if (descriptionLength > 300) return "h-[300px]";
    return "h-[250px]";
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
      <div className="flex items-start px-2 sm:px-10 mx-auto max-w-5xl">
        <div className="relative mr-2 sm:mr-6 lg:mr-12 flex flex-col items-center">
          <div
            className={`absolute w-[1px] ${getLineHeight()} ${
              theme === "light"
                ? "bg-gradient-to-b from-purple-400 via-blue-100 to-blue-100"
                : "bg-gradient-to-b from-purple-400 via-purple-300 to-blue-900/10"
            } top-8 left-1/2 transform -translate-x-1/2`}
          />
          <div
            className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full 
                ${theme === "light" ? "bg-white/90 " : "bg-gray-800 "} 
                border ${
                  theme === "light" ? "border-white" : "border-gray-800"
                }`}
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
            className={`p-5 rounded-xl relative
              bg-white/70 shadow-sm dark:bg-gray-800 border border-gray-100 dark:border-gray-700
            `}
          >
            <p className="text-gray-700 text-sm sm:text-lg dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>
            {item.skills && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((skill: string, skillIndex: number) => (
                  <span
                    key={skillIndex}
                    className={`text-xs px-2 py-1 rounded-full ${
                      theme === "light"
                        ? "bg-purple-50 text-purple-700"
                        : "bg-gray-800 text-purple-300"
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
