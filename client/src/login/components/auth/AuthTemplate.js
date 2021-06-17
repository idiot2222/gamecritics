import React from "react";
import styled from "styled-components";
// import palette from "../../lib/styles/palette";
// import { Link } from "react-router-dom";
import gclogo from "../../img/logo.png";

const AuthTemplateBlock = styled.div`
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #111111;
  padding: 10%;

  /* 내부 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background-color: #252525;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <>
      <AuthTemplateBlock>
        <WhiteBox>
          <div className="logo-area">
            <img src={gclogo} width="40px" height="40px" alt="" />
          </div>
          {children}
        </WhiteBox>
      </AuthTemplateBlock>
    </>
  );
};

export default AuthTemplate;
