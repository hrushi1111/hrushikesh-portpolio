
import React from 'react';
import Section from './Section';
import { CERTIFICATES } from '../constants';

const Certificates: React.FC = () => {
    return (
        <Section id="certificates" title="Certifications">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
                {CERTIFICATES.map(cert => (
                    <div key={cert.name} className="glass-panel rounded-lg p-6 text-center flex-1 w-full flex items-center justify-center gap-4 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Certificates;
