"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Amazon",
    position: "Software Engineering Intern",
    period: "May - August 2024",
    description:
      "Built a new React application managing millions of Prime customer states.",
  },
  {
    company: "Amazon",
    position: "Software Engineering Intern",
    period: "May - August 2023",
    description: "Streamlined the Amazon Prime account cancellation pipeline.",
  },
  {
    company: "Amazon",
    position: "Future Engineer Intern",
    period: "May - August 2022",
    description:
      "Developed Prime customer retention emails and personalized widgets.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary-light dark:text-white mb-12">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-primary-light dark:border-gray-600"
            >
              <div className="absolute w-4 h-4 bg-primary-light dark:bg-gray-600 rounded-full -left-[9px] top-0" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {exp.position}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {exp.period}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
