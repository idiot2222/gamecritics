import React from "react";
import LeftListItems from "./LeftListItems";
import "./LeftList.scss";

const LeftList = () => {
  return (
    <div className="alllist">
      <div className="backtitle">
       <div className="listtile">
         NEWS
       </div>
      </div>
      <div className="LeftListc">
      <LeftListItems />
      
      </div>
  </div>
  );
};

export default LeftList;
