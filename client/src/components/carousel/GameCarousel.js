import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel"; // $ yarn add react-responsive-carousel
import imgA from "../../images/imgA.png";
import imgB from "../../images/imgB.jpg";
import imgC from "../../images/imgC.jpg";
import imgD from "../../images/imgD.jpg";
import PageHeader from "../pageheader/PageHeader";
import "./GameCarousel.scss";

const GameCarousel2 = () => {
  
  const [interval] = useState(1500);
  return (
    <div id="gameContainer">
      <PageHeader></PageHeader>

    {/* https://www.npmjs.com/package/react-responsive-carousel */}
    <Carousel
    autoPlay
    infiniteLoop
    interval={interval}> 
      <div>
      <img src={imgA} alt="" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={imgB} alt="" />
      </div>
      <div>
        <img src={imgC} alt="" />
      </div>
      {/* <div>
      <video src={videoA} controls poster={imgD} style={{width:"100%"}}>비디오 표시안됨</video>
        <p className="legend">Legend 3</p>
      </div> */}
      <div>
        <img src={imgD} alt="" />
      </div>
    </Carousel>
    
    </div>
  );
};
export default GameCarousel2;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
