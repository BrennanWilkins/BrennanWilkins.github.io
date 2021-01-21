import React from 'react';
import classes from './Project.module.css';
import PropTypes from 'prop-types';

const Project = props => {
  return (
    <div className={classes.Project}>
      <div className={classes.Img}>
        <img src={props.pic} alt={props.alt} />
        <div className={classes.Overlay}>View slide show</div>
      </div>
      <div className={classes.ProjectInfo}>
        <div className={classes.InfoText}>
          {props.text.map((text, i) => <p key={i}>{text}</p>)}
        </div>
        <div className={classes.Icons}>
          {props.icons.map((icon, i) => <span key={i}>{icon}</span>)}
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  pic: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired
};

export default Project;
