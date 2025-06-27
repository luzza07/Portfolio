"use client"

import { motion } from "framer-motion"

const Experience = () => {
  const skills = [
    { name: "HTML5", category: "Frontend", level: 90 },
    { name: "CSS3", category: "Frontend", level: 85 },
    { name: "JavaScript", category: "Frontend", level: 88 },
    { name: "React", category: "Frontend", level: 85 },
    { name: "Tailwind CSS", category: "Frontend", level: 90 },
    { name: "Next.js", category: "Frontend", level: 80 },
    { name: "PHP", category: "Backend", level: 75 },
    { name: "Python", category: "Backend", level: 80 },
    { name: "Django", category: "Backend", level: 75 },
    { name: "MongoDB", category: "Database", level: 70 },
    { name: "MySQL", category: "Database", level: 75 },
    { name: "PostgreSQL", category: "Database", level: 70 },
  ]

  const experiences = [
    {
      company: "Cloco Nepal Inc.",
      period: "Jan 2025 - April 2025",
      role: "Full Stack Developer",
      description:
        "Built web applications using HTML, CSS, JavaScript, TypeScript, Python, and Django. Created responsive UI using ShadCN components, integrated with PostgreSQL backend. Collaborated in a team environment using Git and GitHub workflows.",
      tags: ["Django", "PostgreSQL", "TypeScript", "ShadCN"],
    },
    {
      company: "Infography Technologies",
      period: "Dec 2024 - Jan 2025",
      role: "Frontend Developer",
      description:
        "Developed mobile-friendly React and Next.js applications with responsive design. Handled state management and API integration using component-based architecture.",
      tags: ["React", "Next.js", "UI/UX", "API Integration"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div
      id="experience"
      className="w-full px-6 py-20 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Skills Section */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
              Skills & Expertise
            </h1>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {["Frontend", "Backend", "Database"].map((category) => (
              <div key={category} className="p-6 border bg-white/5 backdrop-blur-sm rounded-2xl border-white/10">
                <h3 className="mb-6 text-xl font-semibold text-center text-gray-200">{category}</h3>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <div key={index} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                          <span className="text-xs text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text">
              Work Experience
            </h1>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-cyan-500 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute z-10 w-4 h-4 transform rounded-full left-4 md:left-1/2 bg-gradient-to-r from-emerald-400 to-cyan-500 md:-translate-x-1/2"></div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                  >
                    <div className="p-6 transition-all duration-300 border bg-white/5 backdrop-blur-sm rounded-2xl border-white/10 hover:bg-white/10 group">
                      <div className="flex flex-col mb-3 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-xl font-bold text-white transition-colors group-hover:text-emerald-400">
                          {exp.company}
                        </h2>
                        <span className="text-sm font-medium text-emerald-400">{exp.period}</span>
                      </div>

                      <h3 className="mb-3 text-lg font-semibold text-gray-300">{exp.role}</h3>

                      <p className="mb-4 leading-relaxed text-gray-400">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-medium border rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border-emerald-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Bottom Decoration */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-gray-400"></div>
            <span className="text-sm font-medium">Always Learning, Always Growing</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-gray-400"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
