"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from "react-dom";

interface AddLocationProps {
  onClose: () => void;
}
interface FormData {
  travelLocationName: string;
  travelLocationType: string;
  locationDescription: string;
  price: string;
  province: string;
  district: string;
  locationLink: string;
  openDropdown: string;
  closeDropdown: string;
}

const AddLocation: React.FC<AddLocationProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    travelLocationName: '',
    travelLocationType: '',
    locationDescription: '',
    price: '',
    province: '',
    district: '',
    locationLink: '',
    openDropdown: '',
    closeDropdown: '',
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your logic to submit the form or close the modal
    // For now, just close the modal
    onClose();
  };

  const modalContent = (
    <Router>
      <div className="w-full h-full">
        <form className="bg-white p-10 rounded-lg" onSubmit={handleSubmit}>
          <a className='text-black flex justify-end items-end' href="#" onClick={onClose}>
            x
          </a>
          <label className="block text-gray-700 font-bold mb-2 text-xl">+AddTravelLocation</label>
          <div className="flex">
            <div className="flex-1 w-48 pr-12">
              <div className="mt-2 flex justify-center  px-auto py-48 bg-gray-200">
                <div className="text-center">
                  <label className="relative cursor-pointer rounded-lg font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span className="block text-5xl mb-2 text-white">+</span>
                    <span className="text-white text-2xl">Upload images here</span>
                    <input name="file-upload" type="file" className="sr-only" />
                  </label>
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold mt-12 py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-blue-700 text-l"
                >
                  +Add
                </button>
              </div>
            </div>
            <div className="flex-1 ">
              <div className="mb-4">
                <label htmlFor="hotelName" className="block text-gray-700 mb-2">
                  Travel Location Name
                </label>
                <input
                  type="text"
                  id="hotelName"
                  name="hotelName"
                  value={formData.travelLocationName}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 rounded-full bg-gray-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="hotelType" className="block text-gray-700 mb-2">
                  Travel Location Type
                </label>
                <input
                  type="text"
                  id="hotelType"
                  name="hotelType"
                  value={formData.travelLocationType}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 rounded-full bg-gray-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="hotelDescription" className="block text-gray-700 mb-2">
                  Write your Description
                </label>
                <textarea
                  id="hotelDescription"
                  name="hotelDescription"
                  value={formData.locationDescription}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 rounded-md bg-gray-200 focus:outline-none focus:border-indigo-500"
                  placeholder="Type here |"
                ></textarea>
              </div>
              <div className="mb-4 w-full relative flex items-center">
                <label htmlFor="price" className=" block w-48 text-gray-700 mb-2">
                  Ticket Price
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="py-2 px-3 w-full rounded-full bg-gray-200 focus:outline-none focus:border-indigo-500"
                    placeholder=""
                  />
                  <span className="absolute right-3 text-gray-500">LKR</span>
                </div>
              </div>
              <div className="mb-4 w-full flex items-center">
                <div className="flex w-full mr-4">
                  <label htmlFor="province" className="text-gray-700 mr-8">
                    Province
                  </label>
                  <div className="relative w-full">
                    <select
                      id="province"
                      name="province"
                      value={formData.province}
                      onChange={handleInputChange}
                      className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded-full leading-tight focus:outline-none focus:border-indigo-500"
                    >
                      <option value="" disabled selected></option>
                      <option value="western">Western</option>
                      <option value="central">Central</option>
                      <option value="southern">Southern</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-500">
                      <svg
                        className="fill-current h-4 w-4 transform rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 7.414l-4.293 4.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <label htmlFor="district" className="text-gray-700 mr-2">
                    District
                  </label>
                  <div className="relative w-full">
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded-full leading-tight focus:outline-none focus:border-indigo-500"
                    >
                      <option value="" disabled selected></option>
                      <option value="ratnapura">Ratnapura</option>
                      <option value="colombo">Colombo</option>
                      <option value="kegalle">Kegalle</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-500">
                      <svg
                        className="fill-current h-4 w-4 transform rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 7.414l-4.293 4.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4 flex items-center">
                <label htmlFor="locationLink" className="text-gray-700 mr-2">
                  <span className="inline-block">Location link</span>
                </label>
                <input
                  type="text"
                  id="locationLink"
                  name="locationLink"
                  value={formData.locationLink}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 rounded-full bg-gray-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-4 flex w-full items-center">
                <div className="relative w-full flex mr-4">
                  <label htmlFor="openDropdown" className="mr-12 text-gray-700 block">Open</label>
                  <div className="relative w-full">
                    <select
                      id="openDropdown"
                      name="openDropdown"
                      value={formData.openDropdown}
                      onChange={handleInputChange}
                      className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded-full leading-tight focus:outline-none focus:border-indigo-500"
                    >
                      <option value="" disabled selected></option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-500">
                      <svg
                        className="fill-current h-4 w-4 transform rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 7.414l-4.293 4.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative flex w-full">
                  <label htmlFor="closeDropdown" className="text-gray-700 mr-4 block">Close</label>
                  <div className="relative w-full">
                    <select
                      id="closeDropdown"
                      name="closeDropdown"
                      value={formData.closeDropdown}
                      onChange={handleInputChange}
                      className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 rounded-full leading-tight focus:outline-none focus:border-indigo-500"
                    >
                      <option value="" disabled selected></option>
                      <option value="optionA">Option A</option>
                      <option value="optionB">Option B</option>
                      <option value="optionC">Option C</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-500">
                      <svg
                        className="fill-current h-4 w-4 transform rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 7.414l-4.293 4.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Router>

  );
  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root')!);
}
export default AddLocation;