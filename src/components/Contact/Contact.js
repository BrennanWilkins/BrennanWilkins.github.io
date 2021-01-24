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
  const [sentSuccess, setSentSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (err) { setErr(false); }
  }, [name, email, subject, msg]);

  useEffect(() => {
    if (err) { setTimeout(() => setErr(false), 5000); }
  }, [err]);

  const resetState = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMsg('');
    setErr(false);
    setErrMsg('');
  };

  const submitHandler = e => {
    e.preventDefault();
    const isInvalid = validateForm(name, email, subject, msg);
    setSentSuccess(false);
    setErrMsg(isInvalid);
    if (isInvalid) { return setErr(true); }
    setLoading(true);
    const data = { name, email, subject, msg };
    fetch('https://ast155lj7g.execute-api.us-east-2.amazonaws.com/dev/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => {
      if (!res.ok) { throw Error(res.statusText); }
      setLoading(false);
      setSentSuccess(true);
      setTimeout(() => setSentSuccess(false), 5000);
      resetState();
    }).catch(err => {
      setLoading(false);
      setErr(true);
      setErrMsg('There was an error while sending your email.');
    });
  };

  return (
    <div className={classes.Container} ref={ref}>
      <h1>Contact</h1>
      <form className={`${classes.Form} ${props.startAnim ? classes.AnimateForm : ''}`} onSubmit={submitHandler}>
        <div className={classes.InputSection}>
          <div className={`${classes.InputDiv} ${classes.NameInput}`}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" spellCheck="false" disabled={loading} />
            <div className={classes.FocusBorder}></div>
          </div>
          <div className={classes.InputDiv}>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" spellCheck="false" disabled={loading} />
            <div className={classes.FocusBorder}></div>
          </div>
        </div>
        <div className={classes.InputDiv}>
          <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" spellCheck="false" disabled={loading} />
          <div className={classes.FocusBorder}></div>
        </div>
        <div className={classes.InputDiv}>
          <textarea rows="5" value={msg} onChange={e => setMsg(e.target.value)} placeholder="Message" disabled={loading} />
          <div className={classes.FocusBorder}></div>
        </div>
        <div className={classes.SubmitContainer}>
          <button className={classes.SubmitBtn} type="submit" disabled={loading}>Send</button>
          <div className={err ? classes.ErrMsg : classes.HideMsg}>{errMsg}</div>
          <div className={sentSuccess ? classes.SuccessMsg : classes.HideMsg}>Your email was successful sent</div>
        </div>
      </form>
    </div>
  );
});

Contact.propTypes = {
  startAnim: PropTypes.bool.isRequired
};

export default Contact;
