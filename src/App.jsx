import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/Home';
import Cont1 from './components/Cont1';
import Cont2 from './components/Cont2';
import Login from './components/Login';

import './App.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Home></Home>
      <Cont1></Cont1>
      <Cont2></Cont2>
      <Login></Login>
    </>
  );
}

export default App;
