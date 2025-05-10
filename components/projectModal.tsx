"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    // Save the current overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Prevent scrolling on the body
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-100/30  backdrop-blur-lg "
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-white/30  backdrop-blur-3xl dark:bg-gray-900 rounded-xl max-w-5xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={handleModalClick}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            {project.heading}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Company and Role */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="font-medium text-purple-600 dark:text-purple-400">
                Nexer Group
              </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-600 dark:text-gray-300">
                Frontend Developer Intern
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              September 2024 - April 2025
            </p>
          </div>

          {/* Project Description */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Project Overview
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.modalDescription || project.subheading}
            </p>
            {project.additionalDescription && (
              <p className="text-gray-700 dark:text-gray-300">
                {project.additionalDescription}
              </p>
            )}
          </div>

          {/* My Contribution */}
          {project.highlights && (
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                My Contribution
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                {project.highlights.map((highlight: string, index: number) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack
                .split(", ")
                .map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 shadow-sm text-gray-500 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>

          {/* Confidentiality Notice */}
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300 italic">
              This project was completed during my internship at Nexer Group.
              Due to confidentiality agreements, source code and detailed
              screenshots cannot be shared publicly. I'm happy to discuss the
              technical details further in an interview setting.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md transition-colors text-gray-800 dark:text-gray-200"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
