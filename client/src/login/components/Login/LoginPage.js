import React from 'react';
import LoginForm from '../../containers/auth/LoginForm';
import AuthTemplate from '../auth/AuthTemplate';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;