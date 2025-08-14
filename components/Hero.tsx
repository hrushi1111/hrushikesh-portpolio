
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center -mt-20">
            <div className="space-y-6">
                <h1 className={`font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl text-white transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Hrushikesh Guntupalli
                </h1>
                <p className={`font-light text-xl md:text-2xl text-cyan-400 neon-text-cyan transition-all duration-1000 ease-out delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Entry-level AWS DevOps Engineer
                </p>
                <p className={`max-w-3xl mx-auto text-lg md:text-xl text-gray-300 transition-all duration-1000 ease-out delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    "Building scalable, automated cloud solutions with precision and innovation"
                </p>
            </div>
             <div className={`absolute bottom-10 animate-bounce transition-opacity duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                <a href="#about" aria-label="Scroll down">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </a>
            </div>
        </section>
    );
};

export default Hero;