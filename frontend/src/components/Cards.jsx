import React from 'react';
import { motion } from 'framer-motion';
import phto1 from '/p1.png'
import phto2 from '/p2.png'
const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-featured e-commerce platform with secure payment gateway integration.",
    imageUrl:phto2,
    link: "https://foreverbuy.in",
    sourceCode: "https://github.com/yourusername/ecommerce-site"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React showcasing my projects and skills.",
    imageUrl:phto1,
    link: "https://arpandev-nine.vercel.app/",
    sourceCode: "https://github.com/yourusername/portfolio"
  }
];

const Cards = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="backdrop-blur-3xl bg-slate-900/10 border border-white/20 rounded-2xl shadow-lg overflow-hidden transition hover:shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <img
            className="w-full h-48 object-cover"
            src={project.imageUrl}
            alt={project.title}
          />
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-white/80 text-sm mb-4">{project.description}</p>
            <div className="flex gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition"
              >
                View Project
              </a>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition"
              >
                View Source Code
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
