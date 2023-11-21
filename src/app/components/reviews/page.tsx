"use client";
import NavBar from "../nav/nav-bar"
import React, {useEffect, useState} from "react";
import { useRouter } from 'next/navigation';
import Email  from '../signin/page'
import axios from "axios";


export default function Review(locales?: string | string[], options?: Intl.DateTimeFormatOptions) {

    const [review, setReview] = useState([]);
    const [locations, setLocations] = useState([]);
    const [formData, setFormData] = useState<any>({
        name:'',
        description:'',
        location:'',
    });

    const router = useRouter();

    const fetchLocations = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/travel_location`);
            if (!response) {
                throw new Error('Network response was not ok');
            } else {
                console.log()
                setLocations(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const fetchReviews = async () => {
        try {
            const response = await axios(`http://localhost:8000/api/review`);
            if (!response) {
                throw new Error('Network response was not ok');
            } else {
                console.log("reviews",response.data.data);
                setReview(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchReviews();
        fetchLocations();
    }, []);

    const addReview = async () => {
        axios.post(`http://localhost:8000/api/review`, formData)
            .then((response) => {
                window.alert("Review added successfully!")
                window.location.reload();
            })
            .catch(error => {
                console.log('error',error)
                window.alert('Something went wrong!!')
            })
            .finally(() => {

            });
    }

    const formattedDate = (dateString: string | number | Date) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(options as any);
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
                                        {review && review.map((r: any, index: number) => (

                                        <div className="flex flex-col rounded-md shadow">
                                            <div className="flex flex-row items-center justify-between p-4">
                                                <div className="flex flex-row items-center">
                                                    <img src="https://example.com/profile-picture.png" alt="Profile picture" className="w-10 h-10 rounded-full" />
                                                    <span className="ml-2 text-sm font-semibold">{r.name}</span>
                                                </div>
                                                <span className="text-sm text-gray-500">{formattedDate(r.created_at)}</span>
                                            </div>

                                            <div className="flex flex-col p-4">
                                                <div className="flex justify-between">
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-semibold">{r.description}</h3>
                                                        <p className="text-sm text-gray-500">Location: {r.location}</p>
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
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-3 mr-4">
                                <div className="container w-96">
                                    <div className="flex justify-between items-center mt-10">
                                        <h1 className="text-xl">Your name</h1>
                                    </div>
                                    <div className="mt-10">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full py-2 px-3 rounded-full bg-gray-200 focus:outline-none focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center mt-10">
                                        <h1 className="text-xl">Write your review</h1>
                                    </div>

                                    <div className="mt-10">
                                        <textarea className="w-full h-64 border border-gray-300 rounded focus:outline-none resize-none" placeholder="Type here"
                                                  value={formData.description}
                                                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                                        ></textarea>
                                    </div>
                                    <div className="">
                                        <div className='w-full px-4'>
                                            <span className="ml-2">Pick a location</span>
                                            <div className='mb-2'>
                                                {/*<div className='bg-stroke bg-blue-200 relative h-2.5 w-full rounded-2xl'>*/}
                                                {/*    <div className='bg-blue-500 absolute top-0 left-0 h-full w-[45%] rounded-2xl'></div>*/}
                                                {/*</div>*/}
                                                <select
                                                    id="type"
                                                    name="type"
                                                    value={formData.location}
                                                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                                                    className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded-full leading-tight focus:outline-none focus:border-indigo-500"
                                                >
                                                    <option value="" disabled selected></option>
                                                    {locations && locations.map((location: any, index: number) => (
                                                        <option key={index} value={location.name}>
                                                            {location.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex">
                                                {/*<span className="ml-2 text-3xl font-bold">3.2</span>*/}

                                                <div className="flex ml-2 mt-1">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex justify-end">
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                                onClick={()=>{
                                                    console.log("send clicked");
                                                   addReview();
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