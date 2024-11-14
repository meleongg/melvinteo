"use client";
import { motion } from "framer-motion";

const tools = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Next.js", icon: "▲" },
  // Add more tools as needed
];

export function Tools() {
  return (
    <section id="tools" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary-light dark:text-white mb-12">
          Tools & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {tool.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
