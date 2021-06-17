import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import Button from "./Button";
import { Link } from "react-router-dom";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: rgb(14, 63, 128);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 100;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }

  .right {
    display: flex;
    align-items: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    float: left;
    margin-right: 20px;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            Gamecritics
          </Link>
          <ul>
            <li>
              {" "}
              <Link to="/content" className="logo">
                Game
              </Link>
            </li>
            <li>
              <Link to="/category" className="logo">
                카테고리
              </Link>
            </li>
            <li>
              <Link to="/notice" className="logo">
                공지사항
              </Link>
            </li>
          </ul>

          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button onClick={onLogout}>Logout</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">Sign In</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
