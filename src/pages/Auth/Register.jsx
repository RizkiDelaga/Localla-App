import React from "react";
import RegisterForm from "../../components/Form/RegisterForm";
import AuthLayout from "../../layouts/Auth/AuthLayout";

const Register = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
