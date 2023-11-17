
"use client";
import Image from 'next/image'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../nav/nav-bar';



export default function Gallery() {
    return (
        <div>
            <NavBar></NavBar>
            <div className='bg-white visible-50'>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <img src="https://source.unsplash.com/random/400x400?kandy />" alt="Image 1" className="w-1/3 h-full object-cover" />
                        <img src="https://source.unsplash.com/random/400x400?srilanka />" alt="Image 2" className="w-1/2 h-full object-cover" />
                        <img src="https://source.unsplash.com/random/400x400?temple />" alt="Image 3" className="w-1/3 h-full object-cover" />
                    </div>
                    <div className="flex flex-row justify-between">
                        <img src="https://source.unsplash.com/random/400x400?sinhala />" alt="Image 4" className="w-1/3 h-full object-cover" />
                        <img src="https://source.unsplash.com/random/400x400?colombo />" alt="Image 5" className="w-1/3 h-full object-cover" />
                        <img src="https://source.unsplash.com/random/400x400?srilanka />" alt="Image 6" className="w-1/3 h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}
