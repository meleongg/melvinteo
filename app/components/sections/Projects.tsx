"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "🏆 expawdition",
    description:
      "An AI-powered trip-planning app delivering personalized itineraries that enhance user travel experiences. Awarded 1st place at Simon Fraser University Stormhacks 2023.",
    technologies: ["React", "Express", "Firebase", "Node.js", "Next.js"],
    github: "https://github.com/expawdition",
    live: undefined,
    image: "/images/expawdition.jpg",
  },
  {
    title: "liftz",
    description:
      "A personalized workout tracking app complete with a workout library, workout history calendar, visual plate calculator, and progress tracker.",
    technologies: ["React", "Express", "MongoDB", "Node.js", "Next.js"],
    github: undefined,
    live: "https://liftz-workout-tracker.vercel.app/",
    image: "/images/liftz.png",
  },
  {
    title: "phreview",
    description:
      "A Chrome extension designed to enhance foreign language proficiency through active recall, featuring customizable pop quizzes tailored to individual learning needs",
    technologies: ["Manifest V3", "HTML", "CSS", "JS"],
    github: undefined,
    live: "https://chromewebstore.google.com/detail/phreview-custom-language/fmdbfblejhabdfpejeemcedelgkdoggj?hl=en",
    image: "/images/phreview.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary-light dark:text-white mb-12">
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={384}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 grid gap-y-1 items-center min-h-96 md:min-h-0">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 h-10">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 h-20">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 h-10 place-items-center">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 h-10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-white"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-white"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
