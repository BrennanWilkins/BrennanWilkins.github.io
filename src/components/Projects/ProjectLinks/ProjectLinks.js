import React from 'react';
import classes from './ProjectLinks.module.css';
import PropTypes from 'prop-types';
import { arrowIcon, githubIcon } from '../../icons';

export const SiteLink = ({ href }) => (
  <a
    className={`FlexC ${classes.ProjLink}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    Live Site
    <span className={`FlexC ${classes.ArrowIcon}`}>
      {arrowIcon}
    </span>
  </a>
);

export const GHLink = ({ href }) => (
  <a
    className={`FlexC ${classes.ProjLink}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className={`FlexC ${classes.GithubIcon}`}>
      {githubIcon}
    </span>
    Source Code
  </a>
);

SiteLink.propTypes = {
  href: PropTypes.string.isRequired
};

GHLink.propTypes = {
  href: PropTypes.string.isRequired
};
