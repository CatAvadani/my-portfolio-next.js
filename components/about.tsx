"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
export default function About() {
  return (
    <motion.section
      id='about'
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
        Life often takes us on unexpected journeys, and for me, the path to
        becoming a <span className=' font-semibold'>Front-End developer</span>{" "}
        was anything but conventional, and my transition from a career as a
        casino dealer and supervisor on cruise ships to embarking on a new
        journey in{" "}
        <span className='italic'>
          {" "}
          the world of technology and front-end development{" "}
        </span>{" "}
        has been a remarkable adventure.
      </p>
      <p className='mb-3'>
        Driven by{" "}
        <span className='font-medium'>
          a deep-seated curiosity for technology and a desire for a career
          change
        </span>{" "}
        , I decided to chart a new course in my life. I enrolled in an{" "}
        <span className='font-bold'> Android development course </span>, where I
        delved into{" "}
        <span className='italic'>the world of mobile app development</span>.
        While my <span className='font-medium'> Android </span>journey was
        fulfilling, I decided to broaden my horizons further by pursuing a{" "}
        <span className='font-bold'>Front-End development</span> course.
        Learning <span className='font-bold'> HTML, CSS, and JavaScript </span>{" "}
        opens up a new world of possibilities.
      </p>
      <p>
        I may have started my career on cruise ships, but today, I'm setting
        sail on a new adventure as a{" "}
        <span className='font-bold'>Front-End developer</span>, where{" "}
        <span className='italic'>creativity meets code</span> , and the
        possibilities are endless.
      </p>
    </motion.section>
  );
}
