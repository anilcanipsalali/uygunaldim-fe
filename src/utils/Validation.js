const validPassword = RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$");

const validEmail = RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");

const validUsername = RegExp(
  "^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$"
);

export const validatePassword = (password) => {
  if (validPassword.test(password)) {
    return true;
  }

  return false;
};

export const validateUsername = (username) => {
  if (validUsername.test(username)) {
    return true;
  }

  return false;
};

export const validateEmail = (email) => {
  if (validEmail.test(email)) {
    return true;
  }

  return false;
};
