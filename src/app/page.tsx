
"use client";
import Image from 'next/image'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/nav/nav-bar';
import Hotels from './components/hotels/page';
import TravelLocations from './components/travelLocation/page';



export default function Home() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("images/smart_traveller.png")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundAttachment:"fixed" }}>
      <div className="bg-customBlue2 flex items-center justify-between px-6 py-1"></div>
      <Router>
        <NavBar></NavBar>
        <TravelLocations></TravelLocations>
      </Router>
    </div>
  )
}
