"use client";

import { useActiveSectionContext } from "@/context/active-section.context";
import { links } from "@/lib/data";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const t = useTranslations("Navigation");

  return (
    <header className="z-20 relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4rem] w-full rounded-none border border-white border-opacity-40 bg-transparent bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25] sm:w-[36rem] sm:rounded-full dark:bg-gray-800/30 dark:border-black/10 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0]">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-4">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-400",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === t(link.name),
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {t(link.name)}

                {link.name === activeSection && (
                  <motion.span
                    className=" bg-purple-100/70 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 20,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
