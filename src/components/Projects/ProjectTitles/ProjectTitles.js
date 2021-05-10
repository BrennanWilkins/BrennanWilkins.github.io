import React from 'react';
import classes from './ProjectTitles.module.css';
import { guitarIcon, checkIcon, notelyIcon } from '../../icons';

export const BreyoTitle = (
  <div className={`${classes.Title} ${classes.BreyoTitle}`}>
    <div className={`FlexC ${classes.Logo}`}>
      <div className="FlexC">
        {checkIcon}
        <div className={classes.Block} />
      </div>
      <div className="FlexC">
        {checkIcon}
        <div className={classes.Block} />
      </div>
      <div className="FlexC">
        {checkIcon}
        <div className={classes.Block} />
      </div>
    </div>
    Breyo
  </div>
);

export const SimplifyTitle = (
  <div className={`${classes.Title} ${classes.SimplifyTitle}`}>
    <div className={classes.Bars}>
      <div className={classes.Bar1} />
      <div className={classes.Bar2} />
      <div className={classes.Bar3} />
      <div className={classes.Bar4} />
    </div>
    <div className={classes.SimplifyText}>Simplify</div>
  </div>
);

export const GuitarTitle = (
  <div className={`${classes.Title} ${classes.GuitarTitle}`}>
    {guitarIcon}
    Guitar Trainer
  </div>
);

export const NotelyTitle = (
  <div className={`${classes.Title} ${classes.NotelyTitle}`}>
    {notelyIcon}
    Notely
  </div>
);

export const PVNTitle = (
  <div className={`${classes.Title} ${classes.PVNTitle}`}>
    Pirates vs Ninjas Strategy Game
  </div>
);
