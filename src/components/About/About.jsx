

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

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
