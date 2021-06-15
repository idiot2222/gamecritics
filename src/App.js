import { Route } from 'react-router-dom';
import LoginPage from './login/components/Login/LoginPage';
import RegisterPage from './login/components/Register/RegisterPage';
import Profile from './login/components/Profile/Profile';
import './App.css';

function App() {
  return (
    <>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={Profile} path="/profile" />
    </>
  );
}

export default App;
