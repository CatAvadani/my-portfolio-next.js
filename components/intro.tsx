"use client";

import { useActiveSectionContext } from "@/context/active-section.context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDownload, HiEye } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const t = useTranslations("Home");
  const locale = useLocale();
  const [showCVDropdown, setShowCVDropdown] = useState(false);

  const cvUrl =
    locale === "en"
      ? "/cvPdf/Catalina_Avadani_CV_EN.pdf"
      : "/cvPdf/Catalina_Avadani_CV_SV.pdf";

  return (
    <section
      id="home"
      ref={ref}
      className="w-full mb-0 scroll-mt-[100rem] relative overflow-hidden"
    >
      <div className="flex flex-col-reverse sm:flex-row h-full relative max-w-7xl mx-auto items-center gap-0">
        {/* Left content section */}
        <motion.div
          className="flex-[1.2] px-8 sm:px-16 py-12 sm:py-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <div className="max-w-2xl">
            {/* Small greeting text */}
            <motion.p
              className="text-gray-500 text-center sm:text-start dark:text-gray-400 mb-4 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("greeting")}
            </motion.p>

            {/* Main heading */}
            <motion.h1
              className="text-4xl sm:text-6xl text-center sm:text-start font-extralight mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t("title")}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-center sm:text-start text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t("description")}
            </motion.p>

            {/* Buttons section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Primary buttons */}
              <div className="flex sm:flex-row gap-2 sm:gap-4 justify-center sm:justify-start">
                <Link
                  href="#contact"
                  className="group bg-violet-950/70 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none 
                  hover:bg-violet-950/85 active:scale-105 transition duration-300 cursor-pointer dark:bg-gray-800/70"
                  onClick={() => {
                    setActiveSection("contact");
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {t("getInTouch")}
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <div className="relative">
                  <button
                    className="group bg-white/50 px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none active:scale-105 transition duration-300 cursor-pointer border border-white/10 hover:border-white/20 dark:bg-white/10 dark:text-white/60"
                    onClick={() => setShowCVDropdown(!showCVDropdown)}
                    onBlur={() =>
                      setTimeout(() => setShowCVDropdown(false), 200)
                    }
                  >
                    {t("viewCV")}
                    <HiEye className="opacity-60 " />
                  </button>

                  {/* Dropdown menu */}
                  {showCVDropdown && (
                    <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 min-w-[220px]">
                      <Link
                        href={`/${locale}/cv`}
                        className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setShowCVDropdown(false)}
                      >
                        <div className="flex items-center gap-3">
                          <HiEye className="text-violet-600 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {t("interactiveCV")}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {t("interactiveCVDesc")}
                            </p>
                          </div>
                        </div>
                      </Link>

                      <a
                        href={cvUrl}
                        download
                        className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-t border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-center gap-3">
                          <HiDownload className="text-violet-600 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {t("downloadPDF")}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {t("downloadPDFDesc")}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-2 sm:gap-4 justify-center sm:justify-start">
                <a
                  className=" bg-white/50 p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition duration-300 cursor-pointer border border-white/10 hover:border-white/20 dark:bg-white/10 dark:text-white/60"
                  href="https://www.linkedin.com/in/catalinaava09/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={20} />
                </a>

                <a
                  className=" bg-white/50 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition duration-300 cursor-pointer border border-white/10 hover:border-white/20  dark:bg-white/10 dark:text-white/60"
                  href="https://github.com/CatAvadani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right image section */}
        <motion.div
          className="flex-1 relative flex items-center justify-center sm:justify-end mb-24 -ml-12"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]">
            <Image
              src={require("../public/Catalina3.png")}
              alt="My Image"
              fill
              quality={95}
              priority={true}
              className="object-contain object-center scale-110"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
