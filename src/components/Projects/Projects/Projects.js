import React from 'react';
import classes from './Projects.module.css';
import Project from '../Project/Project';
import breyoPic from '../../../assets/breyoPic.png';
import simplifyPic from '../../../assets/simplifyPic.png';
import notelyPic from '../../../assets/notelyPic.png';
import guitarPic from '../../../assets/guitarPic.png';
import pvnPic from '../../../assets/pvnPic.png';
import * as info from '../projectInfo';

const Projects = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.Container}>
      <h1>Projects</h1>
      <Project pic={breyoPic} alt="Breyo" {...info.breyo} />
      <Project pic={simplifyPic} alt="Simplify" {...info.simplify} />
      <Project pic={notelyPic} alt="Notely" {...info.notely} />
      <Project pic={guitarPic} alt="Guitar Trainer" {...info.guitarTrainer} />
      <Project pic={pvnPic} alt="PvN strategy game" {...info.pvn} />
    </div>
  );
});

export default Projects;
