import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Tandc from './Pages/Tandc';
import Contact from './Pages/Contact'
import Signin from './Pages/Signin';
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/ForgotPassword';
import Message from './Pages/Message';
import Notifications from './Pages/Notifications';
import Rewards from './Pages/Rewards';
import FoodTracking from './Pages/FoodTracking';
import Forum from './Pages/Forum';
import LogOut from './Pages/LogOut';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/LogOut" element={<LogOut />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Forgotpassword" element={<ForgotPassword />} />
        <Route element={<Layout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Tandc" element={<Tandc />} />
          <Route path="/Message" element={<Message />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Rewards" element={<Rewards points={100} worth={1} />} />
          <Route path="/FoodTracking" element={<FoodTracking />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Contact" element={<Contact />} />
     
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
