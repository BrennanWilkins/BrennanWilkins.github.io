import React, { useState, useEffect, useRef } from 'react';
import classes from './NavBar.module.css';
import PropTypes from 'prop-types';
import HamburgerBtn from './HamburgerBtn/HamburgerBtn';

const NavBar = props => {
  const dropdownRef = useRef();
  const navbarRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const clickHandler = e => {
      if (!dropdownRef.current.contains(e.target) && !navbarRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) { document.addEventListener('mouseup', clickHandler); }
    return () => document.removeEventListener('mouseup', clickHandler);
  }, [showDropdown]);

  const scrollHandler = section => {
    props.scroll(section);
    if (showDropdown) { setShowDropdown(false); }
  };

  const links = (
    <>
      <div className={classes.Link} onClick={() => scrollHandler('Skills')}>Skills</div>
      <div className={classes.Link} onClick={() => scrollHandler('Projects')}>Projects</div>
      <div className={classes.Link} onClick={() => scrollHandler('Contact')}>Contact</div>
    </>
  );

  return (
    <>
      <div className={classes.NavBar} ref={navbarRef}>
        <div className={classes.NameIcon} onClick={() => scrollHandler('Home')}>BW</div>
        {links}
        <HamburgerBtn active={showDropdown} onClick={() => setShowDropdown(prev => !prev)} />
      </div>
      {showDropdown && <div className={classes.DropDown} ref={dropdownRef}>{links}</div>}
    </>
  );
};

NavBar.propTypes = {
  scroll: PropTypes.func.isRequired
};

export default NavBar;
