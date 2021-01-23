import React, { useState, Suspense, useRef } from 'react';
import classes from './Projects.module.css';
import Project from '../Project/Project';
import projInfo from '../projectInfo';
import Fallback from '../LoadingFallback/LoadingFallback';
const SlideShowModal = React.lazy(() => import('../SlideShowModal/SlideShowModal'));

const Projects = React.forwardRef((props, ref) => {
  const [slideShowProject, setSlideShowProject] = useState('');
  const projRefs = useRef([]);

  return (
    <>
      <div ref={ref} className={classes.Container}>
        <h1>Projects</h1>
        {projInfo.map((info, i) => (
          <Project key={info.alt} ref={el => projRefs.current[i] = el} {...info} toggleSlideShow={() => setSlideShowProject(info.alt)} />
        ))}
      </div>
      {slideShowProject && <Suspense fallback={<Fallback />}><SlideShowModal projectTitle={slideShowProject} close={() => setSlideShowProject('')} /></Suspense>}
    </>
  );
});

export default Projects;
