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
          <p className='mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto'>
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
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10'>
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
                {/* Card with enhanced design elements */}
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
                  {/* Subtle floating background element */}
                  <motion.div
                    className='absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-200/10 to-pink-200/10 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-xl'
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />

                  {/* Sunburst corner accent */}
                  <div className='absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity duration-300'>
                    <svg className='w-full h-full' viewBox='0 0 48 48'>
                      <defs>
                        <linearGradient
                          id={`cornerSunburst-${index}`}
                          x1='0%'
                          y1='0%'
                          x2='100%'
                          y2='100%'
                        >
                          <stop
                            offset='0%'
                            stopColor='#a855f7'
                            stopOpacity='0.6'
                          />
                          <stop
                            offset='50%'
                            stopColor='#d946ef'
                            stopOpacity='0.4'
                          />
                          <stop
                            offset='80%'
                            stopColor='#ec4899'
                            stopOpacity='0.3'
                          />
                          <stop
                            offset='100%'
                            stopColor='#f8fafc'
                            stopOpacity='0.1'
                          />
                        </linearGradient>
                      </defs>
                      {/* Sunburst rays from top-right corner */}
                      {Array.from({ length: 6 }, (_, i) => {
                        const angle = i * 15; // 90 degrees / 6 rays
                        const x1 = 48;
                        const y1 = 0;
                        const x2 = 48 - 35 * Math.cos((angle * Math.PI) / 180);
                        const y2 = 35 * Math.sin((angle * Math.PI) / 180);
                        const x3 =
                          48 - 35 * Math.cos(((angle + 12) * Math.PI) / 180);
                        const y3 =
                          35 * Math.sin(((angle + 12) * Math.PI) / 180);

                        return (
                          <motion.path
                            key={i}
                            d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`}
                            fill={`url(#cornerSunburst-${index})`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 0.8 + index * 0.1 + i * 0.03,
                              duration: 0.3,
                              ease: 'easeOut',
                            }}
                          />
                        );
                      })}
                    </svg>
                  </div>

                  {/* Enhanced gradient overlay on hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-50/20 to-pink-50/10 dark:from-purple-900/5 dark:to-pink-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                  {/* Content with relative positioning */}
                  <div className='relative z-10'>
                    <h3 className='text-xl font-medium text-gray-900 dark:text-white/90 mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300'>
                      {card.title}
                    </h3>

                    {/* Enhanced divider */}
                    <motion.div
                      className='w-12 h-0.5 bg-gradient-to-r from-purple-400/30 to-pink-400/30 dark:from-purple-400/40 dark:to-pink-400/40 rounded-full mb-4 group-hover:w-16 group-hover:from-purple-400/50 group-hover:to-pink-400/50 transition-all duration-300'
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    />

                    <p className='text-gray-700 dark:text-gray-300 text-base leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300'>
                      {card.content}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
