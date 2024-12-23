'use client';
import { motion } from 'framer-motion';

export default function CircularTextDivider() {
  const handleClick = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-col items-center justify-center gap-8 pb-20 -mt-20'>
      <motion.button
        onClick={handleClick}
        className='relative w-48 h-48 group cursor-pointer'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Rotating text circle */}
        <motion.div
          className='absolute inset-0'
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg viewBox='0 0 100 100' className='w-full h-full'>
            <path
              id='textPath'
              d='M50,15 A35,35 0 1,1 49.999,15'
              fill='none'
              className='text-gray-800 dark:text-gray-200'
              style={{ opacity: 0 }}
            />

            <text className='text-[6px] font-medium fill-current tracking-[0.25em]'>
              <textPath href='#textPath' className='uppercase'>
                EXPLORE MY STORY - - READ MORE ABOUT ME - -
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Static downward arrow */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <motion.svg
            viewBox='0 0 24 24'
            className='w-6 h-6 text-gray-800 dark:text-gray-200'
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <path
              d='M12 4 L12 20 M5 13 L12 20 L19 13'
              stroke='currentColor'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </motion.svg>
        </div>
      </motion.button>
    </div>
  );
}
