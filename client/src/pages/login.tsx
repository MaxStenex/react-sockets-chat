import React from "react";
import AuthWhiteWrapper from "../components/shared/AuthWhiteWrapper";
import Main from "../components/login/Main";

const Login = () => {
  return (
    <AuthWhiteWrapper title="Sign in">
      <Main />
    </AuthWhiteWrapper>
  );
};

export default Login;
