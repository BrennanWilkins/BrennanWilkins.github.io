import React from 'react';
import classes from './Skills.module.css';
import { allTechIcons } from '../icons';
import { useAnimIntoView } from '../../utils/customHooks';

const Skills = React.forwardRef((_, ref) => {
  const startAnim = useAnimIntoView(ref, rect => {
    return window.innerHeight >= rect.bottom - 40 || rect.top <= 70;
  });

  return (
    <div className="Container" ref={ref}>
      <h1>Technologies I use</h1>
      <div className={`
        FlexC
        ${classes.Techs}
        ${startAnim ? classes.TechsAnim : ''}
      `}>
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
  );
});

export default Skills;
