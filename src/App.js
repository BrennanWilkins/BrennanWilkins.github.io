import React, { useRef } from 'react';
import NavBar from './components/NavBar/NavBar';
import TitleParticles from './components/TitleParticles/TitleParticles';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
  const skillsRef = useRef();
  const projsRef = useRef();
  const contactRef = useRef();

  const scrollHandler = section => {
    switch (section) {
      case 'Skills': {
        const y = skillsRef.current.getBoundingClientRect().top + window.pageYOffset - 70;
        return window.scrollTo({ top: y, behavior: 'smooth' });
      }
      case 'Projects': {
        const y = projsRef.current.getBoundingClientRect().top + window.pageYOffset - 70;
        return window.scrollTo({ top: y, behavior: 'smooth' });
      }
      case 'Contact': {
        return contactRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      default: return window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <NavBar scroll={scrollHandler} />
      <TitleParticles scroll={scrollHandler} />
      <Skills ref={skillsRef} />
      <Projects ref={projsRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default App;
