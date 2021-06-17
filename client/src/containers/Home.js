import React from "react";
import SimpleSlider from "../components/MainImage";
import "./Home.scss";
import HomeCenter1 from "../components/home/HomeCenter1";
import HomeCenter2 from "../components/home/HomeCenter2";
const Home = () => {
  return (
    <div>
      <div className="SimpleSlider">
        <SimpleSlider />
      </div>
      <div className="homecenter1">
        <HomeCenter1 />
      </div>

      <div className="homecenter2">
        <HomeCenter2 />
      </div>
    </div>
  );
};

export default Home;
