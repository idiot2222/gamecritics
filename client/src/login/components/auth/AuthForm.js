import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { FaFacebook, FaGoogle, FaXbox, FaPlaystation } from "react-icons/fa";

const AuthFormBlock = styled.div`
  h4 {
    margin: 0;
    color: white;
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 0.8rem;
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid black;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  color: white;

  a {
    color: white;
    text-decoration: underline;

    &:hover {
      color: black;
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  font-size: 0.8rem;
  text-align: left;
`;

const textMap = {
  login: "로그인",
  register: "가입",
};

// 에러 출력
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const style = {
  fontSize: "1.125rem",
  color: "white",
  verticalAlign: "middle",
  marginRight: "10px",
  marginBottom: "1px",
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <h4>원하는 {text} 방법을 선택하세요</h4>
      <form onSubmit={onSubmit}>-
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디 혹은 이메일을 입력하세요"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === "register" && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop fullWidth style={{ marginTop: "1rem" }}>
          이메일로 {text}
        </ButtonWithMarginTop>
        <ButtonWithMarginTop fullWidth style={{ marginTop: "1rem" }}>
          <FaFacebook style={style} />
          FACEBOOK(으)로 {text}
        </ButtonWithMarginTop>
        <ButtonWithMarginTop fullWidth style={{ marginTop: "1rem" }}>
          <FaGoogle style={style} />
          GOOGLE(으)로 {text}
        </ButtonWithMarginTop>
        <ButtonWithMarginTop fullWidth style={{ marginTop: "1rem" }}>
          <FaXbox style={style} />
          XBOX LIVE(으)로 {text}
        </ButtonWithMarginTop>
        <ButtonWithMarginTop fullWidth style={{ marginTop: "1rem" }}>
          <FaPlaystation style={style} />
          PLAYSTATION NETWORK(으)로 {text}
        </ButtonWithMarginTop>
      </form>

      <Footer>
        {type === "login" ? (
          <div>
            계정이 없으신가요? <Link to="/register">가입</Link>
          </div>
        ) : (
          <div>
            계정이 없으신가요? <Link to="/login">로그인</Link>
          </div>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
