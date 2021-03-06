import {BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";

import "./App.css";
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
import {getItems} from "./category/component/ItemGenerator";

function App() {
  const items = getItems();

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
          {/*<Route component={CombinePages} path="/content" />*/}
          {items.map(item => {
            return <Route path={"/info/" + item.title} key={item.id}><CombinePages key={item.id} item={item}/></Route>;
          })}
          <Route component={Main} path="/category" />

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
//pullhhhhhhh
