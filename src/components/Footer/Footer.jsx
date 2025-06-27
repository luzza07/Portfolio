import { MdOutlineEmail } from "react-icons/md"
import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="relative w-full px-6 py-16 overflow-hidden text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-32 h-32 rounded-full top-10 left-10 bg-gradient-to-r from-blue-400 to-purple-500 blur-3xl animate-pulse"></div>
        <div
          className="absolute w-40 h-40 rounded-full bottom-10 right-10 bg-gradient-to-r from-yellow-400 to-orange-500 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-gradient-to-r from-green-400 to-blue-500 blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          {/* Left Section */}
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-block">
              <h1 className="mb-2 text-4xl font-extrabold text-transparent md:text-6xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text">
                Get In Touch
              </h1>
              <div className="w-full h-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-gray-300 md:text-xl">
              Ready to collaborate? Let's create something amazing together!
            </p>

            {/* Call to Action */}
            <div className="mt-6">
              <button className="px-8 py-3 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-blue-500/25 hover:scale-105">
                Start a Conversation
              </button>
            </div>
          </div>

          {/* Right Section: Contact Cards */}
          <div className="w-full space-y-6 md:w-auto">
            {[
              {
                icon: <MdOutlineEmail size={28} />,
                label: "Email",
                value: "luzzadangol456@gmail.com",
                href: "mailto:luzzadangol456@gmail.com",
                gradient: "from-red-400 to-pink-500",
                hoverColor: "hover:text-red-300",
              },
              {
                icon: <CiLinkedin size={28} />,
                label: "LinkedIn",
                value: "Connect with me",
                href: "https://www.linkedin.com/in/luzza-dangol-b1b56a338/",
                gradient: "from-blue-400 to-blue-600",
                hoverColor: "hover:text-blue-300",
              },
              {
                icon: <FaGithub size={28} />,
                label: "GitHub",
                value: "View my projects",
                href: "https://github.com/luzza07",
                gradient: "from-gray-400 to-gray-600",
                hoverColor: "hover:text-gray-300",
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel={contact.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                className="block group"
              >
                <div className="flex items-center gap-4 p-6 transition-all duration-500 border shadow-lg bg-white/5 backdrop-blur-sm rounded-2xl border-white/10 hover:border-white/20 hover:transform hover:scale-105 hover:bg-white/10 hover:shadow-2xl">
                  {/* Icon with gradient background */}
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${contact.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="text-white">{contact.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-yellow-300">
                      {contact.label}
                    </h3>
                    <p className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                      {contact.value}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      

        {/* Decorative Bottom Element */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
