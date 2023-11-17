
"use client";
import Image from 'next/image'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../nav/nav-bar';



export default function Gallery() {
    return (
        <div>
            <NavBar></NavBar>
            <div className="bg-white">
                <label className="text-blue-500 text-7xl ml-12 font-bold">ABOUT US</label>
                <div>
                    <label className="text-gray-700 text-4xl ml-12 font-semibold mt-4"> Visit Sri Lanka </label>
                </div>
                <div>
                    <p className="text-gray-900 text-md ml-12 mt-4 font-semibold tracking-wider" >

                        "Visit Sri Lanka" is your passport to the wonders of this enchanting <br />
                        island nation. We're here to guide you in discovering the miracles of <br />
                        Sri Lanka, from breathtaking locations to top-notch hotel facilities. <br />
                        Let's embark on a memorable journey together.
                    </p>
                </div>

                <div className="mt-8">
                    <p className="text-gray-900 text-md ml-12 font-semibold tracking-wider">
                        This concise "About" section still conveys your website's purpose and  <br />
                        invitation to explore Sri Lanka's treasures.
                    </p>

                </div>

                <div className="mt-8">
                    <p className="text-gray-900 text-md ml-12 font-semibold tracking-wider">
                        Thank You.
                    </p>

                </div>

            </div>
        </div>

    )
}