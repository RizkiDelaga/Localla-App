import React, { Fragment } from "react";
import LoginForm from "../../components/Form/LoginForm";
import AuthLayout from "../../layouts/Auth/AuthLayout";


const Login = () => {
  return (
    <Fragment>
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    </Fragment>
  );
};

export default Login;
