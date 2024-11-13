"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Company Name",
    position: "Senior Developer",
    period: "2020 - Present",
    description: "Led development of...",
  },
  // Add more experiences
];

export function Experience() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
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
