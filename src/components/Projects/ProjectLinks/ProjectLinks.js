import React from 'react';
import classes from './ProjectLinks.module.css';
import PropTypes from 'prop-types';
import { arrowIcon, githubIcon } from '../../icons';

export const SiteLink = props => (
  <a className={classes.ProjLink} href={props.href} target="_blank" rel="noopener noreferrer">
    Live Site<span className={classes.ArrowIcon}>{arrowIcon}</span>
  </a>
);

export const GHLink = props => (
  <a className={classes.ProjLink} href={props.href} target="_blank" rel="noopener noreferrer">
    <span className={classes.GithubIcon}>{githubIcon}</span>Source Code
  </a>
);

SiteLink.propTypes = {
  href: PropTypes.string.isRequired
};

GHLink.propTypes = {
  href: PropTypes.string.isRequired
};
