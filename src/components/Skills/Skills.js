import React from 'react';
import classes from './Skills.module.css';
import { htmlIcon, cssIcon, jsIcon, reactIcon, reduxIcon, nodeJSIcon, mongoDBIcon, gitIcon } from '../icons';
import PropTypes from 'prop-types';

const icons = [[htmlIcon, 'HTML'], [cssIcon, 'CSS3'], [jsIcon, 'JavaScript'], [reactIcon, 'React'],
[reduxIcon, 'Redux'], [gitIcon, 'git'], [nodeJSIcon, 'Node.js'], [mongoDBIcon, 'MongoDB']];

const Skills = React.forwardRef((props, ref) => (
  <div className="Container" ref={ref}>
    <h1>Technologies I use</h1>
    <div className={`FlexCenter ${classes.Techs} ${props.startAnim ? classes.TechsAnim : ''}`}>
      {icons.map((icon, i) => (
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
