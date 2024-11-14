"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative">
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
          Melvin Teo
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
          Software Engineer
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Passionate about learning new technologies and solving challenging
          problems!
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center text-gray-400 dark:text-gray-500"
          >
            <div className="text-base md:text-lg mb-3 font-medium">
              Scroll Down
            </div>
            <svg
              className="w-8 h-8 md:w-10 md:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
