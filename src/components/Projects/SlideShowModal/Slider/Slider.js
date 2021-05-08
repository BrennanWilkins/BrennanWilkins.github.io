import React, { useState, useRef } from 'react';
import classes from './Slider.module.css';
import PropTypes from 'prop-types';

const Slider = ({ gifs, title }) => {
  const sliderRef = useRef();
  const [currSlide, setCurrSlide] = useState(0);

  const scrollToHandler = index => {
    const width = Math.min(window.innerWidth * .9, 550);
    sliderRef.current.scrollLeft = width * index;
  };

  const scrollHandler = () => {
    const width = Math.min(window.innerWidth * .9, 550);
    setCurrSlide(Math.floor(sliderRef.current.scrollLeft / width));
  };

  return (
    <div className={classes.Slider}>
      <div
        className={classes.Slides}
        ref={sliderRef}
        onScroll={scrollHandler}
      >
        {gifs.map((gif, i) => (
          <div key={i} className={`FlexC ${classes.Slide}`}>
            <img src={gif} alt={title} />
          </div>
        ))}
      </div>
      <div className="FlexC">
        {[...Array(gifs.length)].map((_, i) => (
          <span
            key={i}
            style={currSlide === i ? {background: '#535353'} : null}
            onClick={() => scrollToHandler(i)}
            className={classes.Dot}
          />
        ))}
      </div>
    </div>
  );
};

Slider.propTypes = {
  gifs: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default Slider;
