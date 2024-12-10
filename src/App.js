import React from "react";
import {Route} from 'react-router-dom';
import { Routes, Navigate } from 'react-router-dom';
import About from "./About";
import Contact from './Contact';
import Home from "./Home";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App = () => {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home name="Home" />} />
      <Route exact path="/About" element={<About name="About" />} />
      <Route exact path="/Service" element={<Service name="Service" />} />
      <Route exact path="/Contact" element={<Contact name="Contact" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <Footer/>
    </>
  ); 
}
export default App;

