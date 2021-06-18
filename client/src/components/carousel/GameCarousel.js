import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel"; // $ yarn add react-responsive-carousel
import PageHeader from "../pageheader/PageHeader";
import "./GameCarousel.scss";

const GameCarousel2 = props => {

  const { title, name } = props;
  const [interval] = useState(1500);

  return (
    <div id="gameContainer">
      <PageHeader title={name}></PageHeader>

    {/* https://www.npmjs.com/package/react-responsive-carousel */}
    <Carousel
    autoPlay
    infiniteLoop
    interval={interval}>
      <div>
        <img src={process.env.PUBLIC_URL + "/img/" + title + "_01.png"} alt={title + "의 이미지"} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/img/" + title + "_02.png"} alt={title + "의 이미지"} />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/img/" + title + "_03.png"} alt={title + "의 이미지"} />
      </div>
      {/* <div>
      <video src={videoA} controls poster={imgD} style={{width:"100%"}}>비디오 표시안됨</video>
        <p className="legend">Legend 3</p>
      </div> */}
      <div>
        <img src={process.env.PUBLIC_URL + "/img/" + title + "_04.png"} alt={title + "의 이미지"} />
      </div>
    </Carousel>

    </div>
  );
};
export default GameCarousel2;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
