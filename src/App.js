import React from 'react';
// import ReactDOM from "react-dom/client";
import { Outlet } from 'react-router-dom';


import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';



export default function App() {





  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

