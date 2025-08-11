import { motion } from 'framer-motion';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <h2 className='text-2xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-300 dark:to-white bg-clip-text text-transparent mb-6'>
        {children}
      </h2>

      {/* Animated underline */}
      <motion.div
        className='w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6'
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </motion.div>
  );
}
