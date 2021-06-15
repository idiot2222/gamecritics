import React from 'react';
import AuthForm from '../auth/AuthForm';
import AuthTemplate from '../auth/AuthTemplate';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="register"/>
    </AuthTemplate>
  );
};

export default RegisterPage;