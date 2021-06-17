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
      <div className="topheader1"><div class="topheadertitle">실시간 Bset Game</div></div>
      <div className="topcontainer1">
        <div className="topcontainer1_imgs">
          <div className="Img1">
            <div className="c1">
            <img src={Img1} alt="img1" className="cimg1" ></img>
            </div>
            <div class="Img1title">
              <p className="Img1intro">디아블로4</p>
            </div>
          </div>
          <div className="Img2">
            <div className="c2">
            <img src={Img2} alt="img2" className="cimg2"></img>
            </div>
            <div class="Img2title">
              <p className="Img2intro">에이지 오브 워터</p>
            
            </div>
          </div>
          <div className="Img3">
          <div className="c3">
            <img src={Img3} alt="img3" className="cimg3"></img>
            </div>
            <div class="Img3title">
              <p className="Img3intro">파이널 판타지 14: 효월의 종언</p>
            </div>
          </div>
          <div className="Img4">
          <div className="c4">
            <img src={Img4} alt="img4" className="cimg4"></img>
            </div>
            <div class="Img4title">
              <p className="Img4intro">헌터스 아레나: 레전드</p>
            </div>
          </div>
          <div className="Img5">
          <div className="c5">
            <img src={Img5} alt="img5" className="cimg5 "></img>
            </div>
            <div class="Img5title">
              <p className="Img5intro">패스 오브 엑자일</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    //top1끝
  );
};

export default homecenter1;
