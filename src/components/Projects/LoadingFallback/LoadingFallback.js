import React from 'react';
import classes from './LoadingFallback.module.css';

const LoadingFallback = () => (
  <div className={`FlexCenter Backdrop`}>
    <div className={classes.NameIcon}>
      BW
      <div className={classes.NameBorder}></div>
    </div>
  </div>
);

export default LoadingFallback;
