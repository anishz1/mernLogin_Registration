import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Home from './component/Home';

import About from './component/About';
import Register from './component/Register';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;
