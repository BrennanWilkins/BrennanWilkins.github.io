const emailTest = (
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const validateForm = (name, email, subject, msg) => {
  if (!name || !email || !subject || !msg) {
    return 'Please fill out all fields';
  }
  if (!emailTest.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
};
