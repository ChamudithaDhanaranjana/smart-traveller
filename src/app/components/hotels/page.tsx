"use client";
import Image from 'next/image'
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../nav/nav-bar';
import React, {useEffect, useState} from 'react';
import AddHotel from './popupForm/page';
import HotelView from './popupView/page';
import axios from "axios";
import HotelCard from "@/app/components/hotels/card/page";


interface FilterProps {
    // Add any additional props if needed
}


const Hotels: React.FC<FilterProps> = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [hotels, setHotels] = useState([]);

    const fetchHotels = async () => {
        try {
            const response = await axios('http://localhost:8000/api/hotel');
            if (!response) {
                throw new Error('Network response was not ok');
            } else {
                console.log("hotels",response.data.data);
                setHotels(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchHotels();
    }, []);
    return (
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: 'url("../images/smart_traveller.png")', backgroundSize: 'cover', backgroundPosition: 'center center' }} >
            <NavBar></NavBar>
            <div className="flex mt-4">
                <div className="flex-1 bg-white w-96 mr-4">
                    <div className="flex flex-col p-2 mt-8 w-80 ml-4">
                        <div
                            className="border-solid border-2 h-12 border-customBlue1 items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky"
                            style={{ top: '100px' }}
                        >
                            <input
                                className="placeholder:text-customBlue2 placeholder:p-36 font-bold uppercase rounded-full w-full py-4 pl-4 text-customBlue2 bg-transparent leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                                type="text"
                                placeholder="Search"
                            />
                            <div className="p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">
                                <svg
                                    className="w-6 h-6 text-customBlue2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-80 mr-4 ml-4 mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold tracking-tight text-gray-900 ">Filter</h2>
                        </div>
                        <div className="flex flex-col mb-6">
                            <label className="mb-2 text-sm font-medium text-gray-900 ">Hotel name</label>
                            <input
                                type="text"
                                id="location-name"
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div className="flex flex-col mb-6">
                            <label className="mb-2 text-sm font-medium text-gray-900">Hotel ID</label>
                            <input
                                type="number"
                                id="location-id"
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div className="flex flex-col mb-6">
                            <label className="mb-2 text-sm font-medium text-gray-900">Province</label>
                            <select
                                id="province"
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            >
                                <option value="">Select a province</option>
                                <option value="western">Western</option>
                                <option value="central">Central</option>
                                <option value="southern">Southern</option>
                            </select>
                        </div>
                        <div className="flex flex-col mb-6">
                            <label className="mb-2 text-sm font-medium text-gray-900">District</label>
                            <select
                                id="district"
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            >
                                <option value="">Select a district</option>
                                <option value="Colombo">Colombo</option>
                                <option value="Galle">Galle</option>
                                <option value="Kandy">Kandy</option>
                                <option value="Matara">Matara</option>
                            </select>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded ">
                                Ok
                            </button>
                        </div>
                    </div>

                    <div className="w-full mt-24 flex justify-center items-center">
                        <button onClick={() => setShowModal(true)} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded ">
                            +New Hotel
                        </button>
                    </div>

                </div>
                <div className="flex-2">
                    <div className="bg-white p-4 w-full h-full">

                        <h2 className='text-black p-2'>Hotels and Villas</h2>
                        <div className="flex flex-wrap">
                            {hotels && hotels.map((hotel: any, index: number) => (
                                <div key={hotel.id} className={`w-1/4 p-2 ${index % 4 === 0 ? 'clear-left' : ''}`}>
                                    <HotelCard hotel={hotel}></HotelCard>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div id="modal-root">
                {showModal && <div className="absolute top-28 left-96 w-9/12 h-full flex justify-center items-center">
                    <div className="w-5/6 flex justify-end " >

                        <AddHotel onClose={() => setShowModal(false)}></AddHotel>
                    </div>

                </div>}
            </div>
            {showModal2 && <div className="absolute left-80 w-full h-full flex justify-center items-center">
                <div className="w-full flex justify-end " >
                    <HotelView onClose={() => setShowModal2(false)}></HotelView>
                </div>

            </div>}
        </div>

    )
}
export default Hotels;
