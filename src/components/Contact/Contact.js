import React, { useState, useEffect } from 'react';
import classes from './Contact.module.css';
import PropTypes from 'prop-types';
import { validateForm } from '../../utils/validation';

const Contact = React.forwardRef(({ startAnim }, ref) => {
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
    setLoading(false);
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
    <div className="Container" ref={ref}>
      <h1>Contact</h1>
      <form
        className={`${classes.Form} ${startAnim ? classes.AnimateForm : ''}`}
        onSubmit={submitHandler}
      >
        <div className={classes.FormRow}>
          <div className={classes.Input}>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              spellCheck="false"
              disabled={loading}
            />
            <div className={classes.FocusBorder} />
          </div>
          <div className={classes.Input}>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              spellCheck="false"
              disabled={loading}
            />
            <div className={classes.FocusBorder} />
          </div>
        </div>
        <div className={classes.Input}>
          <input
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Subject"
            spellCheck="false"
            disabled={loading}
          />
          <div className={classes.FocusBorder} />
        </div>
        <div className={classes.Input}>
          <textarea
            rows="5"
            value={msg}
            onChange={e => setMsg(e.target.value)}
            placeholder="Message"
            disabled={loading}
          />
          <div className={classes.FocusBorder} />
        </div>
        <div className={classes.SubmitContainer}>
          <button
            className={classes.SubmitBtn}
            type="submit"
            disabled={loading}
          >
            Send
          </button>
          <div className={err ? classes.ErrMsg : classes.HideMsg}>
            {errMsg}
          </div>
          <div className={sentSuccess ? classes.SuccessMsg : classes.HideMsg}>
            Your email was successful sent
          </div>
        </div>
      </form>
    </div>
  );
});

Contact.propTypes = {
  startAnim: PropTypes.bool.isRequired
};

export default Contact;
