import React from "react";
import "./HomeCenter1.scss";
import Img1 from "./centerImgs/centerImg1.jpg";
import Img2 from "./centerImgs/centerImg2.jpg";
import Img3 from "./centerImgs/centerImg3.jpg";
import Img4 from "./centerImgs/centerImg4.jpg";
import Img5 from "./centerImgs/centerImg5.jpg";

const homecenter1 = () => {
  return (
    <div className="top1">
      <div className="topheader1">실시간 Bset Game</div>
      <div className="topcontainer1">
        <div className="topcontainer1_imgs">
          <div className="Img1">
            <img src={Img1} alt="img1" className="cimg1"></img>
            <div class="Img1title">
              <p className="Img1intro">농구</p>
              <p className="Img1intro1">재밌는농구^^</p>
            </div>
          </div>
          <div className="Img2">
            <img src={Img2} alt="img2" className="cimg2"></img>
            <div class="Img2title">
              <p className="Img2intro">슈퍼마리오</p>
              <p className="Img2intro1">재밌는농구^^</p>
            </div>
          </div>
          <div className="Img3">
            <img src={Img3} alt="img3" className="cimg3"></img>
            <div class="Img3title">
              <p className="Img3intro">다이스</p>
              <p className="Img3intro1">재밌는농구^^</p>
            </div>
          </div>
          <div className="Img4">
            <img src={Img4} alt="img4" className="cimg4"></img>
            <div class="Img4title">
              <p className="Img4intro">체스</p>
              <p className="Img4intro1">재밌는농구^^</p>
            </div>
          </div>
          <div className="Img5">
            <img src={Img5} alt="img5" className="cimg5 "></img>
            <div class="Img5title">
              <p className="Img5intro">롤</p>
              <p className="Img5intro1">재밌는농구^^</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    //top1끝
  );
};
export default homecenter1;
