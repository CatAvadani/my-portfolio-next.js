import Calendar from "@/public/CalendarImg.png";
import CruelNature from "@/public/CruelNature.png";
import MyNutritionPlan from "@/public/MyNutritionPlan.png";
import PiratesShip from "@/public/PiratesShip.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Senior Casino Associate",
    location: "Gothenburg, Sweden",
    description:
      "Ensured a positive customer experience, oversaw gaming activities, resolved disputes, managed financial transactions, and ensured compliance with regulatory requirements.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - present",
  },
  {
    title: "Android Developer - Internship",
    location: "Stendahls, Gothenburg",
    description:
      "Completed a two-month internship focused on Android development, gaining hands-on experience with technologies such as Android Studio, Kotlin, Jetpack Compose, Room Database, Git, and Retrofit Library.",
    icon: React.createElement(CgWorkAlt),
    date: "Okt - Dec 2022",
  },
  {
    title: "Casino Supervisor",
    location: "USA",
    description:
      "Ensured that casino games were managed in accordance with the company's policies and regulations. Oversaw players and dealers, reviewed cash-to-chip exchanges, resolved conflicts professionally, and handled personnel-related issues, including staff scheduling.",
    icon: React.createElement(FaReact),
    date: "2004 - 2017",
  },
] as const;

export const projectsData = [
  {
    title: "My Nutrition Plan",
    description:
      '"My Nutrition Plan" is a web application that allows users to search for recipes and manage their own nutrition plans.',
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    imageUrl: MyNutritionPlan,
  },
  {
    title: "Pirates of the Caribbean",
    description:
      '"Pirates of the Caribbean - Cursed Seas" is a basic interactive adventure game implemented in JavaScript. ',
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: PiratesShip,
  },
  {
    title: "Calendar",
    description:
      "Users can easily create and schedule todos, while a visually appealing interface showcases a todo list on the left and an interactive calendar on the right.",
    tags: ["Javascript"],
    imageUrl: Calendar,
  },
  {
    title: "Cruel Nature",
    description:
      "This is a School project where we did a remake of the classic game Bomber Man. We have used JS.p5 and TypeScript OOP to make this game and it has been a 4 week projekt.",
    tags: ["TypeScript", "p5.js"],
    imageUrl: CruelNature,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Figma",
  "UX/UI",
  "Agile Methodologies",
  "Kotlin",
  "Android",
] as const;
