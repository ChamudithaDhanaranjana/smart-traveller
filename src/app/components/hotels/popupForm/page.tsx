"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from "react-dom";
import axios from "axios";
import {number} from "prop-types";

interface FormData {
  name:string,
  description:string,
  type:string,
  price_per_person:string,
  open_time:string,
  close_time:string,
  province:string,
  district:string,
  location_link:string,
  img:any,
}

interface AddHotelProps {
  onClose: () => void;
}

const AddHotel: React.FC<AddHotelProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name:'',
    description:'',
    type:'',
    price_per_person:'',
    open_time:'',
    close_time:'',
    province:'',
    district:'',
    location_link:'',
    img:null,
  });
  const [imgSrc, setImgSrc] = useState<any>('');
  const [disable, setDisable] = useState(true);
  const addHotel = async () => {
    axios.post(`http://localhost:8000/api/hotel`, formData,{
      headers:{
        'Content-Type': 'multipart/form-data',
      }
    })
        .then((response) => {
         window.alert("Hotel added successfully!")
          window.location.reload();
        })
        .catch(error => {
          console.log('error',error)
          window.alert('Something went wrong!!')
        })
        .finally(() => {

        });
  }

  const handleInputChange = (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    addHotel();
    console.log('Form Data:', formData);
    onClose();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgSrc(reader.result as string); // Assert result type as string
        setFormData({ ...formData, img: file });
        setDisable(false);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setFormData({...formData, img: imgSrc})
  }, [imgSrc]);

  const modalContent = (
    <div className="absolute top-28 left-96 w-9/12 h-full flex justify-center items-center">
      <div className="w-full h-full">
        <form className="bg-white p-10 rounded-lg" onSubmit={handleSubmit}>
          <a className='text-black flex justify-end items-end' href="#" onClick={onClose} >
            x
          </a>
          <label className="block text-gray-700 font-bold mb-2 text-xl">+AddHotel</label>


          <div className="flex">
            <div className="flex-1 w-48 pr-12">
              <div className="mt-2 flex justify-center  px-auto py-48 bg-gray-200">
                <div className="text-center">
                  {disable && (
                      <label className="relative cursor-pointer rounded-lg font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span className="block text-5xl mb-2 text-white">+</span>
                    <span className="text-white text-2xl">Upload images here</span>
                    <input name="file-upload" type="file" className="sr-only" onChange={handleImageChange}/>
                  </label>
                  )}
                  {imgSrc && (
                      <div>
                        <h2>Uploaded Image:</h2>
                        <img src={imgSrc} alt="Uploaded" height={100} width={100}/>
                      </div>
                  )}
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
                  Hotel Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 rounded-full bg-gray-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="hotelType" className="block text-gray-700 mb-2">
                  Hotel Type
                </label>
                <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded-full leading-tight focus:outline-none focus:border-indigo-500"
                >
                  <option value="" disabled selected></option>
                  <option value="Luxury Hotels">Luxury Hotels</option>
                  <option value="Boutique Hotels">Boutique Hotels</option>
                  <option value="Eco Hotels">Eco Hotels</option>
                  <option value="Guesthouses">Guesthouses</option>
                  <option value="Homestays">Homestays</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="hotelDescription" className="block text-gray-700 mb-2">
                  Write your Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full py-2 px-3 rounded-md bg-gray-200 focus:outline-none focus:border-indigo-500"
                  placeholder="Type here |"
                ></textarea>
              </div>
              <div className="mb-4 w-full relative flex items-center">
                <label htmlFor="price" className=" block w-48 text-gray-700 mb-2">
                  Price per person
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="price_per_person"
                    name="price"
                    value={formData.price_per_person}
                    onChange={(e) => setFormData({...formData, price_per_person: e.target.value})}
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
                      onChange={(e) => setFormData({...formData, province: e.target.value})}
                      className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded-full leading-tight focus:outline-none focus:border-indigo-500"
                    >
                      <option value="" disabled selected></option>
                      <option value="western">Western</option>
                      <option value="central">Central</option>
                      <option value="southern">Southern</option>
                      <option value="northern">Northern</option>
                      <option value="eastern">Eastern</option>
                      <option value="north_western">North Western</option>
                      <option value="north_central">North Central</option>
                      <option value="uva">Uva</option>
                      <option value="sabaragamuwa">Sabaragamuwa</option>
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
                      onChange={(e) => setFormData({...formData, district: e.target.value})}
                      className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded-full leading-tight focus:outline-none focus:border-indigo-500"
                    >
                      <option value="" disabled selected></option>
                      <option value="ampara">Ampara</option>
                      <option value="anuradhapura">Anuradhapura</option>
                      <option value="badulla">Badulla</option>
                      <option value="batticaloa">Batticaloa</option>
                      <option value="colombo">Colombo</option>
                      <option value="galle">Galle</option>
                      <option value="gampaha">Gampaha</option>
                      <option value="hambantota">Hambantota</option>
                      <option value="jaffna">Jaffna</option>
                      <option value="kalutara">Kalutara</option>
                      <option value="kandy">Kandy</option>
                      <option value="kegalle">Kegalle</option>
                      <option value="kilinochchi">Kilinochchi</option>
                      <option value="kurunegala">Kurunegala</option>
                      <option value="mannar">Mannar</option>
                      <option value="matale">Matale</option>
                      <option value="matara">Matara</option>
                      <option value="monaragala">Monaragala</option>
                      <option value="mullaitivu">Mullaitivu</option>
                      <option value="nuwara_eliya">Nuwara Eliya</option>
                      <option value="polonnaruwa">Polonnaruwa</option>
                      <option value="puttalam">Puttalam</option>
                      <option value="ratnapura">Ratnapura</option>
                      <option value="trincomalee">Trincomalee</option>
                      <option value="vavuniya">Vavuniya</option>
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
                  id="location_link"
                  name="location_link"
                  value={formData.location_link}
                  onChange={(e) => setFormData({...formData, location_link: e.target.value})}
                  className="w-full py-2 px-3 rounded-full bg-gray-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="mb-4 flex w-full items-center">
                <div className="relative w-full flex mr-4">
                  <label htmlFor="openDropdown" className="mr-12 text-gray-700 block">Open</label>
                  <div className="relative w-full">
                    <select
                      id="open_time"
                      name="open_time"
                      value={formData.open_time}
                      onChange={(e) => setFormData({...formData, open_time: e.target.value})}
                      className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded-full leading-tight focus:outline-none focus:border-indigo-500"
                    >
                      <option value="" disabled selected></option>
                      <option value="05:00">05:00 a.m.</option>
                      <option value="06:00">06:00 a.m.</option>
                      <option value="07:00">07:00 a.m.</option>
                      <option value="08:00">08:00 a.m.</option>
                      <option value="09:00">09:00 a.m.</option>
                      <option value="10:00">10:00 a.m.</option>
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
                      id="close_time"
                      name="close_time"
                      value={formData.close_time}
                      onChange={(e) => setFormData({...formData, close_time: e.target.value})}
                      className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 rounded-full leading-tight focus:outline-none focus:border-indigo-500"
                    >
                      <option value="" disabled selected></option>
                      <option value="20:00">08:00 p.m.</option>
                      <option value="21:00">09:00 p.m.</option>
                      <option value="22:00">10:00 p.m.</option>
                      <option value="23:00">11:00 p.m.</option>
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
    </div>
  );
  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root')!);
};
export default AddHotel;