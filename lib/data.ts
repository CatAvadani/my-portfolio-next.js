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
      "An interactive web app for documenting journeys with maps, tracking trips, and creating shareable postcards.",
    imgSrc: "/DigitalTravelJournal.png",
    href: "https://digital-travel-journal-wnb8.vercel.app/",
  },
  {
    heading: "Next Design",
    subheading:
      "The project reflects a clean and elegant aesthetic while showcasing practical skills in front-end development and modern web technologies.",
    imgSrc: "/NextDesign.png",
    href: "https://nextjs-webbshop-ts-chaos.vercel.app",
  },
  {
    heading: "TV MaZe",
    subheading:
      "A React Native app that lets users search for TV shows, view details, and manage favorites using the TV Maze API.",
    imgSrc: "/TVMaze.png",
    href: "https://github.com/CatAvadani/tv-maze-react-native-app",
  },
  {
    heading: "My Nutrition Plan",
    subheading:
      "An app for exploring and saving recipes, featuring search functionality, API integration, and responsive design.",
    imgSrc: "/MyNutritionPlan.png",
    href: "https://my-nutrition-plan.vercel.app/",
  },
  {
    heading: "FlicK PicK",
    subheading:
      "The primary objective of this project was to practice and enhance skills in unit and integration testing within a React application.",
    imgSrc: "/FlickPick.png",
    href: "https://flick-pick-unit-and-integration-testing-project.vercel.app/",
  },

  {
    heading: "Avira Design",
    subheading:
      "Designed a custom graphical profile and logo with Adobe Illustrator, created responsive wireframes and mockups, and focused on showcasing a functional design.",
    imgSrc: "/AviraDesign.png",
    href: "https://avira-design.vercel.app/",
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
