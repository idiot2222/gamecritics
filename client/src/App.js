import { Route } from "react-router-dom";
import React from "react";
<<<<<<< HEAD
import TodoTemplate from "./components/todoTemplate";
import SimpleSlider from "./components/MainImage";
import TopHeader from "./components/TopHeader";
import Home from "./containers/Home";
import GameIntro from "./containers/GamaIntro";

import PostPage from "./login/components/Post/PostPage";
import LoginPage from "./login/components/Login/LoginPage";
import RegisterPage from "./login/components/Register/RegisterPage";
import Profile from "./login/components/Profile/Profile";
import "./App.css";
=======
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Home from "./containers/Home";
>>>>>>> 308ac244a1187fd7060f84d02c2191d386a024f8
import Main from "./category/component/Main";
import HeaderContainer from "./login/containers/common/HeaderContainer";
// import SimpleSlider from "./components/MainImage";
// import HomeCenter1 from "./components/home/HomeCenter1";
// import HomeCenter2 from "./components/home/HomeCenter2";
import PostPage from "./login/components/Post/PostPage";
import LoginPage from "./login/components/Login/LoginPage";
import RegisterPage from "./login/components/Register/RegisterPage";
import Profile from "./login/components/Profile/Profile";
import Footer from "./Footer";
import CombinePages from "./components/CombinePages";

function App() {
  return (
    <>
<<<<<<< HEAD
      <TopHeader />
      <Route component={Home} path="/" />
      <Route component={PostPage} path="/post" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={Profile} path="/profile" />

      {/*<Main />
      <CombinePages />
      */}
      <Footer />
=======
      <Router>
        <ScrollToTop>
          <Route component={Home} path="/" exact />
          <Route component={PostPage} path="/post" />
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={Profile} path="/profile" />
          <Route component={CombinePages} path="/content" />
          <Route component={Main} path="/category" />

          <HeaderContainer />
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
>>>>>>> 308ac244a1187fd7060f84d02c2191d386a024f8
    </>
  );
}
export default App;

// 터미널 설치 목록
// yarn add antd
// yarn add react-responsive-carousel
// yarn add @ant-design/icons@4.0.0
