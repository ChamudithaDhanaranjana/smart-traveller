
"use client";
import Image from 'next/image'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../nav/nav-bar';



export default function Gallery() {
    return (
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: 'url("../images/smart_traveller.png")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
            <NavBar></NavBar>
            <div className="p-4 bg-opacity-75 bg-white m-8 rounded text-black">
                <div className="flex flex-col gap-8" style={{ height: "520px" }}>
                    <div className="overflow-y-auto ml-4 custom-scrollbar" style={{ height: "520px" }}>
                        <div className=''>
                            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                                <div className="-m-1 flex flex-wrap md:-m-2">
                                    <div className="flex w-1/2 flex-wrap">
                                        <div className="w-1/2 p-1 md:p-2">
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center"
                                                src="https://source.unsplash.com/random/?kandy/>" />
                                        </div>
                                        <div className="w-1/2 p-1 md:p-2">
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center"
                                                src="https://source.unsplash.com/random/?srilanka/>" />
                                        </div>
                                        <div className="w-full p-1 md:p-2">
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center"
                                                src="https://source.unsplash.com/random/?anuradhapura/>" />
                                        </div>
                                    </div>
                                    <div className="flex w-1/2 flex-wrap">
                                        <div className="w-full p-1 md:p-2">
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center"
                                                src="https://source.unsplash.com/random/?sigiriya/>" />
                                        </div>
                                        <div className="w-1/2 p-1 md:p-2">
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center"
                                                src="https://source.unsplash.com/random/?colombo/>" />
                                        </div>
                                        <div className="w-1/2 p-1 md:p-2">
                                            <img
                                                alt="gallery"
                                                className="block h-full w-full rounded-lg object-cover object-center"
                                                src="https://source.unsplash.com/random/?srlanka waterfall/>" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
