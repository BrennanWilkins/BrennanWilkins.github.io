import React, { useMemo, useRef } from 'react';
import classes from './Project.module.css';
import PropTypes from 'prop-types';
import { SiteLink, GHLink } from '../ProjectLinks/ProjectLinks';
import { useAnimIntoView } from '../../../utils/customHooks';

const Project = props => {
  const ref = useRef();

  const startAnim = useAnimIntoView(ref, rect => {
    return rect.top + rect.height / 8 <= window.innerHeight;
  });

  const projectContent = useMemo(() => (
    <>
      <div className={classes.Img} onClick={props.toggleSlideShow}>
        <img src={props.pic} alt={props.alt} />
        <div className={`FlexC ${classes.Overlay}`}>
          View slide show
        </div>
      </div>
      <div className={classes.ProjectInfo}>
        <div className={`FlexC ${classes.Title}`}>
          {props.title}
        </div>
        <div className={classes.InfoText}>
          {props.text.map((text, i) => <p key={i}>{text}</p>)}
        </div>
        <div className={`FlexC ${classes.Icons}`}>
          {props.icons.map((icon, i) => <span key={i}>{icon}</span>)}
        </div>
        <div className={`FlexC ${classes.Links}`}>
          <SiteLink href={props.siteLink} />
          <GHLink href={props.ghLink} />
        </div>
      </div>
    </>
  ), []);

  return (
    <div
      ref={ref}
      className={`${classes.Project} ${startAnim ? classes.ProjectAnim : ''}`}
    >
      {projectContent}
    </div>
  );
};

Project.propTypes = {
  pic: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  siteLink: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired,
  toggleSlideShow: PropTypes.func.isRequired,
};

export default Project;
