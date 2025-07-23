"use client";
import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary-light dark:text-white mb-8">
            About Me
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 space-y-4">
              I&apos;m a Software Engineer passionate about crafting
              productivity and organizational tools that simplify daily
              workflows. Recently, I&apos;ve developed a growing interest in
              natural language processing and computational linguistics,
              exploring how language technologies can enhance user experience
              and understanding.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Through internships, hackathons, and personal projects, I&apos;ve
              gained hands-on experience in Full-Stack Development while
              collaborating with designers, product managers, and engineers.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Outside of programming, you&apos;ll find me looking for my next
              travel destination, lifting weights at the gym, or playing
              volleyball with friends!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
