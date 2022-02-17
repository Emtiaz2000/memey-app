import React from 'react';
import { Routes,Route } from 'react-router-dom';
import ConnectWalet from './views/connect walets/ConnectWalet';
import Home from './views/home/Home'
import MemeGen from './views/memeGen/MemeGen'

/* css style */
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/connect-wallet" element={<ConnectWalet/>}/>
        <Route path='/generate-meme' element={<MemeGen/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
