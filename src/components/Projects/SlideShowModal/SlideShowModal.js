import React, { useState, useRef, useEffect } from 'react';
import classes from './SlideShowModal.module.css';
import PropTypes from 'prop-types';
import simplifyGif1 from '../../../assets/gifs/simplifyGif1.gif';
import simplifyGif2 from '../../../assets/gifs/simplifyGif2.gif';
import simplifyGif3 from '../../../assets/gifs/simplifyGif3.gif';
import simplifyGif4 from '../../../assets/gifs/simplifyGif4.gif';
import simplifyGif5 from '../../../assets/gifs/simplifyGif5.gif';
import guitarGif1 from '../../../assets/gifs/guitarGif1.gif';
import guitarGif2 from '../../../assets/gifs/guitarGif2.gif';
import guitarGif3 from '../../../assets/gifs/guitarGif3.gif';
import notelyGif1 from '../../../assets/gifs/notelyGif1.gif';
import notelyGif2 from '../../../assets/gifs/notelyGif2.gif';
import notelyGif3 from '../../../assets/gifs/notelyGif3.gif';
import pvnGif1 from '../../../assets/gifs/pvnGif1.gif';
import pvnGif2 from '../../../assets/gifs/pvnGif2.gif';

const simplifyGifs = [simplifyGif1, simplifyGif2, simplifyGif3, simplifyGif4, simplifyGif5];
const guitarGifs = [guitarGif1, guitarGif2, guitarGif3];
const notelyGifs = [notelyGif1, notelyGif2, notelyGif3];
const pvnGifs = [pvnGif1, pvnGif2];

const SlideShowModal = props => {
  const containerRef = useRef();
  const sliderRef = useRef();
  const [currSlide, setCurrSlide] = useState(0);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    switch (props.projectTitle) {
      case 'Simplify': return setGifs(simplifyGifs);
      case 'Guitar Trainer': return setGifs(guitarGifs);
      case 'Notely': return setGifs(notelyGifs);
      case 'PvN Strategy Game': return setGifs(pvnGifs);
      default: return;
    }
  }, [props.projectTitle]);

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
