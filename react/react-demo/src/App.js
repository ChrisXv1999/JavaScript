import React, { useState, createElement, createRef, useEffect } from 'react';
import request from './api/request.js';
import { Routes, Route, NavLink } from 'react-router-dom'
import Counter from './components/Counter.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Add from './components/AddOrEdit.jsx'
import './css/app.css'
import useCount from './hooks/useCount.js';
function App() {
  const homeRef = createRef();
  const {count,setCount} = useCount(0);
  useEffect(()=>{
    console.log(homeRef,count);
  })
  return (<div className='content'>
    <nav>
      <NavLink to="/home">home</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/add">add</NavLink>
    </nav>
    {count}
    <Routes>
      <Route path='/counter' element={<Counter />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/add' element={<Add />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
  </div>)
}

export default App;
