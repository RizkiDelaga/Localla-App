const initialStateForm = {
  email: "",
  password: "",
  userName: "",
  userNameError: false,
  emailError: false,
  passwordError: false,
};

console.log(initialStateForm);

const FormReducer = (state = initialStateForm, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "SET_USERNAME":
      return {
        ...state,
        userName: action.payload,
      };
    case "SET_USERNAME_ERROR":
      return {
        ...state,
        userNameError: action.payload,
      };
    case "SET_EMAIL_ERROR":
      return {
        ...state,
        emailError: action.payload,
      };
    case "SET_PASSWORD_ERROR":
      return {
        ...state,
        passwordError: action.payload,
      };
    case "RESET_FORM":
      return {
        ...state,
        email: "",
        password: "",
        userName: "",
      };
    default:
      return state;
  }
};

export default FormReducer;
