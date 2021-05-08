import React from 'react';
import classes from './TitleParticles.module.css';
import Particles from 'react-particles-js';
import { chevronIcon } from '../icons';
import PropTypes from 'prop-types';

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
  },
  particles: {
    number: {
      value: 80
    }
  },
  detectRetina: true
};

const TitleParticles = ({ scroll }) => (
  <div className={classes.Container}>
    <Particles className={classes.ParticleContainer} params={particleParams} />
    <div className={classes.TitleContainer}>
      <h2 className={classes.Title}>
        Brennan Wilkins
      </h2>
      <h2 className={classes.SubTitle}>
        Full Stack Software Developer
      </h2>
      <div className={classes.DownIcon} onClick={() => scroll('Skills')}>
        {chevronIcon}
      </div>
    </div>
  </div>
);

TitleParticles.propTypes = {
  scroll: PropTypes.func.isRequired
};

export default TitleParticles;
