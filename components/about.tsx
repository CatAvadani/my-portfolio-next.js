'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SectionHeading from './section-heading';

export const metadata = {
  title: 'About | Catalina Avadani',
  description:
    'Learn more about Catalina Avadani, a passionate frontend developer in Gothenburg.',
};

export default function About() {
  const { ref } = useSectionInView('about');
  const t = useTranslations('About');
  const t1 = useTranslations('Journey');

  // Rebuild the cards array from translations
  const cards = t1.raw('cards') as Array<{ title: string; content: string }>;

  return (
    <section id='about' ref={ref} className='mb-14 scroll-mt-28 px-4'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className='space-y-12 max-w-7xl mx-auto'
      >
        <div className='text-center'>
          <SectionHeading>{t('title')}</SectionHeading>
          <p className='mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto'>
            {t('description')}
          </p>
        </div>

        {/* Horizontal journey flow */}
        <div className='relative pt-4'>
          {/* Horizontal connecting path */}
          <div className='absolute top-[68px] md:top-[260px] left-0 right-0 z-0 hidden md:block'>
            <svg
              className='w-full h-2'
              viewBox='0 0 1200 10'
              preserveAspectRatio='none'
            >
              <path
                d='M0,5 C200,15 400,0 600,5 C800,10 1000,0 1200,5'
                stroke='#d8b4fe'
                strokeOpacity='0.7'
                strokeWidth='5'
                strokeDasharray='4 2'
                fill='none'
              />
            </svg>
          </div>

          {/* Cards container */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  relative z-10'>
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15 * index,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                className='flex-1'
              >
                {/* Card with refined neomorphic effect */}
                <motion.div
                  className={`
                    group h-full p-7 rounded-xl relative overflow-hidden
                    bg-white dark:bg-gray-800
                    shadow-[5px_5px_10px_rgba(0,0,0,0.08),-5px_-5px_10px_rgba(255,255,255,0.9)]
                    dark:shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.05)]
                    hover:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.05),inset_-6px_-6px_12px_rgba(255,255,255,0.9)]
                    dark:hover:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.2),inset_-6px_-6px_12px_rgba(255,255,255,0.05)]
                    border border-gray-100 dark:border-gray-700
                    transition-all duration-300 ease-out
                  `}
                  whileHover={{
                    scale: 0.98,
                    transition: { duration: 0.3 },
                  }}
                >
                  <h3 className='text-xl font-medium text-gray-900 dark:text-white/90 mb-3'>
                    {card.title}
                  </h3>

                  <div className='w-12 h-0.5 bg-purple-300/20 dark:bg-purple-400/20 rounded-full mb-4'></div>

                  <p className='text-gray-700 dark:text-gray-300 text-base leading-relaxed'>
                    {card.content}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
