import React, { useState, useEffect } from 'react';
import classes from './Contact.module.css';

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
  };

  return (
    <div className={classes.Container} ref={ref}>
      <h1>Contact</h1>
      <form className={classes.Form} onSubmit={submitHandler}>
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

export default Contact;
