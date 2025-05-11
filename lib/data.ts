import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
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
      "At Nexer, I contributed to two key projects: Nexer Email, an email builder platform and Boost App, a cross-platform fitness tracker. I built accessible and responsive UIs using Next.js, React Native, Angular, TypeScript, Zustand, and Tailwind CSS. My work included implementing dynamic layouts, syncing data across frontend and backend, optimizing loading performance, and enhancing user experience. I also developed features for sending and previewing test emails with Nodemailer, built logic for layout restrictions, and wrote Cypress end-to-end tests to ensure stability. Throughout, I collaborated in an agile team and worked actively with Git and Azure DevOps.",
    icon: React.createElement(FaReact),
    date: "Sept 2024 - April 2025",
  },

  {
    title: "Android Developer - Internship",
    location: "Stendahls, Gothenburg",
    description:
      "Designed and implemented user interfaces with Jetpack Compose and built data management solutions using Room Database. Followed MVVM architecture and implemented API integrations to connect mobile clients with backend services. Collaborated in an agile environment, participated in code reviews and optimized application performance through efficient memory management.",
    icon: React.createElement(DiAndroid),
    date: "Oct 2022 - Dec 2022",
  },
  {
    title: "Senior Casino Associate",
    location: "Gothenburg, Sweden",
    description:
      "Led high-stakes casino operations in a fast-paced environment, handling financial transactions and customer disputes with accuracy and discretion. Developed a keen eye for detail and problem-solving by identifying fraudulent activities and preventing financial losses.",
    icon: React.createElement(BsBriefcase),
    date: "Oct 2018 -June 2024",
  },
  {
    title: "Casino Supervisor",
    location: "USA",
    description:
      "Ensured that casino games were managed in accordance with the company's policies and regulations. Oversaw players and dealers, reviewed cash-to-chip exchanges, resolved conflicts professionally.Trained and supervised staff, ensuring strict compliance with security protocols and gaming regulations.",
    icon: React.createElement(BsBriefcase),
    date: " ",
  },
] as const;

// Updated projectsData with additional information for Nexer projects

export const projectsData = [
  {
    heading: "Digital Travel Journal",
    subheading:
      "An interactive app for travel enthusiasts that combines map, API integrations, and customizable postcards. Awarded 'Best Final Project' at Medieinstitutet for its technical innovation and WCAG accessibility standards implementation.",
    techStack:
      "Next.js, TypeScript, Zustand, Tailwind CSS, Firebase, Mapbox API",
    imgSrc: "/DigitalTravelJournal.png",
    href: "https://digital-travel-journal-wnb8.vercel.app/",
    github: "https://github.com/CatAvadani/digital-travel-journal",
    isNexerProject: false,
  },
  {
    heading: "Nexer Email",
    subheading:
      "A professional project developed at Nexer Group for creating and managing responsive email campaigns. Built a complex system from scratch focusing on cross-client compatibility and accessibility.",
    techStack: "Next.js, TypeScript, Zustand, Scss, Cypress",
    imgSrc: "/Nexer_Email.png",
    href: "#",
    isNexerProject: true,
    modalDescription:
      "The Email Builder is a web-based tool that allows marketing teams to create responsive email campaigns. I contributed to developing this complex system from scratch with a focus on ensuring emails render correctly across different clients while maintaining accessibility standards.",
    highlights: [
      "Implemented preview system for visualizing email designs across different clients including Gmail and Outlook",
      "Engineered solutions for compatibility issues in email rendering to ensure consistent appearance",
      "Developed test-driven approach with Cypress for ensuring stability and preventing regressions",
      "Created accessible components according to WCAG standards for inclusive user experience",
    ],
  },
  {
    heading: "Boost App",
    subheading:
      "Contributed to a fitness tracking platform at Nexer Group by implementing a complete UI redesign and enhancing functionality. Transformed the user experience through modern design principles while ensuring cross-platform compatibility.",
    techStack: "React Native, Angular, TypeScript, Context API",
    imgSrc: "/Boost_App.png",
    href: "#",
    isNexerProject: true,
    modalDescription:
      "Boost App is a cross-platform fitness tracking application designed to promote health and activity among employees. I worked on redesigning key aspects of the user interface to improve usability and visual appeal, while ensuring seamless functionality across both mobile and web platforms.",
    highlights: [
      "Redesigned and implemented the competition section UI in the admin interface according to new Figma specifications",
      "Created new responsive layouts and interactive components that improved user engagement",
      "Resolved cross-platform synchronization issues between mobile app and web admin dashboard",
      "Implemented UI components with a focus on accessibility and visual consistency",
    ],
  },
  {
    heading: "TV MaZe",
    subheading:
      "A mobile application developed with React Native that allows users to search for TV shows, view detailed information, and manage favorites. Focuses on performance and user experience in a mobile context.",
    techStack: "React Native, TypeScript, Firebase, Tailwind CSS",
    imgSrc: "/TVMaze.png",
    github: "https://github.com/CatAvadani/tv-maze-react-native-app",
    href: "https://github.com/CatAvadani/tv-maze-react-native-app",
    isNexerProject: false,
  },
  {
    heading: "My Nutrition Plan",
    subheading:
      "A web application for exploring and saving recipes with search and filtering functionality. Demonstrates skills in API integration and responsive design.",
    techStack: "React, TypeScript, Styled Components, Edamam API",
    imgSrc: "/MyNutritionPlan.png",
    github: "https:github.com/CatAvadani/my-nutrition-plan",
    href: "https://my-nutrition-plan.vercel.app/",
    isNexerProject: false,
  },
];

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
