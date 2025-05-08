import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="min-h-[700px] max-w-6xl mx-auto grid place-content-center text-white">
        {/* Avatar + Availability */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://img.freepik.com/free-photo/medium-shot-jesus-christ-with-laptop_23-2150972089.jpg?uid=R111781453&ga=GA1.1.688553247.1746132032&semt=ais_hybrid&w=740"
            alt="Profile"
            className="h-20 rounded-full shadow-md"
          />
          <span className="leading-none border border-gray-600 rounded px-3 py-1 text-sm text-neutral-200 bg-slate-950 flex items-center gap-2 mt-2">
            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
            Available for new projects
          </span>
        </motion.div>

        {/* Heading + Description */}
        <motion.div
          className="text-center my-5 space-y-3"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-t from-green-700 to-green-50 bg-clip-text text-transparent">
            Building Exceptional
            <br />
            User Experiences
          </h1>
          <p className="max-w-md mx-auto text-neutral-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sint porro itaque neque, rerum iste fugiat ipsam omnis et assumenda ad similique possimus consequuntur quas voluptas cum.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="px-4 py-2 border rounded-lg border-neutral-500 text-neutral-200 hover:bg-white/10 transition">
            Explore my work
          </button>
          <button className="px-4 py-2 rounded-lg bg-neutral-200 text-black hover:bg-neutral-300 transition">
            🙋‍♂️ Let's connect
          </button>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
