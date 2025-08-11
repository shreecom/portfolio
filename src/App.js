/*eslint-disable*/
import { useEffect } from 'react';
import './App.css';
import Home from './Home/Home';
import './Home/Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
