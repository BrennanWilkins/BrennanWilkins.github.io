import React from 'react';
import classes from './NavBar.module.css';

const NavBar = props => (
  <div className={classes.NavBar}>
    <div className={classes.NameIcon} onClick={() => props.scroll('Home')}>BW</div>
    <div className={classes.Link} onClick={() => props.scroll('Skills')}>Skills</div>
    <div className={classes.Link} onClick={() => props.scroll('Projects')}>Projects</div>
    <div className={classes.Link} onClick={() => props.scroll('Contact')}>Contact</div>
  </div>
);

export default NavBar;
