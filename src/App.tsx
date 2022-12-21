import { useState,useEffect } from 'react'
import { Routes, Route,useNavigate } from 'react-router-dom'
import NavBarTop from './components/NavBar/NavBar';
import * as authService from './services/authServices'
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp'
import Account from './pages/Account/Account';
import Home from './pages/Home/Home';
function App() {
  const [user, setUser] = useState(authService.getUser());

  const navigate = useNavigate()
  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };
  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };
  return (
    <>
  <NavBarTop  user={user} handleLogout={handleLogout} />
    <Routes>
      <Route path="/login"element={<Login handleSignupOrLogin={handleSignupOrLogin} />}></Route>
      <Route path="/signup"element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}></Route>
      <Route path='/'element={<Home />} />
      <Route  path='/account'element={<Account user={user}/>} />
    </Routes>
  </>
  )
}

export default App
