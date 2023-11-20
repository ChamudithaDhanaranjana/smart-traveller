"use client";
import NavBar from "../nav/nav-bar"
import {useEffect, useState} from "react";
import { useRouter } from 'next/navigation';
import Email  from '../signin/page'


export default function Review() {

    useEffect(() => {

    }, []);

    const router = useRouter();

    const handleNavigation = () => {
    };

    return (
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: 'url("../images/smart_traveller.png")', backgroundSize: 'cover', backgroundPosition: 'center center' }} >
            <NavBar></NavBar>
            <div className="h-full" style={{ height: "650px" }}>
                <div className="h-full w-fll m-8">
                    <div className="p-4 bg-opacity-75 bg-white m-8 rounded text-black">
                        <div className="flex">
                            <div className="flex-2 mr-8 ml-8 w-3/4">
                                <div className="flex flex-col gap-8" style={{ height: "520px" }}>
                                    <div className="overflow-y-auto ml-4 custom-scrollbar" style={{ height: "520px" }}>
                                        <div className="flex flex-col rounded-md shadow">
                                            <div className="flex flex-row items-center justify-between p-4">
                                                <div className="flex flex-row items-center">
                                                    <img src="https://example.com/profile-picture.png" alt="Profile picture" className="w-10 h-10 rounded-full" />
                                                    <span className="ml-2 text-sm font-semibold">Kavindu Dhananjaya</span>
                                                </div>
                                                <span className="text-sm text-gray-500">23 January 2023</span>
                                            </div>

                                            <div className="flex flex-col p-4">
                                                <div className="flex justify-between">
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-semibold">Hotel was clean and hygiene was maintained, staff behaviour was very good.</h3>
                                                        <p className="text-sm text-gray-500">Nice place to visit. Thanks for your services.</p>
                                                    </div>
                                                    <div className="flex-2">
                                                        <div className="flex flex-row text-white items-center px-2 py-2 w-16 h-16 bg-green-500">
                                                            <span className="text-xl font-bold">4.6</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
                                                                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col rounded-md shadow">
                                            <div className="flex flex-row items-center justify-between p-4">
                                                <div className="flex flex-row items-center">
                                                    <img src="https://example.com/profile-picture.png" alt="Profile picture" className="w-10 h-10 rounded-full" />
                                                    <span className="ml-2 text-sm font-semibold">Kavindu Dhananjaya</span>
                                                </div>
                                                <span className="text-sm text-gray-500">23 January 2023</span>
                                            </div>

                                            <div className="flex flex-col p-4">
                                                <div className="flex justify-between">
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-semibold">Hotel was clean and hygiene was maintained, staff behaviour was very good.</h3>
                                                        <p className="text-sm text-gray-500">Nice place to visit. Thanks for your services.</p>
                                                    </div>
                                                    <div className="flex-2">
                                                        <div className="flex flex-row text-white items-center px-2 py-2 w-16 h-16 bg-green-500">
                                                            <span className="text-xl font-bold">4.6</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
                                                                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col rounded-md shadow">
                                            <div className="flex flex-row items-center justify-between p-4">
                                                <div className="flex flex-row items-center">
                                                    <img src="https://example.com/profile-picture.png" alt="Profile picture" className="w-10 h-10 rounded-full" />
                                                    <span className="ml-2 text-sm font-semibold">Kavindu Dhananjaya</span>
                                                </div>
                                                <span className="text-sm text-gray-500">23 January 2023</span>
                                            </div>

                                            <div className="flex flex-col p-4">
                                                <div className="flex justify-between">
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-semibold">Hotel was clean and hygiene was maintained, staff behaviour was very good.</h3>
                                                        <p className="text-sm text-gray-500">Nice place to visit. Thanks for your services.</p>
                                                    </div>
                                                    <div className="flex-2">
                                                        <div className="flex flex-row text-white items-center px-2 py-2 w-16 h-16 bg-green-500">
                                                            <span className="text-xl font-bold">4.6</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
                                                                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col rounded-md shadow">
                                            <div className="flex flex-row items-center justify-between p-4">
                                                <div className="flex flex-row items-center">
                                                    <img src="https://example.com/profile-picture.png" alt="Profile picture" className="w-10 h-10 rounded-full" />
                                                    <span className="ml-2 text-sm font-semibold">Kavindu Dhananjaya</span>
                                                </div>
                                                <span className="text-sm text-gray-500">23 January 2023</span>
                                            </div>

                                            <div className="flex flex-col p-4">
                                                <div className="flex justify-between">
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-semibold">Hotel was clean and hygiene was maintained, staff behaviour was very good.</h3>
                                                        <p className="text-sm text-gray-500">Nice place to visit. Thanks for your services.</p>
                                                    </div>
                                                    <div className="flex-2">
                                                        <div className="flex flex-row text-white items-center px-2 py-2 w-16 h-16 bg-green-500">
                                                            <span className="text-xl font-bold">4.6</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
                                                                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-3 mr-4">
                                <div className="container w-96">
                                    <div className="flex justify-between items-center mt-10">
                                        <h1 className="text-xl">Write your review</h1>
                                    </div>

                                    <div className="mt-10">
                                        <textarea className="w-full h-64 border border-gray-300 rounded focus:outline-none resize-none" placeholder="Type here"></textarea>
                                    </div>
                                    <div className="">
                                        <div className='w-full px-4'>
                                            <span className="ml-2">Give Your Rate</span>
                                            <div className='mb-2'>
                                                <div className='bg-stroke bg-blue-200 relative h-2.5 w-full rounded-2xl'>
                                                    <div className='bg-blue-500 absolute top-0 left-0 h-full w-[45%] rounded-2xl'></div>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <span className="ml-2 text-3xl font-bold">3.2</span>
                                                <div className="flex ml-2 mt-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="black">
                                                        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="black">
                                                        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="black">
                                                        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex justify-end">
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                                onClick={()=>{
                                                    if(!Email){
                                                    }
                                                    else {
                                                        console.log('user:',Email);
                                                        // router.push('/components/signin')
                                                    }
                                                }}
                                        >Send</button>
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