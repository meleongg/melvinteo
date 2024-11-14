"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-full border-4 border-primary-light dark:border-white">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold text-primary-light dark:text-white mb-6">
          Your Name
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Building elegant solutions to complex problems with modern
          technologies.
        </p>
      </motion.div>
    </section>
  );
}
