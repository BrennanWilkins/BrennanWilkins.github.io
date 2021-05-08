import React, { useState, useRef, useEffect } from 'react';
import classes from './SlideShowModal.module.css';
import PropTypes from 'prop-types';
import allGifs from '../projectGifs';
import ArrowBtns from './ArrowBtns/ArrowBtns';
import Slider from './Slider/Slider';

const SlideShowModal = ({ close, project, switchProj }) => {
  const containerRef = useRef();
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setGifs(allGifs[project.title]);
  }, [project]);

  const closeHandler = e => {
    if (!containerRef.current.contains(e.target)) {
      close();
    }
  };

  const lightenTitle = project.title === 'Guitar Trainer';

  return (
    <div className={`Backdrop ${classes.Container}`} onClick={closeHandler}>
      <div className={`${classes.Title} ${lightenTitle ? classes.LightenTitle : ''}`}>
        {project.titleComp}
      </div>
      <div className={classes.SliderContainer} ref={containerRef}>
        <Slider gifs={gifs} title={project.title} />
        <ArrowBtns switchProj={switchProj} />
      </div>
    </div>
  );
};

SlideShowModal.propTypes = {
  close: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  switchProj: PropTypes.func.isRequired
};

export default SlideShowModal;
