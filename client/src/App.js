import { Route } from 'react-router-dom';
import PostPage from './login/components/Post/PostPage';
import LoginPage from './login/components/Login/LoginPage';
import RegisterPage from './login/components/Register/RegisterPage';
import Profile from './login/components/Profile/Profile';
import './App.css';
import Main from "./category/component/Main";

function App() {
  return (
    <>
      <Route component={PostPage} path="/post" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={Profile} path="/profile" />

        <Main />
    </>
  );
}

export default App;
