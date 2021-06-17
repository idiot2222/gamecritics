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
      <div className="app-title">Gamecritics</div>
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
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <div className="Linktext">
              {" "}
              <SideBarItem menu={menu} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default todoTemplate;
