import { Route } from "react-router-dom";
import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Home from "./containers/Home";
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
      <Router>
        <ScrollToTop>
          <Route component={Home} path="/" />
          <Route component={PostPage} path="/post" />
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={Profile} path="/profile" />
          <Route component={CombinePages} path="/content" />

          <HeaderContainer />
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
