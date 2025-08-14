
import React from 'react';
import Section from './Section';
import { LANGUAGES } from '../constants';

const Languages: React.FC = () => {
  return (
    <Section id="languages" title="Languages">
      <div className="glass-panel rounded-2xl p-8 max-w-lg mx-auto">
        <ul className="flex justify-center items-center gap-6 sm:gap-10">
          {LANGUAGES.map(lang => (
            <li key={lang} className="text-xl font-semibold text-white transition-all duration-300 hover:scale-110 neon-text-cyan-hover">
              {lang}
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        .neon-text-cyan-hover:hover {
          color: var(--neon-cyan);
          text-shadow: 0 0 3px var(--neon-cyan), 0 0 8px var(--neon-cyan);
        }
      `}</style>
    </Section>
  );
};

export default Languages;
