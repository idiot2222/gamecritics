import React from "react";
import LoginForm from "../../containers/auth/LoginForm";
import AuthTemplate from "../auth/AuthTemplate";
import "../Login/LoginPage.scss";

const LoginPage = () => {
  return (
    <>
      <div className="tmp"></div>
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
