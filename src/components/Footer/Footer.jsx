import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2">Get In Touch</h1>
          <p className="text-sm md:text-xl text-gray-200">Feel free to reach out to me anytime!</p>
        </div>

        {/* Right Section: Links */}
        <ul className="flex flex-col gap-4 text-center md:text-left">
          <li className="flex items-center gap-3 hover:text-yellow-300 transition-all duration-300">
            <MdOutlineEmail size={24} />
            <a href="mailto:luzzadangol456@gmail.com" className="hover:underline">
              luzzadangol456@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-yellow-300 transition-all duration-300">
            <CiLinkedin size={24} />
            <a
              href="https://www.linkedin.com/in/luzza-dangol-b1b56a338/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/luzza-dangol-b1b56a338
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-yellow-300 transition-all duration-300">
            <FaGithub size={24} />
            <a
              href="https://github.com/luzza07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/luzza07
            </a>
          </li>
        </ul>
      </div>

     
    </footer>
  );
};

export default Footer;
