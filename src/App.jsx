import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Register from "./pages/register";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
