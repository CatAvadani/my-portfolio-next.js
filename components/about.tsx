"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("about");
  const t = useTranslations("About");
  const t1 = useTranslations("Journey");

  // Rebuild the cards array from translations
  const cards = t1.raw("cards") as Array<{ title: string; content: string }>;

  return (
    <section id="about" ref={ref} className="mb-14 scroll-mt-28 px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="space-y-12 max-w-7xl mx-auto"
      >
        <div className="text-center">
          <SectionHeading>{t("title")}</SectionHeading>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 * index,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <motion.div
                className={`group h-full p-6 rounded-xl bg-gradient-to-br from-purple-300/10 to-pink-100/20 dark:from-purple-900/10 dark:to-pink-900/10 backdrop-blur-lg border border-white/20 hover:border-white/50 dark:border-white/10 dark:hover:border-white/20 transition-all duration-300`}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white/90">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {card.content}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-600 dark:text-gray-300 text-base max-w-2xl mx-auto"
        >
          <p>{t("text")}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
