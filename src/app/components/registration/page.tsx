import React from 'react';
import Image from 'next/image'
import NavBar2 from "../nav2/nav-bar";


export default function Registration() {
    return (
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: 'url("../images/background.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
            <NavBar2></NavBar2>
            <div className="w-full flex justify-center items-center mt-12">
                <div>
                    <img className='w-48' src="../images/smart_traveller_logo.png" alt="" />
                    <div className="font-logo text-xl text-black font-medium">Visit Sri Lanka</div>
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <div className="justify-center w-96 pr-8 pl-8 px-6 py-6 lg:px-8 bg-white rounded">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center font-bold leading-9 tracking-tight text-gray-900 text-4xl">
                            Registration
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div className='flex justify-between'>
                                <div className='mr-2'>
                                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                        First Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            placeholder="John"
                                            required
                                            className="block w-full rounded-xl border-2 border-gray-300 py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                        Last Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            placeholder="Silva"
                                            required
                                            className="block w-full rounded-xl border-2 border-gray-300 py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="smarttraveller@gmail.com"
                                        required
                                        className="block w-full rounded-xl border-2 border-gray-300 py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Enter your Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="........."
                                        required
                                        className="block w-full rounded-xl border-2 border-gray-300 py-3 px-2 text-gray-900 shadow-sm placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-2xl bg-blue-500 px-2 py-3 font-semibold leading-6 text-white text-xl shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                        <div className='mt-2 flex justify-center'>
                            <p className='text-black text-xs mr-1'>Have already an account ?</p>
                            <div className='text-blue-500 text-xs'>
                                <a href='/components/signin'>Sign in</a>
                            </div>
                        </div>
                        <p className="mt-4 text-xs text-gray-900 text-center font-semibold">
                            By signing in or creating an account, you agree with our <br />
                            <span className="text-blue-500 mt-4"> Terms & conditions</span> and
                            <span className="text-blue-500 mt-4"> Privacy statement</span>
                        </p> <br />

                        <p className="text-center text-xs text-gray-900 font-semibold">
                            All rights reserved.
                            <br />
                            Copyright (2023) - Smart travel.com
                        </p>
                    </div>
                </div>
            </div>

        </div>


    );
}