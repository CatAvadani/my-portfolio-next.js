'use client';

import { useActiveSectionContext } from '@/context/active-section.context';
import { useSectionInView } from '@/lib/hooks';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiDownload, HiEye } from 'react-icons/hi';

export default function Intro() {
  const { ref } = useSectionInView('home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const t = useTranslations('Home');
  const locale = useLocale();
  const [showCVDropdown, setShowCVDropdown] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const auroraY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  const trackCTAClick = (buttonText: string) => {
    // Track in Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_button_click', {
        button_text: buttonText,
        button_location: 'hero_section',
        event_category: 'CTA',
        event_label: buttonText,
      });
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const cvUrl =
    locale === 'en'
      ? '/cvPdf/Catalina_Avadani_Frontend_Developer_CV_EN.pdf'
      : '/cvPdf/Catalina_Avadani_Frontendutvecklare_CV_SV.pdf';

  return (
    <section
      id='home'
      ref={ref}
      className='w-full mb-0 scroll-mt-[100rem] relative overflow-hidden'
    >
      <div ref={sectionRef}>
        {/* Aurora Background with Grain */}
        <motion.div
          className='absolute inset-0 -z-10 opacity-30 dark:opacity-20'
          style={prefersReducedMotion ? {} : { y: auroraY }}
        >
          {/* Aurora gradients */}
          <div
            className='absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-purple-300/20 via-pink-300/10 to-transparent blur-3xl animate-pulse'
            style={{ animationDuration: '4s' }}
          />
          <div
            className='absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-blue-300/15 via-purple-300/10 to-transparent blur-3xl animate-pulse'
            style={{ animationDuration: '6s', animationDelay: '2s' }}
          />
          <div
            className='absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-radial from-pink-300/15 via-transparent to-transparent blur-3xl animate-pulse'
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          />

          {/* Grain texture */}
          <div
            className='absolute inset-0 opacity-[0.015] dark:opacity-[0.025] mix-blend-overlay'
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
            }}
          />
        </motion.div>

        <div className='flex flex-col-reverse sm:flex-row h-full relative max-w-7xl mx-auto items-center gap-0'>
          {/* Left content section */}
          <motion.div
            className='flex-[1.2] px-8 sm:px-16 py-12 sm:py-20'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <div className='max-w-2xl'>
              {/* Availability Badge with Purple Theme */}
              <motion.div
                className='inline-flex items-center gap-2 px-3 py-2 mb-6 bg-purple-50/80 dark:bg-purple-900/20 border border-purple-200/50 dark:border-purple-700/30 rounded-full backdrop-blur-sm'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className='relative'>
                  <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                  <div className='absolute inset-0 w-2 h-2 bg-purple-500 rounded-full animate-ping'></div>
                </div>
                <span className='text-sm font-medium text-purple-700 dark:text-purple-300'>
                  Available for new projects
                </span>
              </motion.div>

              {/* Small greeting text */}
              <motion.p
                className='text-gray-500 text-center sm:text-start dark:text-gray-400 mb-4 text-2xl md:text-3xl'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t('greeting')}
              </motion.p>

              {/* Main heading with smart highlight */}
              <motion.h1
                className='text-2xl text-center md:text-left md:text-6xl font-bold mb-6'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className='bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-300 dark:to-white bg-clip-text text-transparent'>
                  Front
                </span>
                <span className='relative inline-block group'>
                  <motion.span
                    className='absolute inset-0 bg-gradient-to-r from-purple-200/60 to-pink-200/60 dark:from-purple-600/30 dark:to-pink-600/30 rounded-lg -z-10 scale-110'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    whileHover={
                      prefersReducedMotion ? {} : { scale: 1.05, opacity: 0.8 }
                    }
                  />
                  <span className='bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-300 dark:to-white bg-clip-text text-transparent relative z-10'>
                    end
                  </span>
                </span>
                <span className='bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-300 dark:to-white bg-clip-text text-transparent'>
                  {' '}
                  Developer
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className='text-lg text-center sm:text-start text-gray-600 dark:text-gray-300 mb-12 leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t('description')}
              </motion.p>

              {/* Buttons section with micro-motion */}
              <motion.div
                className='space-y-8'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Primary buttons */}
                <div className='flex sm:flex-row gap-2 sm:gap-4 justify-center sm:justify-start'>
                  <motion.div
                    whileHover={
                      prefersReducedMotion ? {} : { scale: 1.02, y: -2 }
                    }
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  >
                    <Link
                      href='#contact'
                      className='group bg-violet-950/70 text-white text-sm sm:text-lg px-4 sm:px-7 py-1 sm:py-3 flex items-center justify-center gap-2 rounded-full outline-none 
                      hover:bg-violet-950/85 transition duration-300 cursor-pointer dark:bg-gray-800/70 relative overflow-hidden'
                      onClick={() => {
                        setActiveSection('contact');
                        setTimeOfLastClick(Date.now());
                        trackCTAClick(t('getInTouch'));
                      }}
                    >
                      <motion.div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500' />
                      <span className='relative z-10'>{t('getInTouch')}</span>
                      <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition relative z-10' />
                    </Link>
                  </motion.div>

                  <div className='relative'>
                    <motion.button
                      className='group bg-white/50 text-sm sm:text-lg px-4 sm:px-7 py-1 sm:py-3 flex items-center justify-center gap-2 rounded-full outline-none transition duration-300 cursor-pointer border border-white/10 hover:border-white/20 dark:bg-white/10 dark:text-white/60'
                      onClick={() => setShowCVDropdown(!showCVDropdown)}
                      onBlur={() =>
                        setTimeout(() => setShowCVDropdown(false), 200)
                      }
                      whileHover={
                        prefersReducedMotion ? {} : { scale: 1.02, y: -2 }
                      }
                      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    >
                      {t('viewCV')}
                      <HiEye className='opacity-60' />
                    </motion.button>

                    {/* Dropdown menu */}
                    {showCVDropdown && (
                      <motion.div
                        className='absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 min-w-[220px] border border-white/10 dark:border-gray-700/50'
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={`/${locale}/cv`}
                          className='block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
                          onClick={() => setShowCVDropdown(false)}
                        >
                          <div className='flex items-center gap-3'>
                            <HiEye className='text-violet-600 flex-shrink-0' />
                            <div>
                              <p className='font-medium text-gray-900 dark:text-white'>
                                {t('interactiveCV')}
                              </p>
                              <p className='text-xs text-gray-500 dark:text-gray-400'>
                                {t('interactiveCVDesc')}
                              </p>
                            </div>
                          </div>
                        </Link>

                        <a
                          href={cvUrl}
                          download
                          className='block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-t border-gray-200 dark:border-gray-700'
                        >
                          <div className='flex items-center gap-3'>
                            <HiDownload className='text-violet-600 flex-shrink-0' />
                            <div>
                              <p className='font-medium text-gray-900 dark:text-white'>
                                {t('downloadPDF')}
                              </p>
                              <p className='text-xs text-gray-500 dark:text-gray-400'>
                                {t('downloadPDFDesc')}
                              </p>
                            </div>
                          </div>
                        </a>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Social links with micro-motion */}
                <div className='flex gap-2 sm:gap-4 justify-center sm:justify-start'>
                  <motion.a
                    className='bg-white/50 p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition duration-300 cursor-pointer border border-white/10 hover:border-white/20 dark:bg-white/10 dark:text-white/60'
                    href='https://www.linkedin.com/in/catalinaava09/'
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={
                      prefersReducedMotion ? {} : { y: -3, rotate: 3 }
                    }
                    whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
                  >
                    <FaLinkedinIn size={20} />
                  </motion.a>

                  <motion.a
                    className='bg-white/50 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition duration-300 cursor-pointer border border-white/10 hover:border-white/20 dark:bg-white/10 dark:text-white/60'
                    href='https://github.com/CatAvadani'
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={
                      prefersReducedMotion ? {} : { y: -3, rotate: -3 }
                    }
                    whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right image section with parallax */}
          <motion.div
            className='flex-1 relative flex items-center justify-center sm:justify-end mb-24 -ml-12'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={prefersReducedMotion ? {} : { y: imageY }}
          >
            <div className='relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]'>
              <Image
                src={require('../public/Catalina3.png')}
                alt='My Image'
                fill
                quality={95}
                priority={true}
                className='object-contain object-center scale-110'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
