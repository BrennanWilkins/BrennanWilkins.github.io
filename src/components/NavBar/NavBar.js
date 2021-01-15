import React from 'react';
import classes from './NavBar.module.css';
import PropTypes from 'prop-types';

const NavBar = props => (
  <div className={classes.NavBar}>
    <div className={classes.NameIcon} onClick={() => props.scroll('Home')}>BW</div>
    <div className={classes.Link} onClick={() => props.scroll('Skills')}>Skills</div>
    <div className={classes.Link} onClick={() => props.scroll('Projects')}>Projects</div>
    <div className={classes.Link} onClick={() => props.scroll('Contact')}>Contact</div>
  </div>
);

NavBar.propTypes = {
  scroll: PropTypes.func.isRequired
};

export default NavBar;
