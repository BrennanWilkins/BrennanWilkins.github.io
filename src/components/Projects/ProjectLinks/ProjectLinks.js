import React from 'react';
import classes from './ProjectLinks.module.css';
import PropTypes from 'prop-types';
import { arrowIcon, githubIcon } from '../../icons';

export const SiteLink = props => (
  <a className={`FlexCenter ${classes.ProjLink}`} href={props.href} target="_blank" rel="noopener noreferrer">
    Live Site<span className={`FlexCenter ${classes.ArrowIcon}`}>{arrowIcon}</span>
  </a>
);

export const GHLink = props => (
  <a className={`FlexCenter ${classes.ProjLink}`} href={props.href} target="_blank" rel="noopener noreferrer">
    <span className={`FlexCenter ${classes.GithubIcon}`}>{githubIcon}</span>Source Code
  </a>
);

SiteLink.propTypes = {
  href: PropTypes.string.isRequired
};

GHLink.propTypes = {
  href: PropTypes.string.isRequired
};
