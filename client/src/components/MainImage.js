import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../slick.css";
import "../slick-theme.css";
import "./MainImage.scss";
import Slider from "react-slick";
import Img1 from "./home/topImgs/top1.jpg";
import Img2 from "./home/topImgs/top2.jpg";
import Img3 from "./home/topImgs/top3.jpg";
import Img4 from "./home/topImgs/top4.jpg";
import Img5 from "./home/topImgs/top5.jpg";

export default class SimpleSlider1 extends Component {
  render() {
    const Settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
    };
    return (
      <div className="MainImage">
        <Slider {...Settings} className="SIL1">
          <div>
            <Link to="/info/lol">
              <img src={Img1} alt="img1" className="Imgset" />
            </Link>
            <div className="img1intro">
              <div className="img1introduce">League of Legends</div>
            </div>
          </div>
          <div>
            <Link to="/info/bag">
              <img src={Img2} alt="img2" className="Imgset" />
            </Link>
            <div className="img2intro">
              <div className="img2introduce">배틀 그라운드</div>
            </div>
          </div>
          <div>
            <Link to="/info/fortnite">
              <img src={Img3} alt="img3" className="Imgset" />
            </Link>
            <div className="img3intro">
              <div className="img3introduce">포트나이트</div>
            </div>
          </div>
          <div>
            <Link to="/info/endwar">
              <img src={Img4} alt="img4" className="Imgset" />
            </Link>
            <div className="img4intro">
              <div className="img4introduce">Tom Clancy's EndWar</div>
            </div>
          </div>
          <div>
            <Link to="/info/tekken">
              <img src={Img5} alt="img5" className="Imgset" />
            </Link>
            <div className="img5intro">
              <div className="img5introduce">철권 7</div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
