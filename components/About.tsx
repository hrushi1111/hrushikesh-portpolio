
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
    const keyPoints = ['Python', 'AWS', 'Jenkins', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'MySQL', 'Prometheus', 'Grafana'];

    return (
        <Section id="about" title="Professional Summary">
            <div className="glass-panel rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-center leading-relaxed text-gray-300 mb-8">
                    Entry-level AWS DevOps Engineer with a strong foundation in cloud computing, automation, and infrastructure management. Proficient in AWS services, CI/CD pipeline development, and containerization. Experienced in streamlining deployment processes and enhancing system performance through internships and projects. Eager to contribute technical expertise and problem-solving abilities to a forward-thinking team.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    {keyPoints.map(point => (
                        <span key={point} className="px-4 py-2 text-sm font-medium text-cyan-300 border-2 border-cyan-400/50 rounded-full transition-all duration-300 hover:bg-cyan-400/20 hover:text-white hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]">
                            {point}
                        </span>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
