import React from 'react';
import classes from './ArrowBtns.module.css';
import PropTypes from 'prop-types';

const ArrowBtns = ({ switchProj }) => (
  <>
    <div
      className={`${classes.Arrow} ${classes.ArrowLeft}`}
      onClick={() => switchProj(false)}
    >
      <div className={classes.ArrowTop} />
      <div className={classes.ArrowBottom} />
    </div>
    <div
      className={`${classes.Arrow} ${classes.ArrowRight}`}
      onClick={() => switchProj(true)}
    >
      <div className={classes.ArrowTop} />
      <div className={classes.ArrowBottom} />
    </div>
  </>
);

ArrowBtns.propTypes = {
  switchProj: PropTypes.func.isRequired
};

export default ArrowBtns;
