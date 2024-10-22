import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton.js';
import Footer from './components/Footer.js';
import Footer2 from './components/Footer2.js';
import Products from './components/Products.js';
import { useState } from 'react';
import ButtonSharedState from './components/ButtonSharedState.js';
import NestedComponent from './components/NestedComponent.js';
import ButtonWithRef from './components/ButtonWithRef.js';
import StateObject from './components/StateObject.js';
import Stopwatch from './components/Stopwatch.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.js';
import NotFound from './pages/NotFound.js';
import Home from './pages/Home.js';
import About from './pages/About.js';

function App() {
  return (
    <>
    <div>Welcome to my React App</div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
