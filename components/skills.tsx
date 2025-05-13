"use client";

import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionHeading from "./section-heading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("skills");
  const t = useTranslations("Skills");

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-5xl
     scroll-mt-28 text-center sm:mb-40
    "
    >
      <SectionHeading>{t("title")}</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-sm  text-gray-800 max-w-3xl">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-purple-100/50 rounded-full px-3 py-2 dark:bg-white/10 dark:text-white/80  shadow-sm dark:border-white/20 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
