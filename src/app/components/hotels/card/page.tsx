import { BrowserRouter as Router } from 'react-router-dom';

export default function Card() {
    return (
        <div>
            <div className="block max-w-sm w-64 bg-white rounded-lg shadow hover:bg-gray-100">
                <img src="https://source.unsplash.com/random/200x200?hotel />" alt="Mountain tun villa" className="w-full h-60 object-cover rounded-lg" />
                <div className="p-4">
                    <h6 className="mb-2 mt-4 text-lg text-black font-bold tracking-tigh">Mounten turn villa</h6>
                    <p className="font-normal text-sm text-gray-400">Hotel ID: #1234567</p>
                    <p className="font-normal text-sm text-gray-400">Hotel type: Villa</p>
                    <p className="font-normal text-sm text-gray-400">Pilana, Galle.</p>
                    <div>
                       

                    </div>
                    <div className="flex justify-end mt-4">
                        <p className="font-normal mr-2 text-sm text-gray-400">starting from</p>
                        <p className="flex text-base font-bold text-black">LKR 25,000</p>
                    </div>
                </div>


            </div>

        </div>

    )
}