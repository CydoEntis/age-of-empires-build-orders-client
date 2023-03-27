import React from "react";
import Form from "../components/Form";
import AuthImage from "../features/auth/AuthImage";
import AuthWrapper from "../features/auth/AuthWrapper";
import LoginForm from "../features/auth/LoginForm";

type Props = {};

function login({}: Props) {
  return (
    <AuthWrapper>
      <AuthImage />
      <LoginForm />
    </AuthWrapper>
  );
}

export default login;
