import React from "react";
import './TopHeader.scss';
import TodoTemplate from "./todoTemplate";
const MenuItem = ({active, children, to}) => (
  <div className="menu-item">
          {children}
  </div>
)

const TopHeader=()=>{
return(

<div className="TopMenu">
 
<MenuItem>로그인</MenuItem>  
<MenuItem>공지사항</MenuItem>
<TodoTemplate/>

</div>

)
}

export default TopHeader;