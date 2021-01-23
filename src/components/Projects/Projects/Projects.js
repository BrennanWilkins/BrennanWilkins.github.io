import React, { useState, Suspense, useRef, useEffect } from 'react';
import classes from './Projects.module.css';
import Project from '../Project/Project';
import projInfo from '../projectInfo';
import Fallback from '../LoadingFallback/LoadingFallback';
const SlideShowModal = React.lazy(() => import('../SlideShowModal/SlideShowModal'));

const Projects = React.forwardRef((props, containerRef) => {
  const [slideShowProject, setSlideShowProject] = useState('');
  const [startAnims, setStartAnims] = useState({});
  const projRefs = useRef([]);

  const scrollHandler = () => {
    let totComplete = 0;
    for (let i = 0; i < projRefs.current.length; i++) {
      let projRect = projRefs.current[i].getBoundingClientRect();
      // if project starting to be shown in viewport for first time then start animation
      if (projRect.top + projRect.height / 8 <= window.innerHeight && !startAnims[i]) {
        totComplete++;
        setStartAnims(prev => ({ ...prev, [i]: true }));
      }
    }
    // if all projects animated then remove scroll listener
    if (totComplete === projRefs.current.length) {
      document.removeEventListener('scroll', scrollHandler);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <>
      <div ref={containerRef} className={classes.Container}>
        <h1>Projects</h1>
        {projInfo.map((info, i) => (
          <Project key={info.alt} ref={el => projRefs.current[i] = el} {...info}
          toggleSlideShow={() => setSlideShowProject(info.alt)} startAnim={!!startAnims[i]} />
        ))}
      </div>
      {slideShowProject && <Suspense fallback={<Fallback />}><SlideShowModal projectTitle={slideShowProject} close={() => setSlideShowProject('')} /></Suspense>}
    </>
  );
});

export default Projects;
