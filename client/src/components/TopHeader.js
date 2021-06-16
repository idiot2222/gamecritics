import React from "react";
import './TopHeader.scss';

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
</div>

)
}

export default TopHeader;