import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Explora from './pages/Explora';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Bohol from './pages/Bohol';
import Palawan from './pages/Palawan';
import Boracay from './pages/Boracay';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import EditProfile from './pages/EditProfile';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [color, changeColor] = useState("#F1EDE7");
  document.body.style.backgroundColor = color;
  const location = useLocation()

  // change bg color per page
  useEffect(()=>{
    if(location.pathname === '/bohol'){
      changeColor('#2E2725')
    } else if(location.pathname === '/palawan') {
      changeColor('#133942')
    } else if(location.pathname === '/boracay') {
      changeColor('#131E26')
    } else {
      changeColor('#F1EDE7')
    }
  }, [location.pathname])
  
  return (
    <Routes>
      <Route path='/' element={<Explora />} />
      <Route path='/sign-in' element={<LogIn />} />
      <Route path='/sign-up' element={<SignUp />} /> 
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/*' element={<NotFound />} />
      <Route path='/profile' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
      </Route>
      <Route path='/edit-profile' element={<PrivateRoute />}>
        <Route path='/edit-profile' element={<EditProfile />} />
      </Route>
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/bohol' element={<Bohol />} />
      <Route path='/palawan' element={<Palawan />} />
      <Route path='/boracay' element={<Boracay />} />
    </Routes>
  );
}

export default App;
