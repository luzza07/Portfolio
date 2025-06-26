
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id='projects' className='relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0b15] to-[#1a1d36] overflow-hidden'>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute w-40 h-40 bg-indigo-600 rounded-full top-20 left-10 filter blur-3xl opacity-30"></div>
        <div className="absolute bg-purple-600 rounded-full bottom-10 right-20 w-60 h-60 filter blur-3xl opacity-20"></div>
      </div>
      
      <div className='relative mx-auto max-w-7xl'>
        {/* Section Header */}
        <div className='mb-16 text-center'>
          <h1 className='mb-4 text-3xl font-bold text-transparent sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500'>
            My Projects
          </h1>
          <p className='max-w-2xl mx-auto text-lg text-slate-300'>
            Here are some of my featured works. Each project represents unique challenges and solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <ProjectCard 
            title="Artist Management System"
            main='Java-based desktop application for vendors to track inventory levels with product management, stock monitoring, and reporting features.'
            sourceCodeLink="https://github.com/luzza07/InventoryManagementSystem"
            demoLink="#"
            techStack={['Next.js', 'Django', 'Postgres']}
          />
            <ProjectCard 
            title="Online Learning Platform"
            main='Java-based desktop application for vendors to track inventory levels with product management, stock monitoring, and reporting features.'
            sourceCodeLink="https://github.com/luzza07/InventoryManagementSystem"
            demoLink="#"
            techStack={['Next.js', 'MaterialUI']}
          />
          <ProjectCard 
            title="Inventory Management System"
            main='Java-based desktop application for vendors to track inventory levels with product management, stock monitoring, and reporting features.'
            sourceCodeLink="https://github.com/luzza07/InventoryManagementSystem"
            demoLink="#"
            techStack={['Java', 'Swing', 'MySQL']}
          />
          
          <ProjectCard 
            title="Sneakers Point"
            main='C-based console application implementing a shopping experience with product selection, cart functionality, and billing system.'
            sourceCodeLink="https://github.com/luzza07/Sneakers-Point"
            demoLink="#"
            techStack={['C', 'Data Structures']}
          />
          
          <ProjectCard
            title="Hukut.com - QA Automation"
            main="Implemented end-to-end automated tests using Playwright to ensure application functionality and performance with comprehensive test coverage."
            sourceCodeLink="https://github.com/luzza07/Hukut.com-QA-automation-Testing"
            demoLink="#"
            techStack={['Playwright', 'JavaScript', 'QA Automation']}
          />
          
          <ProjectCard
            title="Drug Classification"
            main="Machine learning model for drug classification using Python libraries including Pandas, Scikit-learn, and Matplotlib for data analysis."
            sourceCodeLink="https://github.com/luzza07/Drug-Classification"
            demoLink="#"
            techStack={['Python', 'Machine Learning', 'Pandas']}
          />
          
          {/* Optional: Add more project cards or a "View More" button */}
          <div className="flex items-center justify-center sm:col-span-2 lg:col-span-1">
            <button className="px-6 py-3 font-medium text-indigo-400 transition-all duration-300 border-2 border-indigo-500 rounded-lg hover:bg-indigo-500/10 hover:scale-105">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;