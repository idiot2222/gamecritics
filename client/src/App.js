import { Route } from "react-router-dom";
import React from "react";
// import TodoTemplate from "./components/todoTemplate";
// import SimpleSlider from "./components/MainImage";
// import TopHeader from "./components/TopHeader";
// import Home from "./containers/Home";
// import GameIntro from "./containers/GamaIntro";

import "./App.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Home from "./containers/Home";
import Main from "./category/component/Main";
import HeaderContainer from "./login/containers/common/HeaderContainer";
import PostPage from "./login/components/Post/PostPage";
import LoginPage from "./login/components/Login/LoginPage";
import RegisterPage from "./login/components/Register/RegisterPage";
import Profile from "./login/components/Profile/Profile";
import Footer from "./Footer";
import CombinePages from "./components/CombinePages";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <HeaderContainer />
          <Route component={Home} path="/" exact />
          <Route component={PostPage} path="/post" />
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={Profile} path="/profile" />
          <Route component={CombinePages} path="/content" />
          <Route component={Main} path="/category" />

          {/* <div className="SimpleSlider">
            <SimpleSlider />
          </div>
          <div className="homecenter1">
            <HomeCenter1 />
          </div>
          <div className="homecenter2">
            <HomeCenter2 />
          </div> */}
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}
export default App;

// 터미널 설치 목록
// yarn add antd
// yarn add react-responsive-carousel
// yarn add @ant-design/icons@4.0.0
