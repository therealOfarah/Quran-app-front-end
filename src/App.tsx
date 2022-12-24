import { useState,useEffect } from 'react'
import { Routes, Route,useNavigate } from 'react-router-dom'
import NavBarTop from './components/NavBar/NavBar';
//service files
import * as authService from './services/authServices'
import * as quranService from './services/quranServices'
//pages
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp'
import Account from './pages/Account/Account';
import Home from './pages/Home/Home';
import Qiblah from './pages/Qiblah/Qiblah';
import Quran from './pages/Quran/Quran';
import Hadith from './pages/Hadith/Hadith';
//
function App() {
  const [user, setUser] = useState(authService.getUser());
  const [verse,setVerse]=useState()
  const [quran,setQuran]=useState()
  const navigate = useNavigate()
  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };
  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };
  async function getRandomVerse(num:number){
    const ayah = await quranService.getVerse(num)
    setVerse(ayah)
  }
  async function getWholeQuran(){
    const whole = await quranService.getAll()
    setQuran(whole)
  }
  return (
    <>
  <NavBarTop  user={user} handleLogout={handleLogout} />
    <Routes>
      <Route path="/login"element={<Login handleSignupOrLogin={handleSignupOrLogin} />}></Route>
      <Route path="/signup"element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}></Route>
      <Route path='/'element={<Home getRandomVerse={getRandomVerse} verse={verse} />} />
      <Route path='/qibla'element={<Qiblah />} />
      <Route path='/quran'element={<Quran getWholeQuran={getWholeQuran} quran={quran} />} />
      <Route path='/hadith'element={<Hadith />} />
      <Route  path='/account'element={<Account user={user}/>} />
    </Routes>
  </>
  )
}

export default App
