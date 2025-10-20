// components/Projects.tsx
"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "House Rental Service",
    image: "/nikitara.png",
    url: "https://nikitara.com",
    description:
      "Πλατφόρμα εύρεσης και ενοικίασης κατοικιών με προηγμένη αναζήτηση και φίλτρα για ιδιοκτήτες και ενοικιαστές.",
  },
  {
    title: "Car Rental Brocker",
    image: "/karpadu.jpg",
    url: "https://karpadu.com",
    description:
      "Online εφαρμογή ενοικίασης αυτοκινήτων με εύκολη κράτηση, σύγκριση τιμών και real-time διαθεσιμότητα.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-16
                     bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600
                     bg-clip-text text-transparent"
        >
          Our Projects
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
