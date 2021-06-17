import React from "react";
import RegisterForm from "../../containers/auth/RegisterForm";
import AuthTemplate from "../auth/AuthTemplate";
import "../Register/RegisterPage.scss";


const RegisterPage = () => {
  return (
    <>
      <div className="tmp"></div>
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
    </>
  );
};

export default RegisterPage;
