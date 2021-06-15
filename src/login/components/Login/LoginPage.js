import React from 'react';
import AuthForm from '../auth/AuthForm';
import AuthTemplate from '../auth/AuthTemplate';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="login"/>
    </AuthTemplate>
  );
};

export default LoginPage;