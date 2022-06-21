// import React from "react";
// import styles from "./Form.module.css";
// import { Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import regex from "../../utils/regex";
// import url from "../../utils/url";
// import axios from "axios";

// const RegisterForm = () => {
//   const {
//     email,
//     password,
//     userName,
//     userNameError,
//     emailError,
//     passwordError,
//   } = useSelector((state) => state.FormReducer);

//   const { isLoading, showPassword } = useSelector(
//     (state) => state.AuthPageReducer
//   );

//   const dispatch = useDispatch();

//   const { emailRgx, passwordRgx, userNameRgx } = regex;
//   const { register } = url;

//   const emailChangeHandler = (e) => {
//     dispatch({ type: "SET_EMAIL", payload: e.target.value });
//     if (emailRgx.test(email)) {
//       dispatch({ type: "SET_EMAIL_ERROR", payload: false });
//     } else if (!emailRgx.test(email) && email !== "") {
//       dispatch({ type: "SET_EMAIL_ERROR", payload: true });
//     }
//   };

//   const nameChangeHandler = (e) => {
//     dispatch({ type: "SET_USERNAME", payload: e.target.value });
//     if (userNameRgx.test(userName)) {
//       dispatch({ type: "SET_USERNAME_ERROR", payload: false });
//     } else if (!userNameRgx.test(userName) && userName !== "") {
//       dispatch({ type: "SET_USERNAME_ERROR", payload: true });
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

//   let formIsValid = !userNameError && !emailError && !passwordError;

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!formIsValid) {
//       return;
//     }

//     dispatch({ type: "SET_IS_LOADING", payload: true });

//     try {
//       const response = await axios.post(register, {
//         email,
//         password,
//         userName,
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
//       <p className={`${styles.text} mt-3`}>Daftar</p>
//       <Form.Group className="mb-3" controlId="formBasicName">
//         <Form.Label>Nama</Form.Label>
//         <Form.Control
//           className={`${styles["input-field"]}`}
//           type="text"
//           placeholder="Nama Lengkap"
//           value={userName}
//           onChange={nameChangeHandler}
//           required
//         />
//         {userNameError && (
//           <p className={`${styles["error-text"]}`}>
//             Name harus diisi dan minimal 4 karakter
//           </p>
//         )}
//       </Form.Group>

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
//             Password harus ada 1 uppercase, 1 lowercase, 1 angka dan minimal 9
//             karakter
//           </p>
//         )}
//       </Form.Group>

//       {!isLoading && (
//         <Button
//           variant="primary"
//           type="submit"
//           className={`${styles["button-submit"]} mt-3`}
//         >
//           Daftar
//         </Button>
//       )}

//       {isLoading && <p>Loading...</p>}
//       <div className={`${styles.toggler} pt-3`}>
//         <p>
//           Sudah punya akun?
//           <Link to="/login" type="button" className={`${styles.toggle} px-2`}>
//             Masuk di sini
//           </Link>
//         </p>
//       </div>
//     </Form>
//   );
// };

// export default RegisterForm;
