import React from 'react';
import classes from './TitleParticles.module.css';
import Particles from 'react-particles-js';
import { chevronIcon } from '../icons';

const particleParams = {
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: {
        enable: true,
        mode: 'grab'
      },
      onClick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: { distance: 200 },
      push: { quantity: 4 }
    }
  }
};

const TitleParticles = props => {
  return (
    <div className={classes.Container}>
      <Particles className={classes.ParticleContainer} params={particleParams} />
      <div className={classes.TitleContainer}>
        <h1 className={classes.Title}>Brennan Wilkins</h1>
        <h1 className={classes.SubTitle}>Full Stack Software Developer</h1>
        <div className={classes.DownIcon} onClick={() => props.scroll('Skills')}>{chevronIcon}</div>
      </div>
    </div>
  );
};

export default TitleParticles;
