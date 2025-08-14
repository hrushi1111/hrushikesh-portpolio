
import React from 'react';
import { SKILLS } from '../constants';
import type { Skill } from '../types';
import Section from './Section';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center glass-panel rounded-xl p-6 aspect-square transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
      <skill.icon className="w-16 h-16 md:w-20 md:h-20 text-cyan-400 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_var(--neon-cyan)]" />
      <p className="mt-4 text-center font-semibold text-white">{skill.name}</p>
      <div className="absolute bottom-full mb-2 w-max px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {skill.description}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-900"></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Arsenal">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
