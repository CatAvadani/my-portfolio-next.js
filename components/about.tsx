'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { BsStars } from 'react-icons/bs';
import { FaCode, FaRegCompass } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import SectionHeading from './section-heading';

export default function About() {
  const { ref } = useSectionInView('About');

  const cards = [
    {
      title: 'The Journey Begins',
      icon: <FaRegCompass className='text-2xl text-purple-500' />,
      content:
        'Life often takes us on unexpected journeys. My path from being a casino dealer and supervisor on cruise ships to becoming a Front-End developer was anything but conventional.',
      gradient:
        'from-purple-100/20 to-pink-100/20 dark:from-purple-900/10 dark:to-pink-900/10',
    },
    {
      title: 'The Transition',
      icon: <HiOutlineLightBulb className='text-2xl text-yellow-500' />,
      content:
        'Driven by a deep-seated curiosity for technology and a desire for change, I enrolled in an Android development course. This first step into mobile app development opened my eyes to the possibilities in tech.',
      gradient:
        'from-yellow-100/20 to-orange-100/20 dark:from-yellow-900/10 dark:to-orange-900/10',
    },
    {
      title: 'The Discovery',
      icon: <FaCode className='text-2xl text-blue-500' />,
      content:
        'While Android development was fulfilling, I found my true passion in Front-End development. Learning HTML, CSS, and JavaScript revealed a perfect blend of creativity and technical challenge.',
      gradient:
        'from-blue-100/20 to-cyan-100/20 dark:from-blue-900/10 dark:to-cyan-900/10',
    },
    {
      title: 'Present Course',
      icon: <BsStars className='text-2xl text-emerald-500' />,
      content:
        "Today, I'm crafting digital experiences where creativity meets code. Each project is an opportunity to combine my people skills from hospitality with technical expertise.",
      gradient:
        'from-emerald-100/20 to-teal-100/20 dark:from-emerald-900/10 dark:to-teal-900/10',
    },
  ];

  return (
    <section id='about' ref={ref} className='mb-14 scroll-mt-28 px-4'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className='space-y-12 max-w-7xl mx-auto'
      >
        <div className='text-center'>
          <SectionHeading>About Me</SectionHeading>
          <p className='mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto'>
            Let me take you through my journey of transformation — from
            navigating the seas to navigating the web.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 * index,
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              <motion.div
                className={`group h-full p-6 rounded-xl bg-gradient-to-br ${card.gradient} backdrop-blur-sm border border-black/5 hover:border-black/10 dark:border-white/10 dark:hover:border-white/20 transition-all duration-300`}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className='flex items-center gap-4 mb-3'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 12,
                      delay: 0.3 * index,
                    }}
                    className='w-8 h-8 flex items-center justify-center rounded-lg bg-white/50 dark:bg-white/10 group-hover:bg-white/80 dark:group-hover:bg-white/20 transition-colors'
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className='text-lg font-medium text-gray-900 dark:text-white/90'>
                    {card.title}
                  </h3>
                </div>
                <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
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
          className='text-center text-gray-600 dark:text-gray-300 text-base max-w-2xl mx-auto'
        >
          <p>
            While my journey may have started on cruise ships, today I'm
            embarking on new adventures in web development — where each project
            is an opportunity to create something meaningful and impactful.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
