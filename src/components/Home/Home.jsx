"use client";

import pp from "../../assets/pp.jpg";
import TextChanger from "../TextChanger";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative flex flex-col-reverse items-center justify-center w-full h-screen p-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:flex-row md:p-20">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin-slow"></div>

        {/* Additional decorative elements */}
        <div className="absolute w-32 h-32 rounded-full top-10 right-20 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-2xl animate-bounce-slow"></div>
        <div className="absolute w-40 h-40 rounded-full bottom-32 left-20 bg-gradient-to-r from-green-400/10 to-emerald-400/10 blur-2xl animate-float"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `linear-gradient(45deg, ${
                ["#fbbf24", "#f97316", "#3b82f6", "#8b5cf6", "#10b981"][
                  Math.floor(Math.random() * 5)
                ]
              }40, ${
                ["#fbbf24", "#f97316", "#3b82f6", "#8b5cf6", "#10b981"][
                  Math.floor(Math.random() * 5)
                ]
              }80)`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Left Section - Enhanced */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center flex-1 p-8 text-center md:items-start md:text-left"
      >
        {/* Enhanced Glass Card Container */}
        <div className="relative p-8 transition-all duration-500 border shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-white/20 rounded-3xl md:p-12 hover:border-white/30">
          {/* Enhanced Decorative Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-gradient-to-r from-yellow-400 to-orange-400 rounded-tl-3xl opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-gradient-to-r from-blue-400 to-purple-400 rounded-br-3xl opacity-60"></div>

          {/* Animated corner dots */}
          <div className="absolute w-2 h-2 bg-yellow-400 rounded-full top-4 right-4 animate-ping"></div>
          <div
            className="absolute w-2 h-2 bg-blue-400 rounded-full bottom-4 left-4 animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Enhanced Status Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 mb-6 text-sm font-semibold text-green-400 border rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/40 backdrop-blur-sm"
          >
            <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg animate-pulse shadow-green-400/50"></div>
            Available for Work
            <div className="w-1 h-1 rounded-full bg-green-400/60 animate-bounce"></div>
          </motion.div> */}

          {/* Enhanced Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
              <TextChanger />
            </h1>
          </motion.div>

          {/* Enhanced Subtitle */}
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
            I craft beautiful, responsive websites using modern frontend
            technologies.
            <span className="font-semibold text-yellow-400">
              {" "}
              HTML, CSS, JavaScript, React, Tailwind
            </span>{" "}
            — all to bring ideas to life with clean code and stunning designs.
          </motion.p>

          {/* Enhanced Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {[
              { name: "React", color: "from-blue-400 to-cyan-400" },
              { name: "JavaScript", color: "from-yellow-400 to-orange-400" },
              { name: "Tailwind", color: "from-cyan-400 to-blue-400" },
              { name: "HTML5", color: "from-orange-400 to-red-400" },
              { name: "CSS3", color: "from-blue-400 to-purple-400" },
            ].map((skill) => (
              <motion.span
                key={skill.name}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r ${skill.color} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-default`}
              >
                {skill.name}
              </motion.span>
            ))}
          </motion.div>

          {/* Enhanced Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(251, 191, 36, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://drive.google.com/uc?id=1CR3-mlr8DDj6ixssFsNdLJab2pwa6NuL&export=download",
                  "_blank"
                )
              }
              className="relative px-10 py-4 overflow-hidden font-bold transition-all duration-300 rounded-full shadow-xl group text-slate-900 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 hover:shadow-yellow-400/60"
            >
              {/* Enhanced Button Background Animation */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-400 group-hover:opacity-100"></div>

              {/* Button shine effect */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </div>

              {/* Button Content */}
              <span className="relative flex items-center gap-3 text-lg">
                <span className="text-2xl">📄</span>
                Download My Resume
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="text-xl"
                >
                  →
                </motion.span>
              </span>
            </motion.button>
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
        {/* Profile Image Container */}
        <div className="relative">
          {/* Main Image */}
          <motion.img
            whileHover={{
              scale: 1.08,
              rotate: [0, 2, -2, 0],
            }}
            transition={{ duration: 0.4 }}
            src={pp}
            alt="Profile"
            className="relative z-10 object-cover border-4 rounded-full shadow-2xl w-60 h-60 md:w-96 md:h-96 border-gradient-to-r from-yellow-400 to-orange-400"
          />
        </div>
      </motion.div>

      {/* Custom CSS for enhanced animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
