import React, { useRef, lazy } from 'react';
import classes from './SlideShowModal.module.css';
import PropTypes from 'prop-types';

const SlideShowModal = props => {
  const slidesRef = useRef();

  const closeHandler = e => {
    if (!slidesRef.current.contains(e.target)) { props.close(); }
  };

  return (
    <div className={classes.Container} onClick={closeHandler}>
      <div className={classes.SlideContainer} ref={slidesRef}>
      </div>
    </div>
  );
};

SlideShowModal.propTypes = {
  close: PropTypes.func.isRequired,
  projectTitle: PropTypes.string.isRequired
};

export default SlideShowModal;
