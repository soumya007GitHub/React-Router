import React from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home.jsx";
import Contacts from "./components/Contacts.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import Mens from "./components/Mens.jsx";
import Women from "./components/Women.jsx";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/products" element={<Products/>}>
          <Route path="mens" element={<Mens/>}/>
          <Route path="women" element={<Women/>}/>
        </Route>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App;