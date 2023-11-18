import ReactDOM from "react-dom";

interface HotelViewProps {
    onClose: () => void;
}

const HotelView: React.FC<HotelViewProps> = ({ onClose }) => {
    const modalContent = (
        <div className="absolute top-28 left-96 w-9/12 h-full flex">
            <div className="bg-white p-4  w-full">
                <button onClick={onClose} className="bg-blue-300 max-w-8 text-white py-[-0.1] px-1 rounded-md flex items-center justify-center ml-auto mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="blue" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-6">
                        <line x1="20" y1="8" x2="8" y2="20"></line>
                        <line x1="8" y1="8" x2="20" y2="20"></line>
                    </svg>
                </button>
                <div className="grid grid-cols-2 gap-4 justify-center items-center bg-white p-8">


                    <div className="col-span-1 ml-20">
                        <h1 className="text-5xl font-bold text-black mb-4 max-w-lg mx-auto">Mounten tern villa</h1>
                        <img
                            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                            className="h-auto max-w-l shadow-none transition-shadow duration-300 w-full mx-auto mb-4"
                            alt=""
                        />



                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mt-8">Mounten Turn Villa</h2>
                                <p className="text-gray-600">Hotel ID : #2508122</p>
                                <p className="text-gray-600">Hotel type : Villa</p>
                                <p className="text-gray-600">Pilana, Galle</p>
                            </div>
                            <div>
                                <p className="text-green-600 text-lg mt-24">
                                    <span className="text-xs text-black">starting from </span>
                                    <span className="text-xl text-black font-bold">LKR 25,000</span>
                                </p>
                            </div>
                        </div>
                    </div>




                    <div className="col-span-1 max-w-xl px-12">

                        <p className="text-l mb-4 text-black">You're eligible for a Genius discount at Aparthotel Stare Miasto! To save at this property, all you have to do is sign in.</p>
                        <p className="text-l mb-4 text-black">Aparthotel Stare Miasto is situated in the very centre of Kraków’s Old Town, just 120 metres from the Main Market Square. It features spacious modern apartments with free WiFi.</p>
                        <p className="text-l mb-4 text-black">Located in a historic building, Aparthotel Stare Miasto features a unique interior design in the warm color of bricks with wooden elements.</p>
                        <p className="text-l mb-4 text-black">All apartments at Aparthotel Stare Miasto are air-conditioned, fitted with an LCD TV and a fully-equipped kitchenette, including a refrigerator and an electric kettle. The 24-hour front desk offers ticket and tour services.</p>

                        <div className="flex justify-between items-center">
                            <button
                                type="submit"
                                className="flex justify-center rounded-l bg-blue-500 px-8 py-1 font-semibold leading-6 text-white text-m shadow-sm hover:bg-blue-400"
                            >
                                View Location
                            </button>

                            <div className="ml-4 flex flex-col mr-20">
                                <p className="text-l text-green-600 ">Open 6.00 a.m.</p>
                                <p className="text-l text-green-600 my-0">Close 10.30 p.m.</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>

    );
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root')!);
};
export default HotelView;
