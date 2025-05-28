"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import {
  HiArrowLeft,
  HiChevronDown,
  HiDownload,
  HiExternalLink,
  HiMail,
  HiPhone,
} from "react-icons/hi";

// Expandable Section Component
interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
}

function ExpandableSection({
  title,
  children,
  isExpanded = false,
  onToggle,
}: ExpandableSectionProps) {
  return (
    <div className="mb-8">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-xl font-semibold text-blue-600 mb-5 uppercase tracking-wider hover:text-blue-700 transition-colors duration-300 group"
      >
        <div className="relative">
          {title}
          <span className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <HiChevronDown className="text-gray-500 group-hover:text-blue-600 transition-colors" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-4">{children}</div>
      </motion.div>
    </div>
  );
}

// Experience Item Component
interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  description: string;
  isInternship?: boolean;
}

function ExperienceItem({
  title,
  company,
  date,
  description,
  isInternship,
}: ExperienceItemProps) {
  return (
    <div className="mb-9 pb-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 p-4 rounded-lg transition-colors duration-300">
      <div className="flex flex-wrap justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-blue-600 font-medium">{company}</p>
          {isInternship && (
            <p className="text-gray-500 text-sm italic">Internship</p>
          )}
        </div>
        <span className="text-gray-600 text-sm whitespace-nowrap mt-1 sm:mt-0">
          {date}
        </span>
      </div>

      <div className="text-gray-700 leading-relaxed">
        <ul className="list-none space-y-2">
          {description.split(". ").map((sentence, index) => (
            <li key={index} className="relative pl-5">
              <span className="absolute left-0 top-2 w-2 h-2 bg-blue-600 rounded-full transform -translate-y-1/2"></span>
              {sentence.endsWith(".") ? sentence : sentence + "."}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Project Item Component
interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isNexerProject?: boolean;
  onNexerClick?: () => void;
}

function ProjectItem({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  isNexerProject,
  onNexerClick,
}: ProjectItemProps) {
  return (
    <div
      className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border-l-4 border-blue-600 hover:shadow-lg hover:border-blue-700 hover:from-blue-50/30 hover:to-purple-50/30 transition-all duration-300"
      onClick={isNexerProject ? onNexerClick : undefined}
      style={isNexerProject ? { cursor: "pointer" } : {}}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>

      {!isNexerProject && (
        <div className="mb-4">
          {liveUrl && (
            <a
              href={liveUrl}
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium mr-4 inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <HiExternalLink className="text-sm" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <FaGithub className="text-sm" />
            </a>
          )}
        </div>
      )}

      <p className="text-gray-700 leading-relaxed mb-4">{description}</p>

      {isNexerProject && (
        <p className="text-blue-600 font-medium text-sm italic">
          Nexer Group Project - Click for details
        </p>
      )}
    </div>
  );
}

// Skill Tag Component
function SkillTag({ skill }: { skill: string }) {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-violet-900 text-white px-3 py-2 rounded-full text-sm font-medium text-center hover:from-blue-400 hover:to-violet-800 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
      {skill}
    </div>
  );
}

// Education Item Component
interface EducationItemProps {
  title: string;
  school: string;
  date: string;
}

function EducationItem({ title, school, date }: EducationItemProps) {
  return (
    <div className="mb-6 p-5 bg-gray-50 rounded-xl border-l-4 border-blue-600 hover:shadow-md hover:border-blue-700 hover:bg-blue-50/30 transition-all duration-300">
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-blue-600 font-medium mb-1">{school}</p>
      <p className="text-gray-600 text-sm">{date}</p>
    </div>
  );
}

// Language Item Component
function LanguageItem({
  language,
  level,
}: {
  language: string;
  level: string;
}) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0 hover:bg-blue-50/30 px-2 rounded transition-colors duration-300">
      <span className="font-medium text-gray-800">{language}</span>
      <span className="text-blue-600 text-sm">{level}</span>
    </div>
  );
}

// Main Interactive CV Component
export default function InteractiveCV() {
  const locale = useLocale();
  const t = useTranslations("CV");
  const [showNexerModal, setShowNexerModal] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "about",
    "experience",
  ]);

  const cvUrl =
    locale === "en"
      ? "/cvPdf/Catalina_Avadani_CV_EN.pdf"
      : "/cvPdf/Catalina_Avadani_CV_SV.pdf";

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  // Get translations
  const experiences = t.raw("experiences") as Array<{
    title: string;
    company: string;
    date: string;
    description: string;
    skills: string[];
    isInternship: boolean;
  }>;

  const projects = t.raw("projects") as Array<{
    title: string;
    description: string;
    technologies: string[];
    isNexerProject: boolean;
    liveUrl?: string;
    githubUrl?: string;
  }>;

  const skills = t.raw("skills") as string[];
  const education = t.raw("education") as Array<{
    title: string;
    school: string;
    date: string;
  }>;
  const contact = t.raw("contact") as {
    email: string;
    phone: string;
    location: string;
  };

  const languages = t.raw("languages") as Array<{
    language: string;
    level: string;
  }>;

  const highlights = t.raw("highlights") as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 -mt-36">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <HiArrowLeft className="text-xl" />
              <span className="font-medium">{t("backToPortfolio")}</span>
            </Link>

            <a
              href={cvUrl}
              download
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-300 to-violet-900 hover:from-blue-400 hover:to-violet-800 text-white rounded-full transition-colors duration-300 shadow-sm"
            >
              <HiDownload className="text-sm" />
              <span className="text-sm font-medium">{t("downloadPDF")}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto my-5 bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-300 to-violet-900 text-white p-10 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <pattern
                  id="grain"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2.5" cy="2.5" r="1" fill="gray" opacity="0.1" />
                  <circle cx="7.5" cy="7.5" r="1" fill="gray" opacity="0.1" />
                  <circle cx="2.5" cy="7.5" r="1" fill="gray" opacity="0.05" />
                  <circle cx="7.5" cy="2.5" r="1" fill="gray" opacity="0.05" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grain)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl font-light mb-3">Catalina Avadani</h1>
            <p className="text-xl font-light opacity-90 mb-5">
              {t("jobTitle")}
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-5">
              <div className="flex items-center gap-2 hover:-translate-y-1 transition-transform">
                <span>
                  <HiMail className="text-2xl" />
                </span>
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center gap-2 hover:-translate-y-1 transition-transform">
                <span>
                  <HiPhone className="text-2xl" />
                </span>
                <span>{contact.phone}</span>
              </div>
              <a
                href="https://www.linkedin.com/in/catalinaava09/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:-translate-y-1 transition-transform"
              >
                <span>
                  <FaLinkedin className="text-2xl" />
                </span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/CatAvadani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:-translate-y-1 transition-transform"
              >
                <span>
                  <FaGithub className="text-2xl" />
                </span>
                <span>GitHub</span>
              </a>
              <Link
                href="/"
                className="flex items-center gap-2 hover:-translate-y-1 transition-transform"
              >
                <span>
                  <FaGlobe className="text-2xl" />
                </span>
                <span>Portfolio</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-0">
          {/* Sidebar */}
          <div className="lg:col-span-2 bg-gray-50 p-8 border-r border-gray-200">
            {/* Skills */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-blue-600 mb-5 uppercase tracking-wider relative">
                {t("sections.skills.title")}
                <span className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2  gap-2">
                {skills.map((skill, index) => (
                  <SkillTag key={index} skill={skill} />
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-blue-600 mb-5 uppercase tracking-wider relative">
                {t("sections.languages.title")}
                <span className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></span>
              </h2>
              <div>
                {languages.map((lang, index) => (
                  <LanguageItem
                    key={index}
                    language={lang.language}
                    level={lang.level}
                  />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl font-semibold text-blue-600 mb-5 uppercase tracking-wider relative">
                {t("sections.education.title")}
                <span className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></span>
              </h2>
              {education.map((edu, index) => (
                <EducationItem key={index} {...edu} />
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 p-8">
            {/* About Me - Expandable */}
            <ExpandableSection
              title={t("sections.about.title")}
              isExpanded={expandedSections.includes("about")}
              onToggle={() => toggleSection("about")}
            >
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {t("sections.about.content")
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>

              <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-violet-50 rounded-xl border border-blue-200/10">
                <h4 className="text-blue-600 font-semibold mb-3">
                  {t("whatIBring")}
                </h4>
                <ul className="space-y-2">
                  {highlights.map((item, index) => (
                    <li key={index} className="relative pl-5 text-gray-800">
                      <span className="absolute left-0 top-2 text-blue-600 font-bold">
                        ▸
                      </span>
                      <strong className="text-gray-800">{item.title}:</strong>{" "}
                      {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </ExpandableSection>

            {/* Work Experience - Expandable */}
            <ExpandableSection
              title={t("sections.experience.title")}
              isExpanded={expandedSections.includes("experience")}
              onToggle={() => toggleSection("experience")}
            >
              {experiences.map((exp, index) => (
                <ExperienceItem key={index} {...exp} />
              ))}
            </ExpandableSection>

            {/* Projects - Expandable */}
            <ExpandableSection
              title={t("sections.projects.title")}
              isExpanded={expandedSections.includes("projects")}
              onToggle={() => toggleSection("projects")}
            >
              {projects.map((project, index) => (
                <ProjectItem
                  key={index}
                  {...project}
                  technologies={project.technologies}
                  onNexerClick={() => setShowNexerModal(true)}
                />
              ))}
            </ExpandableSection>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-gray-600">
        <p className="mb-4">{t("interestedText")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${contact.email}`}
            className="px-8 py-3 bg-gradient-to-r from-blue-300 to-violet-900 hover:from-blue-400 hover:to-violet-800 text-white rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm"
          >
            <HiMail />
            {t("getInTouch")}
          </a>
          <Link
            href="/"
            className="px-8 py-3 bg-white border-2 border-blue-600/10 text-blue-600 hover:bg-blue-600/10 rounded-full font-medium transition-colors duration-300"
          >
            {t("viewPortfolio")}
          </Link>
        </div>
      </div>

      {/* Nexer Modal */}
      {showNexerModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowNexerModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {t("nexerModal.title")}
              </h3>
              <button
                onClick={() => setShowNexerModal(false)}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>{t("nexerModal.description")}</p>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-800">
                  {t("nexerModal.keyFeatures")}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {t
                    .raw("nexerModal.features")
                    .map((feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {["Next.js", "TypeScript", "Azure", "Cypress", "WCAG"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-blue-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
