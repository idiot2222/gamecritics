import React from "react";
import "./LeftListItems.scss";
import { Link } from "react-router-dom";
const LeftListItems = () => {
  return (
    <div className="ListItems">
     
      <div className="Text1">
      <Link to="/info/lol">
        9월 23일 디아2: 레저렉션 출시일</Link>
      </div>
      <div className="Text2">
      <Link to="/info/lol">19일 배틀그라운드 모바일 한일전</Link></div>
      <div className="Text3">  <Link to="/info/lol">7월 29일 심즈:4 출시일</Link></div>
      <div className="Text4">  <Link to="/info/lol">벡스코 세계 게임 박람회 개최</Link></div>
      <div className="Text5">  <Link to="/info/lol">GSSA 신작 대규모 게임 출시예정</Link></div>
      <div className="Text6">  <Link to="/info/lol">엑스포 RPG 대회 개최 예정</Link></div>
      <div className="Text7">  <Link to="/info/lol">신규 청소년 게임 금지법 논의</Link></div>
      </div>
  
  );
};

export default LeftListItems;
