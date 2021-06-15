import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));

  const onChange = e => {
    const {value, name} = e.target;

    dispatch(
      changeField({
        form: 'register',
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    
    // 하나라도 비어 있다면
    if([username, password, passwordConfirm].includes('')) {
      setError('Type all information');
      return;
    }

    // 비밀번호가 다르면
    if(password !== passwordConfirm) {
      setError('Different Password!')
      changeField({ form: 'register', key: 'password', value: ''});
      changeField({ form: 'register', key: 'passwordConfirm', value: ''});
      return;
    }
    
    dispatch(register({ username, password }));
  };

  // form 초기화
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  // 가입 성공/실패 처리
  useEffect(() => {
    if(authError) {
      // 이미 존재하는 계정명일 경우
      if(authError.response.status === 409) {
        setError('Already Accounts. Please select Another name.');
        return;
      }
      // 기타
      setError('Register Failure!');
      return;
    }

    if(auth) {
      console.log('success');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user value check
  useEffect(() => {
    if(user) {
      history.push('/');
      
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (error) {
        console.log('localStorage is not Working!');
      }
    }
  }, [user, history]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);