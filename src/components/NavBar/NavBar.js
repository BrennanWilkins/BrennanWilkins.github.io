import React, { useState, useRef } from 'react';
import classes from './NavBar.module.css';
import PropTypes from 'prop-types';
import HamburgerBtn from './HamburgerBtn/HamburgerBtn';
import { useOutsideClick } from '../../utils/customHooks';

const NavBar = ({ scroll }) => {
  const navbarRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  useOutsideClick(showDropdown, navbarRef, () => {
    setShowDropdown(false);
  });

  const scrollHandler = section => {
    scroll(section);
    if (showDropdown) { setShowDropdown(false); }
  };

  const links = (
    <>
      <div className={classes.Link} onClick={() => scrollHandler('Skills')}>
        Skills
      </div>
      <div className={classes.Link} onClick={() => scrollHandler('Projects')}>
        Projects
      </div>
      <div className={classes.Link} onClick={() => scrollHandler('Contact')}>
        Contact
      </div>
    </>
  );

  return (
    <div ref={navbarRef}>
      <div className={classes.NavBar}>
        <div className={classes.NameIcon} onClick={() => scrollHandler('Home')}>
          BW
        </div>
        {links}
        <HamburgerBtn
          active={showDropdown}
          onClick={() => setShowDropdown(prev => !prev)}
        />
      </div>
      <div className={`
        ${classes.Dropdown}
        ${showDropdown ? classes.ShowDropdown : ''}
      `}>
        {links}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  scroll: PropTypes.func.isRequired
};

export default NavBar;
