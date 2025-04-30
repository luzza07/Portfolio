import React from 'react';

const ProjectCard = ({ title, sourceCodeLink, main, imageUrl, demoLink }) => {
  return (
    <div className="group relative flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md bg-gradient-to-br from-[#0c0e19] to-[#1a1d36] rounded-xl overflow-hidden shadow-lg hover:shadow-xl shadow-slate-900/50 hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 border border-slate-800 hover:border-indigo-500/30">
      {/* Image placeholder - replace with your actual image */}
      <div className="h-48 bg-gradient-to-br from-blue-900/80 to-purple-900/80 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="text-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6l.586-.586a2 2 0 012.828 0L20 8m-6-6l-1.586 1.586a2 2 0 01-2.828 0L4 8" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mb-2">
          {title}
        </h3>
        
        <p className="text-slate-300 text-sm md:text-base mb-4 flex-1">
          {main}
        </p>

        <div className="flex flex-wrap gap-3 mt-auto">
          {demoLink && (
            <button
              onClick={() => window.open(demoLink, '_blank')}
              className="flex-1 min-w-[120px] px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Live Demo
            </button>
          )}
          
          <button
            onClick={() => window.open(sourceCodeLink, '_blank')}
            className="flex-1 min-w-[120px] px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10 flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Source Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;