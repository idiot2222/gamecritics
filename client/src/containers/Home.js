import React from "react";
import "./Home.scss";
import SimpleSlider from "../components/MainImage";
import HomeCenter1 from "../components/home/HomeCenter1";
import HomeCenter2 from "../components/home/HomeCenter2";
import HomeCenter3 from "../components/home/HomeCenter3";
const Home = () => {
  return (
    <div className="homeindex">
      <div className="SimpleSlider">
        <SimpleSlider />
      </div>
      <div className="homecenter1">
        <HomeCenter1 />
      </div>
      <div>
        <HomeCenter3/>
      </div>
      <div className="homecenter2">
        <HomeCenter2 />
      </div>
     
    </div>
  );
};

export default Home;
