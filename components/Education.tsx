
import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import type { EducationItem } from '../types';

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => (
    <div className="relative pl-8 sm:pl-12 py-4 group">
        {/* Timeline stem */}
        <div className="absolute left-[7px] top-0 h-full w-0.5 bg-cyan-400/30"></div>
        {/* Timeline dot */}
        <div className="absolute left-0 top-6 w-4 h-4 bg-[#0a0a14] border-2 border-cyan-400 rounded-full transition-all duration-300 group-hover:scale-125 group-hover:bg-cyan-400"></div>
        <div className="transition-all duration-300 group-hover:translate-x-2">
            <p className="text-cyan-400 font-bold font-orbitron text-sm">{item.period}</p>
            <h3 className="text-xl font-bold text-white mt-1">{item.degree}</h3>
            <p className="text-gray-300">{item.institution}</p>
            <p className="text-gray-400 font-semibold">{item.details}</p>
        </div>
    </div>
);

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
        <div className="max-w-4xl mx-auto relative">
            <div className="space-y-8">
                {EDUCATION.map((item, index) => (
                    <EducationCard key={index} item={item} />
                ))}
            </div>
        </div>
    </Section>
  );
};

export default Education;
