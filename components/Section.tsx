
import React from 'react';
import type { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  
  return (
    <section id={id} ref={ref} className="py-20 lg:py-32">
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-center mb-12 lg:mb-16">
          <span className="text-white relative">
            {title}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-cyan-400 rounded-full neon-glow-cyan"></span>
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
