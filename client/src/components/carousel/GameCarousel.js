import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel"; // $ yarn add react-responsive-carousel
import PageHeader from "../pageheader/PageHeader";
import "./GameCarousel.scss";







const GameCarousel2 = props => {
  // title : 이미지 파일 경로
  // name : PageHeader title props 에전달
  const { title, name } = props;
  
  // 슬라이드 간격 1.5s
  const [interval] = useState(1500); 

  return (
    <div id="gameContainer">
      <PageHeader title={name}></PageHeader>

    {/* 사용법 : https://www.npmjs.com/package/react-responsive-carousel */}
    <Carousel
    autoPlay
    infiniteLoop
    interval={interval}>
      {/* 1 ~ 4 슬라이드 이미지 경로 지정 */}
      <div>
        <img src={process.env.PUBLIC_URL + "/img/" + title + "_01.png"} alt={title + "의 이미지"} />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/img/" + title + "_02.png"} alt={title + "의 이미지"} />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/img/" + title + "_03.png"} alt={title + "의 이미지"} />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/img/" + title + "_04.png"} alt={title + "의 이미지"} />
      </div>
    </Carousel>

    </div>
  );
};







export default GameCarousel2;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
