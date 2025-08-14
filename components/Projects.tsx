import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import Section from './Section';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group glass-panel rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] border border-transparent hover:border-cyan-400/50">
      <h3 className="text-xl font-bold font-orbitron text-cyan-400 mb-3">{project.title}</h3>
      <p className="text-gray-300 flex-grow mb-6">{project.description}</p>
      
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-400 mb-3">Key Technologies:</p>
        <div className="flex flex-wrap items-center gap-4">
            {project.techIcons.map((Icon, index) => (
                <Icon key={index} className="w-8 h-8 text-cyan-300 transition-all duration-300 group-hover:text-cyan-200 group-hover:scale-110" />
            ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-cyan-400/20">
        {project.tech.map((t) => (
          <span key={t} className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Core Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;