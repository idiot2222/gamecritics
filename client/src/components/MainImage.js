import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../slick.css";
import "../slick-theme.css";
import "./MainImage.scss";
import Slider from "react-slick";
import Img1 from "./home/topImgs/top1.jpg";
import Img2 from "./home/topImgs/top2.png";
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
      <div>
        <Slider {...Settings} className="SIL1">
          <div>
            <h3>
              <Link to={"../containers/GameIntro"}>
                <img src={Img1} alt="img1" className="Imgset" />
              </Link>
            </h3>
          </div>
          <div>
            <h3>
              <img src={Img2} alt="img2" className="Imgset" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={Img3} alt="img3" className="Imgset" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={Img4} alt="img4" className="Imgset" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={Img5} alt="img5" className="Imgset" />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
