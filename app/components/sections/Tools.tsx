"use client";
import { motion } from "framer-motion";

const tools = [
  { name: "React", icon: "⚛️" },
  { name: "Vue", icon: "🌐" },
  { name: "Express", icon: "🛠️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Git", icon: "🐙" },
  { name: "Next.js", icon: "▲" },
  { name: "Firebase", icon: "🔥" },
  { name: "JUnit", icon: "✅" },
  { name: "Mockito", icon: "🧪" },
  { name: "Bash", icon: "💻" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Java", icon: "☕" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "📘" },
  { name: "Python", icon: "🐍" },
  { name: "HTML/CSS", icon: "🌐" },
  { name: "SQL", icon: "📊" },
  { name: "C/C++", icon: "🔤" },
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
              className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl mr-2">{tool.icon}</div>
              <span className="text-lg font-semibold text-gray-800 dark:text-white">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
