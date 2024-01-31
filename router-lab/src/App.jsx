import React from 'react';
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Kalvium from './components/kalvium';
import About from './components/about';
import Contacts from './components/contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to='/' className='Link'>Kalvium❤️</Link>
          <div className='links'>
          <Link to='/contacts' className='Link'>Contact</Link>
          <Link to='/about' className='Link'> About</Link>
          </div>
        <Routes>
          <Route path="/" element={<Kalvium />} />
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/about" element={<About/>} />
        </Routes>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;
