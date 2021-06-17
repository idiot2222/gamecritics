import GameCarousel from "./carousel/GameCarousel";
import GameInfo from "./information/GameInfo";
import GameComment from "./gamecomment/GameComment";
import "./CombinePages.scss";
import SpecDescription from "./information/SpecDescription";

// Add List
// yarn add antd
// yarn add react-responsive-carousel
// yarn add @ant-design/icons@4.0.0

const CombinePages = () => {
  return (
    <div className="testContainer">
      <div id="intoPage">
        {/* <PageHeader /> in GameCarousel*/}
        <GameCarousel />
        <GameInfo />
      </div>
        <SpecDescription/>
        <GameComment />
    </div>
  );
};
// CombinePages
export default CombinePages;
