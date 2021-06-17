import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import Button from "./Button";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: #2a2a2a;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 100;
  margin: 0 auto;
`;

const Wrapper = styled(Responsive)`
  width: 1300px;
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

  .menu {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: white;
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

const style = {
  fontSize: "1.125rem",
  color: "white",
  verticalAlign: "middle",
  marginRight: "5px",
  marginBottom: "1px",
};

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
              <Link to="/category" className="menu">
                게임
              </Link>
            </li>
            <li>
              <Link to="/notice" className="menu">
                프로모션
              </Link>
            </li>
            <li>
              <Link to="/notice" className="menu">
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
              <Button to="/login">
                <BiUser style={style} />
                Sign In
              </Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
