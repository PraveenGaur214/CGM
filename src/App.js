//import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Users from './pages/user';
import Login from './pages/login';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode === 'true';
  });

  const [bgColor, setBgColor] = useState(() => {
    const storedBgColor = localStorage.getItem('bgColor');
    return storedBgColor || 'white';
  });

  const [color, setColor] = useState(() => {
    const storedColor = localStorage.getItem('color');
    return storedColor || 'black';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    localStorage.setItem('bgColor', bgColor);
    localStorage.setItem('color', color);
  }, [isDarkMode, bgColor, color]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      const newBgColor = newMode ? 'black' : 'white';
      const newColor = newMode ? 'white' : 'black';
      setBgColor(newBgColor);
      setColor(newColor);
      return newMode;
    });
  };
  
  return (
    <div className='App' style={{ backgroundColor: bgColor, minHeight: '100vh', color: color }}>
    <ChakraProvider >
       <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <BrowserRouter basename="/CGM">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/users" element={<Users />} />

      </Routes>
    </BrowserRouter>  
      
    </ChakraProvider> 
    </div>  
  );
}

export default App;
