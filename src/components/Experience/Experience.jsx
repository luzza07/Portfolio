
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiPhp, SiPython, SiMongodb, SiMysql, SiTailwindcss, SiNextdotjs, SiDjango, SiPostgresql } from 'react-icons/si';

const Experience = () => {
  return (
    <div id="experience" className="w-full bg-[#0f172a] text-white py-16 px-6 md:px-24">
      {/* Skills Section */}
      <section className="mb-16">
        <h1 className="mb-8 text-3xl font-bold text-center md:text-5xl">Skills</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Skill Icons */}
          {[ 
            { icon: <FaHtml5 color="#E34F26" size={50} /> },
            { icon: <FaCss3 color="#1572b6" size={50} /> },
            { icon: <FaJs color="#F7DF1E" size={50} /> },
            { icon: <FaReact color="#61DAFB" size={50} /> },
            { icon: <SiTailwindcss color="#38BDF8" size={50} /> },
            { icon: <SiPhp color="#777BB4" size={50} /> },
            { icon: <SiPython color="#3776AB" size={50} /> },
            { icon: <SiMongodb color="#47A248" size={50} /> },
            { icon: <SiMysql color="#00758F" size={50} /> },
            { icon: <SiNextdotjs color="white" size={50} /> },
            { icon: <SiDjango color="#092E20" size={50} /> },
            { icon: <SiPostgresql color="#336791" size={50} /> },
          ].map((item, index) => (
            <div key={index} className="p-4 transition-transform duration-300 shadow-md bg-white/10 rounded-2xl hover:scale-110">
              {item.icon}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h1 className="mb-8 text-3xl font-bold text-center md:text-5xl">Work Experience</h1>
        <div className="flex flex-col gap-8">
          {/* Job 1 */}
          <div className="p-6 transition-all shadow-md bg-white/10 rounded-2xl hover:bg-white/20">
            <h2 className="text-2xl font-semibold">Cloco Nepal Inc.</h2>
            <p className="mb-3 text-sm text-gray-400">Jan 2025 - April 2025</p>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Built web applications using HTML, CSS, JavaScript, TypeScript, Python, and Django.</li>
              <li>Created responsive UI using ShadCN components, integrated with PostgreSQL backend.</li>
              <li>Collaborated in a team environment using Git and GitHub workflows.</li>
              <li>Enhanced full-stack development skills with real-world project applications.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="p-6 transition-all shadow-md bg-white/10 rounded-2xl hover:bg-white/20">
            <h2 className="text-2xl font-semibold">Infography Technologies</h2>
            <p className="mb-3 text-sm text-gray-400">Dec 2024 - Jan 2025</p>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Developed mobile-friendly React and Next.js applications with responsive design.</li>
              <li>Handled state management and API integration using component-based architecture.</li>
              <li>Applied UI/UX best practices for clean and intuitive interfaces.</li>
            </ul>
          </div>
        </div>
      </section>

 
    </div>
  );
};

export default Experience;
