import React, { useState } from 'react';
import Section from './Section';
import { GithubIcon, LinkedInIcon, EmailIcon, PhoneIcon } from './icons/SocialIcons';

const Contact: React.FC = () => {
    const socialLinks = [
        { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://www.linkedin.com/in/guntupalli-hrushikesh', target: '_blank' },
        { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/hrushi1111', target: '_blank' },
    ];

    const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        // In a real app, you'd handle the response here.
        // For this demo, we'll just show the success state.
        setStatus('submitted');
    };

    return (
        <Section id="contact" title="Connect With Me">
            <div className="glass-panel rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold font-orbitron text-white mb-4">Get in Touch</h3>
                        <p className="text-gray-400 mb-6">
                            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
                        </p>
                        
                        <div className="space-y-4 mb-6">
                            <a href="mailto:hrushikeshguntupalli03@gmail.com" className="flex items-center gap-4 group/contact">
                                <EmailIcon className="w-7 h-7 text-cyan-400 transition-transform duration-300 group-hover/contact:scale-110" />
                                <span className="text-gray-300 group-hover/contact:text-cyan-400 group-hover/contact:neon-text-cyan transition-colors duration-300">
                                    hrushikeshguntupalli03@gmail.com
                                </span>
                            </a>
                             <a href="tel:6309586238" className="flex items-center gap-4 group/contact">
                                <PhoneIcon className="w-7 h-7 text-cyan-400 transition-transform duration-300 group-hover/contact:scale-110" />
                                <span className="text-gray-300 group-hover/contact:text-cyan-400 group-hover/contact:neon-text-cyan transition-colors duration-300">
                                    6309586238
                                </span>
                            </a>
                        </div>
                        
                        <p className="text-gray-300 mb-4">Find me on:</p>
                        <div className="flex space-x-6 mb-8">
                            {socialLinks.map(({ name, icon: Icon, href, target }) => (
                                <a key={name} href={href} target={target} rel="noopener noreferrer" aria-label={name} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_var(--neon-cyan)]">
                                    <Icon className="w-8 h-8" />
                                </a>
                            ))}
                        </div>
                        <a
                           href="resume.html"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="self-start group relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                           <span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-75"></span>
                           <span className="absolute inset-0.5 rounded-lg bg-[#0a0a14]"></span>
                           <span className="relative transition-all duration-300 group-hover:neon-text-cyan">View Resume</span>
                        </a>
                    </div>

                    <div className="min-h-[350px] flex flex-col justify-center">
                        {status === 'submitted' ? (
                            <div className="text-center glass-panel rounded-lg p-8 flex flex-col items-center justify-center h-full animate-fade-in">
                                <h3 className="text-2xl font-bold font-orbitron text-cyan-400 neon-text-cyan">Thank You!</h3>
                                <p className="mt-4 text-gray-300">Your message has been received. I'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                                    <input type="text" name="name" id="name" required className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white" />
                                </div>
                                 <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                    <input type="email" name="email" id="email" required className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                                    <textarea name="message" id="message" rows={4} required className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"></textarea>
                                </div>
                                 <button type="submit" disabled={status === 'submitting'} className="w-full group relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed">
                                   <span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                                   <span className="absolute inset-0 rounded-lg bg-cyan-600 opacity-0 transition-opacity duration-300 group-hover:opacity-0"></span>
                                   <span className="relative">{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
             <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </Section>
    );
};

export default Contact;