import React from 'react';
import { BsAndroid } from 'react-icons/bs';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Front End Developer - Internship',
    location: 'Nexer Group, Gothenburg',
    description:
      'I worked on real-world projects using React Native and Angular, creating responsive layouts, implementing sorting and filtering features, and resolving bugs. Moreover, I enhanced my problem-solving, collaboration, and technical skills while gaining valuable experience in front-end development.',
    icon: React.createElement(FaReact),
    date: 'Sept 2024 - present',
  },
  {
    title: 'Senior Casino Associate',
    location: 'Gothenburg, Sweden',
    description:
      'Ensured a positive customer experience, oversaw gaming activities, resolved disputes, managed financial transactions, and ensured compliance with regulatory requirements.',
    icon: React.createElement(CgWorkAlt),
    date: '2018 - 2024',
  },
  {
    title: 'Android Developer - Internship',
    location: 'Stendahls, Gothenburg',
    description:
      'Completed a two-month internship focused on Android development, gaining hands-on experience with technologies such as Android Studio, Kotlin, Jetpack Compose, Room Database, Git, and Retrofit Library.',
    icon: React.createElement(BsAndroid),
    date: 'Okt - Dec 2022',
  },
  {
    title: 'Casino Supervisor',
    location: 'USA',
    description:
      "Ensured that casino games were managed in accordance with the company's policies and regulations. Oversaw players and dealers, reviewed cash-to-chip exchanges, resolved conflicts professionally, and handled personnel-related issues, including staff scheduling.",
    icon: React.createElement(CgWorkAlt),
    date: '2004 - 2017',
  },
] as const;

export const projectsData = [
  {
    heading: 'Digital Travel Journal',
    subheading:
      'An interactive web app for documenting journeys with maps, tracking trips, and creating shareable postcards.',
    imgSrc: '/DigitalTravelJournal.png',
    href: 'https://digital-travel-journal-wnb8.vercel.app/',
  },
  {
    heading: 'Next Design',
    subheading:
      'The project reflects a clean and elegant aesthetic while showcasing practical skills in front-end development and modern web technologies.',
    imgSrc: '/NextDesign.png',
    href: 'https://nextjs-webbshop-ts-chaos.vercel.app',
  },
  {
    heading: 'TV MaZe',
    subheading:
      'A React Native app that lets users search for TV shows, view details, and manage favorites using the TV Maze API.',
    imgSrc: '/TVMaze.png',
    href: 'https://github.com/CatAvadani/tv-maze-react-native-app',
  },
  {
    heading: 'My Nutrition Plan',
    subheading:
      'An app for exploring and saving recipes, featuring search functionality, API integration, and responsive design.',
    imgSrc: '/MyNutritionPlan.png',
    href: 'https://my-nutrition-plan.vercel.app/',
  },
  {
    heading: 'FlicK PicK',
    subheading:
      'The primary objective of this project was to practice and enhance skills in unit and integration testing within a React application.',
    imgSrc: '/FlickPick.png',
    href: 'https://flick-pick-unit-and-integration-testing-project.vercel.app/',
  },

  {
    heading: 'Avira Design',
    subheading:
      'Designed a custom graphical profile and logo with Adobe Illustrator, created responsive wireframes and mockups, and focused on showcasing a functional design.',
    imgSrc: '/AviraDesign.png',
    href: 'https://avira-design.vercel.app/',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'Svelte',
  'Git',
  'Tailwind',
  'Figma',
  'UX/UI',
  'Agile Methodologies',
  'Framer Motion',
  'Kotlin',
  'Android',
] as const;
