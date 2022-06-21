// import React from "react";
// import styles from "./Form.module.css";
// import { Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import regex from "../../utils/regex";
// import url from "../../utils/url";
// import axios from "axios";

// const LoginForm = () => {
//   const { email, password, emailError, passwordError } = useSelector(
//     (state) => state.FormReducer
//   );

//   const { isLoading, showPassword } = useSelector(
//     (state) => state.AuthPageReducer
//   );

//   const dispatch = useDispatch();

//   const { emailRgx, passwordRgx } = regex;
//   const { LOGIN_URL } = url;

//   const emailChangeHandler = (e) => {
//     dispatch({ type: "SET_EMAIL", payload: e.target.value });
//     if (emailRgx.test(email)) {
//       dispatch({ type: "SET_EMAIL_ERROR", payload: false });
//     } else if (!emailRgx.test(email) && email !== "") {
//       dispatch({ type: "SET_EMAIL_ERROR", payload: true });
//     }
//   };

//   const passwordChangeHandler = (e) => {
//     dispatch({ type: "SET_PASSWORD", payload: e.target.value });
//     if (passwordRgx.test(password)) {
//       dispatch({ type: "SET_PASSWORD_ERROR", payload: false });
//     } else if (!passwordRgx.test(password) && password !== "") {
//       dispatch({ type: "SET_PASSWORD_ERROR", payload: true });
//     }
//   };

//   let formIsValid = !emailError && !passwordError;

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!formIsValid) {
//       return;
//     }

//     dispatch({ type: "SET_IS_LOADING", payload: true });

//     try {
//       const response = await axios.post(LOGIN_URL, {
//         email,
//         password,
//       });
//       console.log(response);
//       dispatch({ type: "SET_IS_LOADING", payload: false });
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: "SET_IS_LOADING", payload: false });
//     }
//     dispatch({ type: "RESET_FORM" });
//   };

//   return (
//     <Form className={`${styles["form-container"]}`} onSubmit={handleSubmit}>
//       <p className={`${styles.text} mt-3`}>Masuk</p>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email</Form.Label>
//         <Form.Control
//           className={`${styles["input-field"]}`}
//           type="email"
//           placeholder="Contoh: johndee@gmail.com"
//           value={email}
//           onChange={emailChangeHandler}
//           required
//         />
//         {emailError && (
//           <p className={`${styles["error-text"]}`}>Email tidak valid</p>
//         )}
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <div className={`${styles["password-holder"]}`}>
//           <input
//             className={`${styles["password-input"]}`}
//             type={showPassword ? "text" : "password"}
//             placeholder="Masukkan password"
//             value={password}
//             onChange={passwordChangeHandler}
//             required
//           />
//           <button
//             onClick={() => dispatch({ type: "TOGGLE_SHOW_PASSWORD" })}
//             className={`${styles["password-toggler"]}`}
//             type="button"
//           >
//             <img src="./assets/icons/fi_eye.png" alt="" />
//           </button>
//         </div>
//         {passwordError && (
//           <p className={`${styles["error-text"]}`}>
//             Password must not contain any white spaces and must be at least 8
//             characters long.
//           </p>
//         )}
//       </Form.Group>

//       {!isLoading && (
//         <Button
//           variant="primary"
//           type="submit"
//           className={`${styles["button-submit"]} mt-3`}
//         >
//           Masuk
//         </Button>
//       )}

//       {isLoading && <p>Loading...</p>}
//       <div className={`${styles.toggler} pt-3`}>
//         <p>
//           Belum punya akun?
//           <Link
//             to="/register"
//             type="button"
//             className={`${styles.toggle} px-2`}
//           >
//             Daftar di sini
//           </Link>
//         </p>
//       </div>
//     </Form>
//   );
// };

// export default LoginForm;
