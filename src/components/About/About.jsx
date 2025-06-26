

const About = () => {
  return (
    <div id="about" className="w-full bg-[#0f172a] text-white py-16 px-6 md:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="mb-12 text-4xl font-bold text-center md:text-5xl">About Me</h2>

        {/* Flexbox Container */}
        <div className="flex flex-col items-start gap-16 md:flex-row">
          
          {/* Left: Frontend Developer Section */}
          <div className="space-y-6 md:w-1/2">
            <h3 className="text-3xl font-bold text-yellow-400">Frontend Developer</h3>
            <p className="text-lg leading-relaxed text-gray-300">
              I am a creative and detail-oriented Frontend Developer with expertise in <span className="font-semibold text-white">HTML, CSS, JavaScript, React, and Tailwind</span>.
              Passionate about building responsive, user-friendly websites with clean, modern designs. 
              I focus on creating seamless user interfaces and ensuring top-notch performance across all devices.
              I'm committed to continuous learning and staying updated with the latest technologies and web trends.
            </p>
          </div>

          {/* Right: Education Section */}
          <div className="space-y-8 md:w-1/2">
            <h3 className="text-3xl font-bold text-yellow-400">Education</h3>
            
            <div className="space-y-4">
              <div className="p-5 transition bg-white/10 rounded-xl hover:bg-white/20">
                <h4 className="text-xl font-semibold">Bachelors of Information Management</h4>
                <p className="text-gray-400">National College of Computer Studies (TU) | 2020 - Ongoing</p>
              </div>

              <div className="p-5 transition bg-white/10 rounded-xl hover:bg-white/20">
                <h4 className="text-xl font-semibold">Higher Secondary Examination Board</h4>
                <p className="text-gray-400">National College of Computer Studies (Management) | 2018 - 2020</p>
              </div>

              <div className="p-5 transition bg-white/10 rounded-xl hover:bg-white/20">
                <h4 className="text-xl font-semibold">Secondary Education Examination</h4>
                <p className="text-gray-400">Whitefield Higher Secondary School | 2005 - 2018</p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  degree: "Bachelors of Information Management",
                  institution: "National College of Computer Studies (TU)",
                  period: "2020 - 2025",
                  status: "current",
                  icon: "🎓",
                },
                {
                  degree: "Higher Secondary Examination Board",
                  institution: "National College of Computer Studies (Management)",
                  period: "2018 - 2020",
                  status: "completed",
                  icon: "📚",
                },
                {
                  degree: "Secondary Education Examination",
                  institution: "Whitefield Higher Secondary School",
                  period: "2005 - 2018",
                  status: "completed",
                  icon: "🏫",
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] shadow-lg hover:shadow-2xl"
                >
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4">
                    {edu.status === "current" ? (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-green-400">Current</span>
                      </div>
                    ) : (
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="mb-3 text-2xl">{edu.icon}</div>

                  {/* Content */}
                  <h4 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-yellow-300">
                    {edu.degree}
                  </h4>
                  <p className="mb-1 font-medium text-gray-400">{edu.institution}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 text-gray-500">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 bg-gradient-to-r from-blue-400 to-purple-400 rounded-b-2xl group-hover:w-full"></div>
                </div>
              ))}
            </div>

            {/* Achievement Badge */}
            <div className="p-4 mt-8 border bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border-yellow-400/20 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🏆</div>
                <div>
                  <h4 className="font-semibold text-yellow-300">Academic Excellence</h4>
                  <p className="text-sm text-gray-400">Consistently maintaining high academic standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div
              className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
