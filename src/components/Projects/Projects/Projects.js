import React, { useState, Suspense } from 'react';
import classes from './Projects.module.css';
import Project from '../Project/Project';
import breyoPic from '../../../assets/imgs/breyoPic.png';
import simplifyPic from '../../../assets/imgs/simplifyPic.png';
import notelyPic from '../../../assets/imgs/notelyPic.png';
import guitarPic from '../../../assets/imgs/guitarPic.png';
import pvnPic from '../../../assets/imgs/pvnPic.png';
import * as info from '../projectInfo';
import Fallback from '../LoadingFallback/LoadingFallback';
const SlideShowModal = React.lazy(() => import('../SlideShowModal/SlideShowModal'));

const Projects = React.forwardRef((props, ref) => {
  const [slideShowProject, setSlideShowProject] = useState('');

  return (
    <>
      <div ref={ref} className={classes.Container}>
        <h1>Projects</h1>
        <Project pic={breyoPic} alt="Breyo" {...info.breyo} toggleSlideShow={() => setSlideShowProject('Breyo')} />
        <Project pic={simplifyPic} alt="Simplify" {...info.simplify} toggleSlideShow={() => setSlideShowProject('Simplify')} />
        <Project pic={notelyPic} alt="Notely" {...info.notely} toggleSlideShow={() => setSlideShowProject('Notely')} />
        <Project pic={guitarPic} alt="Guitar Trainer" {...info.guitarTrainer} toggleSlideShow={() => setSlideShowProject('Guitar')} />
        <Project pic={pvnPic} alt="PvN strategy game" {...info.pvn} toggleSlideShow={() => setSlideShowProject('Pvn')} />
      </div>
      {slideShowProject && <Suspense fallback={<Fallback />}><SlideShowModal projectTitle={slideShowProject} close={() => setSlideShowProject('')} /></Suspense>}
    </>
  );
});

export default Projects;
