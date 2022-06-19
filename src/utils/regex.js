const regex = {
  emailRgx: /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g,
  passwordRgx: /^(?=^.{8,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/,
  userNameRgx: /[0-9a-zA-Z]{3,}/,
};

export default regex;
