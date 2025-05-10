import React from "react";
import { BsAndroid } from "react-icons/bs";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front End Developer - Internship",
    location: "Nexer Group, Gothenburg",
    description:
      "Developing a modern email marketing solution at Nexer using Next.js and TypeScript with Zustand for state management. The platform features live template previewing, cross-client email testing (Gmail, Outlook), and seamless API integration. Focused on performance optimization by refining UI architecture and component design. My role extended to enhancing UX patterns across the company's React Native and Angular applications, bringing consistency to the user experience while improving core functionality.",
    icon: React.createElement(FaReact),
    date: "Sept 2024 - present",
  },

  {
    title: "Android Developer - Internship",
    location: "Stendahls, Gothenburg",
    description:
      "Designed and implemented Android app features using Kotlin, Jetpack Compose, and Room Database, focusing on performance and scalability,and collaborating in an Agile environment.",
    icon: React.createElement(BsAndroid),
    date: "Okt - Dec 2022",
  },
  {
    title: "Senior Casino Associate",
    location: "Gothenburg, Sweden",
    description:
      "Led high-stakes casino operations in a fast-paced environment, handling financial transactions and customer disputes with accuracy and discretion. Developed a keen eye for detail and problem-solving by identifying fraudulent activities and preventing financial losses.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2024",
  },
  {
    title: "Casino Supervisor",
    location: "USA",
    description:
      "Ensured that casino games were managed in accordance with the company's policies and regulations. Oversaw players and dealers, reviewed cash-to-chip exchanges, resolved conflicts professionally.Trained and supervised staff, ensuring strict compliance with security protocols and gaming regulations.",
    icon: React.createElement(CgWorkAlt),
    date: "2004 - 2017",
  },
] as const;

export const projectsData = [
  {
    heading: "Digital Travel Journal",
    subheading:
      "An interactive app for travel enthusiasts that combines map, API integrations, and customizable postcards. Awarded 'Best Final Project' at Medieinstitutet for its technical innovation and WCAG accessibility standards implementation.",
    techStack:
      "Next.js, TypeScript, Zustand, Tailwind CSS, Firebase, Mapbox API ",
    imgSrc: "/DigitalTravelJournal.png",
    href: "https://digital-travel-journal-wnb8.vercel.app/",
  },
  {
    heading: "Nexer Email",
    subheading:
      "A professional project developed at Nexer Group for creating and managing responsive email campaigns. Built a complex system from scratch focusing on cross-client compatibility and accessibility.",
    techStack: "Next.js, TypeScript, Zustand, Scss, Cypress",
    imgSrc: "/Nexer_Email.png",
    href: "#",
  },
  {
    heading: "Boost App",
    subheading:
      "Contributed to a fitness tracking platform at Nexer Group by implementing a complete UI redesign and enhancing functionality. Transformed the user experience through modern design principles while ensuring cross-platform compatibility.",
    techStack: "React Native, TypeScript, Context API ",
    imgSrc: "/Boost_App.png",
    href: "#",
  },
  {
    heading: "TV MaZe",
    subheading:
      "A mobile application developed with React Native that allows users to search for TV shows, view detailed information, and manage favorites. Focuses on performance and user experience in a mobile context.",
    techStack: "React Native, TypeScript, Firebase, Tailwind CSS",
    imgSrc: "/TVMaze.png",
    href: "https://github.com/CatAvadani/tv-maze-react-native-app",
  },
  {
    heading: "My Nutrition Plan",
    subheading:
      "A web application for exploring and saving recipes with search and filtering functionality. Demonstrates skills in API integration and responsive design.",
    techStack: "React, TypeScript, Styled Components,  Edamam API",
    imgSrc: "/MyNutritionPlan.png",
    href: "https://my-nutrition-plan.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Svelte",
  "Git",
  "Tailwind",
  "Figma",
  "UX/UI",
  "Agile Methodologies",
  "Framer Motion",
  "Kotlin",
  "Android",
] as const;
