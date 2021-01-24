import React from 'react';
import classes from './ArrowBtns.module.css';
import PropTypes from 'prop-types';

const ArrowBtns = props => (
  <>
    <div className={`${classes.Arrow} ${classes.ArrowLeft}`} onClick={() => props.switchProj(false)}>
      <div className={classes.ArrowTop}></div>
      <div className={classes.ArrowBottom}></div>
    </div>
    <div className={`${classes.Arrow} ${classes.ArrowRight}`} onClick={() => props.switchProj(true)}>
      <div className={classes.ArrowTop}></div>
      <div className={classes.ArrowBottom}></div>
    </div>
  </>
);

ArrowBtns.propTypes = {
  switchProj: PropTypes.func.isRequired
};

export default ArrowBtns;
