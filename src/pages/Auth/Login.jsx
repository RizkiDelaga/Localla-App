import React from "react";
import LoginForm from "../../components/Form/LoginForm";
import AuthLayout from "../../layouts/Auth/AuthLayout";

const Login = () => {

  React.useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
