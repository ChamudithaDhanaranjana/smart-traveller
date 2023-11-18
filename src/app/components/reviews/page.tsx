export default function Home() {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-between items-center mt-10">
                    <h1 className="text-3xl font-bold">Write your review</h1>

                </div>

                <div className="mt-10">
                    <textarea className="w-full h-48 border border-gray-300 rounded focus:outline-none resize-none" placeholder="Type here"></textarea>
                </div>
                <div className="container mx-auto flex justify-center mt-10">
                    
                            <div className="rating">
                                <i className="fa fa-star text-yellow-400 hover:text-yellow-500 active:text-yellow-600"></i>
                                <i className="fa fa-star text-yellow-400 hover:text-yellow-500 active:text-yellow-600"></i>
                                <i className="fa fa-star text-yellow-400 hover:text-yellow-500 active:text-yellow-600"></i>
                                <i className="fa fa-star text-yellow-400 hover:text-yellow-500 active:text-yellow-600"></i>
                                <i className="fa fa-star-o text-yellow-400 hover:text-yellow-500 active:text-yellow-600"></i>
                            </div>
                        
                </div>
                <div className="mt-10 flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Send</button>
                </div>
            </div>
        </div>
    )
}