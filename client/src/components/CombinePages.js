import React from "react";
import GameCarousel from "./carousel/GameCarousel";
import GameInfo from "./information/GameInfo";
import GameComment from "./gamecomment/GameComment";
import "./CombinePages.scss";
import SpecDescription from "./information/SpecDescription";

// Add List
// yarn add antd
// yarn add react-responsive-carousel
// yarn add @ant-design/icons@4.0.0

const CombinePages = props => {
    const { title, genre } = props;

  return (
    <div className="testContainer">
      <div id="intoPage">
        <GameCarousel CarouselToHeaderTitle={title} />
        <GameInfo gameGenre={genre.genre} />
      </div>
        <SpecDescription/>
        <GameComment />
    </div>
  );
};
// CombinePages
export default CombinePages;
