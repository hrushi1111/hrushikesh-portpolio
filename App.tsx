
import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Languages from './components/Languages';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a14] text-gray-300 min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Certificates />
          <Languages />
          <Contact />
        </main>
        <footer className="text-center py-8 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Hrushikesh Guntupalli. All rights reserved.</p>
          <p>Designed with a futuristic vision.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
