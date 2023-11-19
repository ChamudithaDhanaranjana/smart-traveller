import { BrowserRouter as Router } from 'react-router-dom';
import {NextPage} from "next";


interface Hotel {
    id: number;
    name: string;
    price_per_person:number;
    hotel_types:{
        name:string;
    }
    district:{
        name:string;
    }
    province:{
        name:string
    }
    // Define other properties of the 'hotel' object here
}

interface CardProps {
    hotel: Hotel;
}
const HotelCard: NextPage<CardProps> = ({ hotel }) => {
    return (
        <div>
            <div className="block max-w-sm w-64 bg-white rounded-lg shadow hover:bg-gray-100">
                <img src="https://source.unsplash.com/random/200x200?hotel />" alt="Mountain tun villa" className="w-full h-60 object-cover rounded-lg" />
                <div className="p-4">
                    <h6 className="mb-2 mt-4 text-lg text-black font-bold tracking-tigh">{hotel.name}</h6>
                    <p className="font-normal text-sm text-gray-400">Hotel ID: {hotel.id}</p>
                    <p className="font-normal text-sm text-gray-400">Hotel type: {hotel.hotel_types ? hotel.hotel_types.name : ''}</p>
                    <p className="font-normal text-sm text-gray-400">{hotel.district ? hotel.district.name :''} {hotel.district ? ' ,' :''} {hotel.province ? hotel.province.name :''}</p>
                    <div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <p className="font-normal mr-2 text-sm text-gray-400">starting from</p>
                        <p className="flex text-base font-bold text-black">{hotel.price_per_person ? 'LKR':''} {hotel.price_per_person}</p>
                    </div>
                </div>


            </div>

        </div>

    )
}
export default HotelCard;