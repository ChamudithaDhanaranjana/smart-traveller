import { BrowserRouter as Router } from 'react-router-dom';
import {NextPage} from "next";
import HotelCard from "@/app/components/hotels/card/page";

interface Location {
    id: number;
    name: string;
    ticket_price:number;
    img:string,
    hotel_types:{
        name:string;
    }
    district:{
        name:string;
    }
    province:{
        name:string
    }
}

interface CardProps {
    location: Location;
}
const LocationCard: NextPage<CardProps> = ({ location }) => {
        return (
            <div>
                <div className="block max-w-sm w-64 bg-white rounded-lg shadow hover:bg-gray-100">
                    <img src={location.img} alt="Mountain tun villa"
                         className="w-full h-60 object-cover rounded-lg"/>
                    <div className="p-4">
                        <h6 className="mb-2 mt-4 text-lg text-black font-bold tracking-tigh">{location.name}</h6>
                        <p className="font-normal text-sm text-gray-400">ID: {location.id}</p>

                        <p className="font-normal text-sm text-gray-400">{location.district ? location.district.name :''} {location.district ? ' ,' :''} {location.province ? location.province.name :''}</p>
                        <div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <p className="font-normal mr-2 text-sm text-gray-400">Per person</p>
                            <p className="flex text-base font-bold text-black">{location.ticket_price ? 'LKR':''} {location.ticket_price}</p>
                        </div>
                    </div>


                </div>

            </div>

        )
    }
    export default LocationCard;
