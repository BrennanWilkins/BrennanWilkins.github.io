import React from 'react';
import classes from './Skills.module.css';
import PropTypes from 'prop-types';
import { allTechIcons } from '../icons';

const Skills = React.forwardRef(({ startAnim }, ref) => (
  <div className="Container" ref={ref}>
    <h1>Technologies I use</h1>
    <div className={`FlexC ${classes.Techs} ${startAnim ? classes.TechsAnim : ''}`}>
      {allTechIcons.map((icon, i) => (
        <div className={`FlexC ${classes.Tech}`} key={i}>
          <div
            className={`
              FlexC
              ${classes.TechIcon}
              ${(i === 6 || i === 7) ? classes.TechIconStretch : ''}
            `}
            style={{ transitionDelay: String(500 + (i * 50)) + 'ms' }}
          >
            {icon[0]}
          </div>
          <span className={classes.TechName}>
            {icon[1]}
            <span className={classes.FocusBorder} />
          </span>
        </div>
      ))}
    </div>
  </div>
));

Skills.propTypes = {
  startAnim: PropTypes.bool.isRequired
};

export default Skills;
