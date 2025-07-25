"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Flashlearn",
    description:
      "A full-stack language learning app enabling users to create AI-generated flashcards with translations, examples, grammar notes, and Mandarin Pinyin support",
    technologies: [
      "Next.js",
      "NeonDB",
      "Tailwind CSS",
      "TypeScript",
      "FastAPI",
    ],
    github: "https://github.com/meleongg/flashcard-frontend",
    live: "https://flashcard-frontend-one.vercel.app/",
    image: "/images/flashlearn.png",
  },
  {
    title: "Fitflow",
    description:
      "A full-stack fitness tracking app helping users log workouts, track progress, and visualize performance trends with an intuitive and responsive UI.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/fitflow",
    live: "https://fitflow-pi.vercel.app/",
    image: "/images/fitflow.png",
  },
  {
    title: "Holistic Health Tracker",
    description:
      "An AI-powered health management app that helps users track both pharmaceutical and lifestyle treatments, ensuring adherence to complete treatment plans.",
    technologies: ["Next.js", "Supabase", "Firebase", "TypeScript", "OpenAI"],
    github: "https://github.com/holistic-health-tracker",
    live: "https://holistic-health-tracker.vercel.app/",
    image: "/images/holistic-health-tracker.png",
  },
  {
    title: "AI News Summarizer",
    description:
      "An AI-driven news summarization and sentiment analysis tool that fetches news articles, condenses them using NLP models, and provides sentiment insights to help users stay informed at a glance.",
    technologies: ["FastAPI", "Hugging Face", "NLTK", "TypeScript", "Next.js"],
    github: "https://github.com/news-summarizer-frontend",
    live: "https://news-summarizer-frontend.vercel.app/",
    image: "/images/ai-news-summarizer.png",
  },
  {
    title: "HackerHare",
    description:
      "A Chrome extension that deliberately hinders form filling (e.g., enforcing calendar-only date selection) to slow down sensitive data entry and promote user mindfulness",
    technologies: ["Chrome Manifest V3", "HTML", "CSS"],
    github: "https://github.com/DonaldKLee/Stormhacks-2024",
    live: "https://stormhacks-2024-site.vercel.app/",
    image: "/images/hackerhare.png",
  },
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
      "A Chrome extension designed to enhance foreign language proficiency through active recall, featuring customizable pop quizzes tailored to individual learning needs.",
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
