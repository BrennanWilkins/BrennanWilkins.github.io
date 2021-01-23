import React, { useState, useRef, useEffect } from 'react';
import classes from './SlideShowModal.module.css';
import PropTypes from 'prop-types';
import allGifs from '../projectGifs';

const SlideShowModal = props => {
  const containerRef = useRef();
  const sliderRef = useRef();
  const [currSlide, setCurrSlide] = useState(0);
  const [gifs, setGifs] = useState([]);

  useEffect(() => setGifs(allGifs[props.projectTitle]), [props.projectTitle]);

  const closeHandler = e => {
    if (!containerRef.current.contains(e.target)) { props.close(); }
  };

  const scrollToHandler = num => {
    const width = window.innerWidth < 500 ? window.innerWidth * .9 : 500;
    sliderRef.current.scrollLeft = width * num;
  };

  const scrollHandler = () => {
    const width = window.innerWidth < 500 ? window.innerWidth * .9 : 500;
    setCurrSlide(Math.floor(sliderRef.current.scrollLeft / width));
  };

  return (
    <div className={classes.Container} onClick={closeHandler}>
      <div className={classes.SliderContainer} ref={containerRef}>
        <div className={classes.Slider}>
          <div className={classes.Slides} ref={sliderRef} onScroll={scrollHandler}>
            {gifs.map((gif, i) => (
              <div key={i} className={classes.Slide}><img src={gif} alt={props.projectTitle} /></div>
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
  projectTitle: PropTypes.string.isRequired
};

export default SlideShowModal;
