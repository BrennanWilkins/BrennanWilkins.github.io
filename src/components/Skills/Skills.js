import React from 'react';
import classes from './Skills.module.css';
import PropTypes from 'prop-types';
import { allTechIcons } from '../icons';

const Skills = React.forwardRef((props, ref) => (
  <div className="Container" ref={ref}>
    <h1>Technologies I use</h1>
    <div className={`FlexCenter ${classes.Techs} ${props.startAnim ? classes.TechsAnim : ''}`}>
      {allTechIcons.map((icon, i) => (
        <div className={`FlexCenter ${classes.Tech}`} key={i}>
          <div className={`FlexCenter ${classes.TechIcon} ${(i === 6 || i === 7) ? classes.TechIconStretch : ''}`}
          style={{ transitionDelay: String(500 + (i * 50)) + 'ms' }}>{icon[0]}</div>
          <span className={classes.TechName}>{icon[1]}<span className={classes.FocusBorder}></span></span>
        </div>
      ))}
    </div>
  </div>
));

Skills.propTypes = {
  startAnim: PropTypes.bool.isRequired
};

export default Skills;
