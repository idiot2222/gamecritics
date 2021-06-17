import React from "react";
import "./todoTemplate.scss";
import { Link } from "react-router-dom";
import SideBarItem from "./SideBarItem";

function todoTemplate() {
  const menus = [
    { name: "게임", path: "/GateCategory" },
    { name: "공지사항", path: "/Notice" },
    { name: "고객센터", path: "/Center" },
  ];
  
  return (
    <div className="todoTemplate">
      <Link to="/main" className="titlelink">
      <div className="app-title">Gamecritics</div></Link>
      {/*  <div className="app-title">Gamecritics</div>
      <div className="sideBar">
        {menus.map((menu, index) => {
          return (
            <Link to={menu.path} key={index}>
              <SideBarItem menu={menu} />
            </Link>
          );
        })}
      </div>*/}
      <div className="sublink">
      <Link to="/main" className="sublinkmain">
        <div className="subgame">
          게임
        </div>
        </Link>
        <div className="subnotice">
        <Link to="/notice" className="sublinknotice">
          공지사항
          </Link>
        </div>
        <div className="subcenter">
        <Link to="/center" className="sublinkcenter">
          고객센터
          </Link>
        </div>

      </div>
      {/*
      {menus.map((menu, index) => {
        return (
          

          <Link to={menu.path} key={index} className="sublink">
            <div className="Linktext">
              {" "}
              <SideBarItem menu={menu} />
            </div>
          </Link>
        );
      })}
    */}
    </div>
  );
}
export default todoTemplate;
