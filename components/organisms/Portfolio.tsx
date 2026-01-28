"use client";

import { useState } from 'react';
import { projects, filters } from '../data/projectData';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filteredProjects = activeFilter === 'todos'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portafolio" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nuestro{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
              Portafolio
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Proyectos que demuestran nuestra experiencia y pasión por la excelencia
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeFilter === filter.id && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl"></div>
                  <div className="absolute inset-0 bg-purple-500 blur-lg opacity-50"></div>
                </>
              )}
              {activeFilter !== filter.id && (
                <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl transition-all duration-300"></div>
              )}
              <span className="relative z-10">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Card glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className="relative h-full bg-gray-900/90 backdrop-blur-sm border border-gray-800 group-hover:border-purple-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
                {/* Image placeholder */}
                <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-700 text-gray-400 text-xs rounded-lg group-hover:border-purple-500/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-16">
          <button className="relative group overflow-hidden px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-purple-500 blur-xl"></div>
            </div>
            <span className="relative z-10 text-white text-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              Ver Más Proyectos
            </span>
            <div className="absolute inset-0 border-2 border-pink-400/0 group-hover:border-pink-400/50 rounded-xl transition-all duration-300"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
