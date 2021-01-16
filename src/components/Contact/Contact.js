import React, { useState, useEffect } from 'react';
import classes from './Contact.module.css';
import PropTypes from 'prop-types';

const emailTest = (
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const validateForm = (name, email, subject, msg) => {
  if (!name || !email || !subject || !msg) {
    return 'Please fill out all fields';
  }
  if (!emailTest.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
};

const Contact = React.forwardRef((props, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (err) { setErr(false); }
  }, [name, email, subject, msg]);

  const submitHandler = e => {
    e.preventDefault();
    const isInvalid = validateForm(name, email, subject, msg);
    setErrMsg(isInvalid);
    if (isInvalid) { return setErr(true); }
  };

  return (
    <div className={classes.Container} ref={ref}>
      <h1>Contact</h1>
      <form className={`${classes.Form} ${props.startAnim ? classes.AnimateForm : ''}`} onSubmit={submitHandler}>
        <div className={classes.InputSection}>
          <div className={classes.InputDiv}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" spellCheck="false" />
            <div className={classes.FocusBorder}></div>
          </div>
          <div className={classes.InputDiv}>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" spellCheck="false" />
            <div className={classes.FocusBorder}></div>
          </div>
        </div>
        <div className={classes.InputDiv}>
          <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" spellCheck="false" />
          <div className={classes.FocusBorder}></div>
        </div>
        <div className={classes.InputDiv}>
          <textarea rows="5" value={msg} onChange={e => setMsg(e.target.value)} placeholder="Message" />
          <div className={classes.FocusBorder}></div>
        </div>
        <div className={classes.SubmitContainer}>
          <button className={classes.SubmitBtn} type="submit">Send</button>
          <div className={err ? classes.ErrMsg : classes.HideErrMsg}>{errMsg}</div>
        </div>
      </form>
    </div>
  );
});

Contact.propTypes = {
  startAnim: PropTypes.bool.isRequired
};

export default Contact;
