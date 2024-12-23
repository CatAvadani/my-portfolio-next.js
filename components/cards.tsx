import { BsStars } from 'react-icons/bs';
import { FaCode, FaRegCompass } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';

export const cards = [
  {
    title: 'The Journey Begins',
    icon: <FaRegCompass className='text-2xl text-purple-500' />,
    content:
      'Life often takes us on unexpected journeys. My path from being a casino dealer and supervisor on cruise ships to becoming a Front-End developer was anything but conventional.',
    gradient:
      'from-purple-300/10 to-pink-100/20 dark:from-purple-900/10 dark:to-pink-900/10',
  },
  {
    title: 'The Transition',
    icon: <HiOutlineLightBulb className='text-2xl text-purple-500' />,
    content:
      'Driven by a deep-seated curiosity for technology and a desire for change, I enrolled in an Android development course. This first step into mobile app development opened my eyes to the possibilities in tech.',
    gradient:
      'from-purple-300/10 to-pink-100/20 dark:from-purple-900/10 dark:to-pink-900/10',
  },
  {
    title: 'The Discovery',
    icon: <FaCode className='text-2xl text-purple-500' />,
    content:
      'While Android development was fulfilling, I found my true passion in Front-End development. Learning HTML, CSS, and JavaScript revealed a perfect blend of creativity and technical challenge.',
    gradient:
      'from-purple-300/10 to-pink-100/20 dark:from-purple-900/10 dark:to-pink-900/10',
  },
  {
    title: 'Present Course',
    icon: <BsStars className='text-2xl text-purple-500' />,
    content:
      "Today, I'm crafting digital experiences where creativity meets code. Each project is an opportunity to combine my people skills from hospitality with technical expertise.",
    gradient:
      'from-purple-300/10 to-pink-100/20 dark:from-purple-900/10 dark:to-pink-900/10',
  },
];
