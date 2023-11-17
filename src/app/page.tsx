
"use client";
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/nav/nav-bar';



export default function Home() {
  return (
    

      <Router>
        
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("images/smart_traveller.png")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <NavBar></NavBar>
        <div>
        <div className="w-1/3 ml-28 mt-36">
          <img src="images/smart_traveller_logo.png" alt="" />
          <div className="font-logo text-5xl text-black font-medium">Visit Sri Lanka</div>
        </div>
        <div className="flex flex-col p-2 mt-8 w-96 ml-28">
          <div className="border-solid border-2 h-12 border-customBlue1 items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky" style={{ top: "100px" }}>

            <input className="placeholder:text-customBlue2 placeholder:p-52 font-bold uppercase rounded-full w-full py-4 pl-4 text-customBlue2 bg-transparent leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="Search"></input>

            <div className=" p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">

              <svg className="w-6 h-6 text-customBlue2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>

            </div>

          </div>

        </div>
        <div className="ml-32 text-black font-medium text-sm">
          <div>make freedom to your soul and relax your tension of life,</div>
          <div>we are providing higher</div>
        </div>
      </div>
    </div>
      </Router>

  )
}
