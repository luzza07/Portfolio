import React from 'react';
import pp from '../../assets/pp.jpg';
import TextChanger from '../TextChanger';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex flex-col-reverse md:flex-row items-center justify-center p-6 md:p-20 overflow-hidden">
      
      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="flex flex-col flex-1 items-center md:items-start text-center md:text-left bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
          <TextChanger />
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-yellow-400 mt-4">
          Frontend Developer
        </h2>

        <p className="text-base md:text-lg text-gray-300 mt-6 leading-relaxed max-w-xl">
          I craft beautiful, responsive websites using modern frontend technologies. HTML, CSS, JavaScript, React, Tailwind — all to bring ideas to life with clean code and stunning designs.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.open('https://drive.google.com/uc?id=1CR3-mlr8DDj6ixssFsNdLJab2pwa6NuL&export=download', '_blank')
          }
          className="mt-8 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-yellow-400/50 transition duration-300"
        >
          Download My Resume
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.2 }} 
        className="flex flex-1 justify-center mb-10 md:mb-0"
      >
        <img
          src={pp}
          alt="Profile"
          className="rounded-full w-60 h-60 md:w-96 md:h-96 object-cover shadow-2xl hover:scale-105 transform transition duration-500 border-4 border-yellow-400"
        />
      </motion.div>

    </div>
  );
};

export default Home;
