import React, { Component } from "react";
import MakeSlider from "../makeslider/MakeSlider";
import "./HomeCenter2.scss";
const HomeCenter2 = () => {
  return (
    <div className="top2">
      <div className="topheader1">신작 Game</div>
      <div className="topcontainer2">
        <MakeSlider />
      </div>
    </div>
  );
};
export default HomeCenter2;
