import React, { useState, useRef, useEffect } from 'react';
import classes from './SlideShowModal.module.css';
import PropTypes from 'prop-types';
import allGifs from '../projectGifs';

const SlideShowModal = props => {
  const containerRef = useRef();
  const sliderRef = useRef();
  const [currSlide, setCurrSlide] = useState(0);
  const [gifs, setGifs] = useState([]);

  useEffect(() => setGifs(allGifs[props.project.title]), [props.project]);

  const closeHandler = e => {
    if (!containerRef.current.contains(e.target)) { props.close(); }
  };

  const scrollToHandler = num => {
    const width = window.innerWidth < 550 ? window.innerWidth * .9 : 550;
    sliderRef.current.scrollLeft = width * num;
  };

  const scrollHandler = () => {
    const width = window.innerWidth < 550 ? window.innerWidth * .9 : 550;
    setCurrSlide(Math.floor(sliderRef.current.scrollLeft / width));
  };

  const lightenTitle = props.project.title === 'Guitar Trainer';

  return (
    <div className={classes.Container} onClick={closeHandler}>
      <div className={lightenTitle ? classes.LightenTitle : classes.Title}>{props.project.titleComp}</div>
      <div className={classes.SliderContainer} ref={containerRef}>
        <div className={classes.Slider}>
          <div className={classes.Slides} ref={sliderRef} onScroll={scrollHandler}>
            {gifs.map((gif, i) => (
              <div key={i} className={classes.Slide}><img src={gif} alt={props.project.title} /></div>
            ))}
          </div>
          <div className={classes.Dots}>
            {[...Array(gifs.length)].map((num, i) => (
              <span key={i} onClick={() => scrollToHandler(i)} className={currSlide === i ? classes.Active : classes.Inactive}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

SlideShowModal.propTypes = {
  close: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

export default SlideShowModal;
