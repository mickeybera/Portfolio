import React from 'react';
import {
  FaReact, FaNodeJs, FaDatabase, FaPython,
  FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-white">
      {/* Heading with slide from left */}
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Text with fade & slight upward motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 leading-relaxed"
          >
            Hello! I'm a passionate and detail-oriented full-stack developer...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 leading-relaxed mt-4"
          >
            I've built projects ranging from a modern e-commerce platform...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 leading-relaxed mt-4"
          >
            When I'm not coding, you’ll find me experimenting with UI animations...
          </motion.p>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">Education</h3>
            <p className="text-white/80">
              I’m currently in my <span className="font-semibold text-white">3rd year</span> at the <span className="font-semibold text-white">GCELT</span>, Kolkata.
            </p>
          </motion.div>
        </motion.div>

        {/* College image with rotate-in effect */}
        <motion.div
          initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg backdrop-blur-xl bg-white/10 border border-white/20"
        >
          <img
            src="https://www.credenc.com/images/colleges/government-college-of-engineering-and-leather-technology-gcelt-saltlake.jpg"
            alt="GCELT"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">Skills</h3>

        {/* Skill grid with individual fade-ins */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {[
            { icon: <FaReact className="text-6xl text-cyan-400 mb-2" />, label: 'React.js', color: 'text-cyan-400' },
            { icon: <FaNodeJs className="text-6xl text-green-500 mb-2" />, label: 'Node.js', color: 'text-green-500' },
            { icon: <FaDatabase className="text-6xl text-emerald-400 mb-2" />, label: 'MongoDB', color: 'text-emerald-400' },
            { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" className="w-16 h-16 mb-2" />, label: 'Tailwind CSS', color: 'text-sky-400' },
            { icon: <FaPython className="text-6xl text-yellow-300 mb-2" />, label: 'Python', color: 'text-yellow-300' },
            { icon: <FaHtml5 className="text-6xl text-orange-500 mb-2" />, label: 'HTML5', color: 'text-orange-500' },
            { icon: <FaCss3Alt className="text-6xl text-blue-500 mb-2" />, label: 'CSS3', color: 'text-blue-500' },
            { icon: <FaJsSquare className="text-6xl text-yellow-300 mb-2" />, label: 'JavaScript', color: 'text-yellow-300' },
            { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express.js" className="w-16 h-16 object-contain mb-2" />, label: 'Express.js', color: 'text-gray-400' },
            { icon: <FaGitAlt className="text-6xl text-red-500 mb-2" />, label: 'Git', color: 'text-red-500' },
            { icon: <FaGithub className="text-6xl text-white mb-2" />, label: 'GitHub', color: 'text-white' },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition duration-300 hover:scale-110 hover:shadow-xl hover:border-white/30 hover:backdrop-blur-lg"
            >
              <div className={`transition-all duration-300 group-hover:shadow-[0_0_25px] group-hover:animate-pulse rounded-full p-3 ${skill.color}`}>
                {skill.icon}
              </div>
              <p className="mt-2 text-white/80 text-sm font-medium">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;

