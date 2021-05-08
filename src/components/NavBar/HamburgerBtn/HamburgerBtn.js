import React from 'react';
import classes from './HamburgerBtn.module.css';
import PropTypes from 'prop-types';

const HamburgerBtn = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={`${classes.Hamburger} ${active ? classes.Active : ''}`}
  >
    <span className={classes.HamburgerBox}>
      <span className={classes.HamburgerInner} />
    </span>
  </button>
);

HamburgerBtn.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HamburgerBtn;
