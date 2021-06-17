import React from "react";
import "./Home.scss";

import HeaderContainer from "../login/containers/common/HeaderContainer";
import SimpleSlider from "../components/MainImage";
import HomeCenter1 from "../components/home/HomeCenter1";
import HomeCenter2 from "../components/home/HomeCenter2";

const Home = () => {
  return (
    <>
      <HeaderContainer />
      <div className="SimpleSlider">
        <SimpleSlider />
      </div>
      <div className="homecenter1">
        <HomeCenter1 />
      </div>
      <div className="homecenter2">
        <HomeCenter2 />
      </div>
    </>
  );
};

export default Home;
