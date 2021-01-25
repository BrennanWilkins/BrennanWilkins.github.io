import React from 'react';
import classes from './ProjectTitles.module.css';
import { guitarIcon, checkIcon } from '../../icons';

export const BreyoTitle = (
  <div className={`${classes.Title} ${classes.BreyoTitle}`}>
    <div className={`FlexCenter ${classes.Logo}`}>
      <div className="FlexCenter">
        {checkIcon}
        <div className={classes.Block}></div>
      </div>
      <div className="FlexCenter">
        {checkIcon}
        <div className={classes.Block}></div>
      </div>
      <div className="FlexCenter">
        {checkIcon}
        <div className={classes.Block}></div>
      </div>
    </div>
    Breyo
  </div>
);

export const SimplifyTitle = (
  <div className={`${classes.Title} ${classes.SimplifyTitle}`}>
    <div className={classes.Bars}>
      <div className={classes.Bar1}></div>
      <div className={classes.Bar2}></div>
      <div className={classes.Bar3}></div>
      <div className={classes.Bar4}></div>
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

export const NotelyTitle = <div className={`${classes.Title} ${classes.NotelyTitle}`}>Notely</div>;

export const PVNTitle = <div className={`${classes.Title} ${classes.PVNTitle}`}>Pirates vs Ninjas Strategy Game</div>;
