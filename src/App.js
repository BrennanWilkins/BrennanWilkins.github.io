import React, { useRef, useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import TitleParticles from './components/TitleParticles/TitleParticles';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
  const skillsRef = useRef();
  const projRef = useRef();
  const contactRef = useRef();
  const [startSkillsAnim, setStartSkillsAnim] = useState(false);
  const [startContactAnim, setStartContactAnim] = useState(false);

  const scrollHandler = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (!startSkillsAnim && scrollTop >= skillsRef.current.getBoundingClientRect().top / 2) {
      setStartSkillsAnim(true);
    }
    if (scrollTop >= contactRef.current.getBoundingClientRect().top - 50) {
      setStartContactAnim(true);
      document.removeEventListener('scroll', scrollHandler);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  const manualScrollHandler = section => {
    switch (section) {
      case 'Skills': {
        const y = skillsRef.current.getBoundingClientRect().top + window.pageYOffset - 70;
        return window.scrollTo({ top: y, behavior: 'smooth' });
      }
      case 'Projects': {
        const y = projRef.current.getBoundingClientRect().top + window.pageYOffset - 70;
        return window.scrollTo({ top: y, behavior: 'smooth' });
      }
      case 'Contact': return contactRef.current.scrollIntoView({ behavior: 'smooth' });;
      default: return window.scrollTo({ top: 0, behavior: 'smooth' });;
    }
  };

  return (
    <div>
      <NavBar scroll={manualScrollHandler} />
      <TitleParticles scroll={manualScrollHandler} />
      <Skills ref={skillsRef} startAnim={startSkillsAnim} />
      <Projects ref={projRef} />
      <Contact ref={contactRef} startAnim={startContactAnim} />
    </div>
  );
};

export default App;
