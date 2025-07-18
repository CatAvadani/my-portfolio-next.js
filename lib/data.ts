import React from 'react';
import { BsBriefcase } from 'react-icons/bs';
import { DiAndroid } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';

export const links = [
  {
    name: 'home',
    hash: '#home',
  },
  {
    name: 'about',
    hash: '#about',
  },
  {
    name: 'projects',
    hash: '#projects',
  },
  {
    name: 'skills',
    hash: '#skills',
  },
  {
    name: 'experience',
    hash: '#experience',
  },
  {
    name: 'contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Front End Developer - Internship',
    location: 'Nexer Group, Gothenburg',
    description:
      'At Nexer, I contributed to two key projects: Nexer Email, an email builder platform and Boost App, a cross-platform fitness tracker. I built accessible and responsive UIs using Next.js, React Native, Angular, TypeScript, Zustand, and Tailwind CSS. My work included implementing dynamic layouts, syncing data across frontend and backend, optimizing loading performance, and enhancing user experience. I also developed features for sending and previewing test emails with Nodemailer, built logic for layout restrictions, and wrote Cypress end-to-end tests to ensure stability. Throughout, I collaborated in an agile team and worked actively with Git and Azure DevOps.',
    icon: React.createElement(FaReact),
    date: 'Sept 2024 - April 2025',
  },

  {
    title: 'Android Developer - Internship',
    location: 'Stendahls, Gothenburg',
    description:
      'Designed and implemented Android app features using Kotlin, Jetpack Compose, and built data management solutions using Room Database. Followed MVVM architecture and implemented API integrations to connect mobile clients with backend services. Collaborated in an agile environment, participated in code reviews and optimized application performance through efficient memory management.',
    icon: React.createElement(DiAndroid),
    date: 'Oct 2022 - Dec 2022',
  },
  {
    title: 'Senior Casino Associate',
    location: 'Gothenburg, Sweden',
    description:
      'Led high-stakes casino operations in a fast-paced environment, handling financial transactions and customer disputes with accuracy and discretion. Developed a keen eye for detail and problem-solving by identifying fraudulent activities and preventing financial losses.',
    icon: React.createElement(BsBriefcase),
    date: 'Oct 2018 -June 2024',
  },
  {
    title: 'Casino Supervisor',
    location: 'USA',
    description:
      "Ensured that casino games were managed in accordance with the company's policies and regulations. Oversaw players and dealers, reviewed cash-to-chip exchanges, resolved conflicts professionally.Trained and supervised staff, ensuring strict compliance with security protocols and gaming regulations.",
    icon: React.createElement(BsBriefcase),
    date: ' ',
  },
] as const;

export type Project = {
  id: string;
  imgSrc: string;
  href: string;
  techStack: string;
  github?: string;
  isNexerProject?: boolean;
};
export const projectsData: Project[] = [
  {
    id: 'FridgePal',
    imgSrc: '/FridgePal.png',
    href: 'https://github.com/CatAvadani/FridgePal',
    github: 'https://github.com/CatAvadani/FridgePal',
    techStack:
      'React Native, TypeScript, OpenAI API, Supabase, Context API, Tailwind CSS',
    isNexerProject: false,
  },
  {
    id: 'DigitalTravelJournal',
    imgSrc: '/DigitalTravelJournal.png',
    href: 'https://digital-travel-journal-wnb8.vercel.app/',
    github: 'https://github.com/CatAvadani/digital-travel-journal',
    techStack:
      'Next.js, TypeScript, Zustand, Tailwind CSS, Firebase, Mapbox API',
    isNexerProject: false,
  },
  {
    id: 'Ako & Co',
    imgSrc: '/Ako_img.png',
    href: 'https://akostore-drab.vercel.app/',
    github: 'https://github.com/CatAvadani/akostore.git',
    techStack: 'Next.js, TypeScript, PostgreSQL, NextAuth, Stripe, PayPal',
    isNexerProject: false,
  },
  {
    id: 'NexerEmail',
    imgSrc: '/Nexer_Email.png',
    href: '#',
    techStack: 'Next.js, TypeScript, Zustand, Scss, Cypress',
    isNexerProject: true,
  },
  {
    id: 'BoostApp',
    imgSrc: '/Boost_App.png',
    href: '#',
    techStack: 'React Native, Angular, TypeScript, Context API',
    isNexerProject: true,
  },
  {
    id: 'TVMaze',
    imgSrc: '/TVMaze.png',
    href: 'https://github.com/CatAvadani/tv-maze-react-native-app',
    github: 'https://github.com/CatAvadani/tv-maze-react-native-app',
    techStack: 'React Native, TypeScript, Firebase, Tailwind CSS',
    isNexerProject: false,
  },
];

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'Express.js',
  'Git',
  'Tailwind',
  'Framer Motion',
  'Figma',
  'UX & Accessibility',
  'Agile Methodologies',
] as const;
