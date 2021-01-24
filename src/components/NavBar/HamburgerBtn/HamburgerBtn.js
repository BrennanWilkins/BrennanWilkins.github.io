import React from 'react';
import classes from './HamburgerBtn.module.css';
import PropTypes from 'prop-types';

const HamburgerBtn = props => (
  <button onClick={props.onClick} className={`${classes.Hamburger} ${props.active ? classes.Active : ''}`}>
    <span className={classes.HamburgerBox}>
      <span className={classes.HamburgerInner}></span>
    </span>
  </button>
);

HamburgerBtn.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HamburgerBtn;
