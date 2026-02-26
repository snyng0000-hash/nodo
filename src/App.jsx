import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Home from './components/Home';
import Cont1 from './components/Cont1';
import Cont2 from './components/Cont2';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';

import './App.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header></Header>

      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cont1" element={<Cont1 />} />
        <Route path="/cont2" element={<Cont2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
