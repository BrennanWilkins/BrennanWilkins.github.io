import React, { useMemo } from 'react';
import classes from './Project.module.css';
import PropTypes from 'prop-types';
import { SiteLink, GHLink } from '../ProjectLinks/ProjectLinks';

const Project = React.forwardRef((props, ref) => {
  const projectContent = useMemo(() => (
    <>
      <div className={classes.Img} onClick={props.toggleSlideShow}>
        <img src={props.pic} alt={props.alt} />
        <div className={classes.Overlay}>View slide show</div>
      </div>
      <div className={classes.ProjectInfo}>
        <div className={classes.Title}>{props.title}</div>
        <div className={classes.InfoText}>
          {props.text.map((text, i) => <p key={i}>{text}</p>)}
        </div>
        <div className={classes.Icons}>
          {props.icons.map((icon, i) => <span key={i}>{icon}</span>)}
        </div>
        <div className={classes.Links}>
          <SiteLink href={props.siteLink} />
          <GHLink href={props.ghLink} />
        </div>
      </div>
    </>
  ), []);

  return (
    <div ref={ref} className={`${classes.Project} ${props.startAnim ? classes.ProjectAnim : ''}`}>
      {projectContent}
    </div>
  );
});

Project.propTypes = {
  pic: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
  siteLink: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired,
  toggleSlideShow: PropTypes.func.isRequired,
  startAnim: PropTypes.bool.isRequired
};

export default Project;
