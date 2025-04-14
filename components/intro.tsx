"use client";

import { useActiveSectionContext } from "@/context/active-section.context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

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
              Hi, I am Catalina.
            </motion.p>

            {/* Main heading */}
            <motion.h1
              className="text-4xl sm:text-6xl text-center sm:text-start font-extralight mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Front End Developer
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-center sm:text-start text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I’m passionate about creating intuitive, accessible, and visually
              stunning web experiences that make a difference.
              {/* <span className="font-semibold">React, Next.js</span>. */}
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
                  className="group bg-violet-950/70 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 
                  hover:bg-violet-950/85 active:scale-105 transition duration-300 cursor-pointer dark:bg-gray-800/70"
                  onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  Get in Touch{" "}
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                  className="group bg-white/50 px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition duration-300 cursor-pointer border border-white/10 hover:border-white/20  dark:bg-white/10 dark:text-white/60"
                  href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:cc46356d-4336-4a6e-af9a-f8b612e96e64"
                  download
                >
                  Download CV{" "}
                  <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>
              </div>

              {/* Social links */}
              <div className="flex gap-2 sm:gap-4 justify-center sm:justify-start">
                <a
                  className=" bg-white/50 p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition duration-300 cursor-pointer border border-white/10 hover:border-white/20 dark:bg-white/10 dark:text-white/60"
                  href="https://www.linkedin.com/in/catalinaava09/"
                  target="_blank"
                >
                  <FaLinkedinIn size={20} />
                </a>

                <a
                  className=" bg-white/50 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition duration-300 cursor-pointer border border-white/10 hover:border-white/20  dark:bg-white/10 dark:text-white/60"
                  href="https://github.com/CatAvadani"
                  target="_blank"
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
