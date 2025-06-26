"use client"

import pp from "../../assets/pp.jpg"
import TextChanger from "../TextChanger"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="relative flex flex-col-reverse items-center justify-center w-full h-screen p-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:flex-row md:p-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-yellow-400/10 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-20 right-10 w-96 h-96 bg-blue-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-yellow-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center flex-1 p-8 text-center md:items-start md:text-left"
      >
        {/* Glass Card Container */}
        <div className="relative p-8 border shadow-2xl bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl md:p-12">
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-400/50 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-400/50 rounded-br-3xl"></div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-green-400 border rounded-full bg-green-500/20 border-green-500/30"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Available for Work
          </motion.div>

          {/* Main Heading with Enhanced Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-2 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl"
          >
            <TextChanger />
          </motion.h1>

          {/* Subtitle with Gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text md:text-4xl"
          >
            Frontend Developer
          </motion.h2>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-xl mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
          >
            I craft beautiful, responsive websites using modern frontend technologies.
            <span className="font-semibold text-yellow-400"> HTML, CSS, JavaScript, React, Tailwind</span> — all to
            bring ideas to life with clean code and stunning designs.
          </motion.p>

          {/* Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {["React", "JavaScript", "Tailwind", "HTML5", "CSS3"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium text-yellow-400 transition-colors duration-300 border rounded-full bg-yellow-400/10 border-yellow-400/20 hover:bg-yellow-400/20"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Enhanced Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://drive.google.com/uc?id=1CR3-mlr8DDj6ixssFsNdLJab2pwa6NuL&export=download",
                  "_blank",
                )
              }
              className="relative px-8 py-4 overflow-hidden font-bold transition-all duration-300 rounded-full shadow-lg group text-slate-900 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 hover:shadow-yellow-400/50"
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-400 group-hover:opacity-100"></div>

              {/* Button Content */}
              <span className="relative flex items-center gap-2">
                📄 Download My Resume
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-4 mt-8"
          >
            {[
              { icon: "💼", label: "LinkedIn" },
              { icon: "🐙", label: "GitHub" },
              { icon: "📧", label: "Email" },
            ].map((social) => (
              <motion.button
                key={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 text-xl transition-all duration-300 border rounded-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                title={social.label}
              >
                {social.icon}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section - Enhanced Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex justify-center flex-1 mb-10 md:mb-0"
      >
        {/* Decorative Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 md:w-[450px] md:h-[450px] border border-yellow-400/20 rounded-full animate-spin-slow"></div>
          <div className="absolute w-72 h-72 md:w-[400px] md:h-[400px] border border-blue-400/20 rounded-full animate-spin-reverse"></div>
        </div>

        {/* Profile Image Container */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/30 to-orange-400/30 blur-xl animate-pulse"></div>

          {/* Main Image */}
          <motion.img
            whileHover={{
              scale: 1.05,
              rotate: [0, 1, -1, 0],
            }}
            transition={{ duration: 0.3 }}
            src={pp}
            alt="Profile"
            className="relative z-10 object-cover border-4 rounded-full shadow-2xl border-gradient-to-r from-yellow-400 to-orange-400 w-60 h-60 md:w-96 md:h-96"
            style={{
              borderImage: "linear-gradient(45deg, #fbbf24, #f97316) 1",
            }}
          />

          {/* Floating Elements Around Image */}
          {[
            { emoji: "⚡", position: "top-4 right-4", delay: 0 },
            { emoji: "🚀", position: "bottom-4 left-4", delay: 1 },
            { emoji: "💡", position: "top-4 left-4", delay: 2 },
            { emoji: "🎯", position: "bottom-4 right-4", delay: 3 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`absolute ${item.position} w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-xl`}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: item.delay,
              }}
            >
              {item.emoji}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute flex flex-col items-center transform -translate-x-1/2 bottom-8 left-1/2 text-white/60"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="flex justify-center w-6 h-10 border-2 rounded-full border-white/30"
        >
          <div className="w-1 h-3 mt-2 rounded-full bg-white/60"></div>
        </motion.div>
      </motion.div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Home
