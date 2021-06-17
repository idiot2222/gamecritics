import React from "react";
import LeftList from "../LeftList";
//import LeftMakeSlider from "../Leftmakeslider/LeftMakeSlider";
import "./HomeCenter3.scss";
const HomeLeftList =()=>
{


    return (
        <div className="LeftLayout">
            <div className="LeftListG">
            <LeftList/>
            
            </div>
            {/* <div className="LeftMakeSlider">
                <LeftMakeSlider/>
            </div> */}
        </div>


    );


}

export default HomeLeftList;