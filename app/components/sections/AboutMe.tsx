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
            <p className="text-gray-600 dark:text-gray-300">
              {/* Customize your about me text */}
              I&apos;m a passionate developer with X years of experience in
              building web applications. My journey in software development
              began with... [Your story here]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
