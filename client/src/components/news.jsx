import React from 'react';
import { useNavigate } from 'react-router-dom';
// import bgImage from '../../images/newsp.jpg'; // Update with actual path

const News = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-gray-100 py-16 relative">
            {/* Manually Uploaded Blurred Background Image */}
            <div className="absolute inset-0 bg-cover bg-center blur-lg opacity-20" style={{ backgroundImage: `url({../images/Newspaper.jpg})` }}></div>
            
            <div className="w-[90%] mx-auto relative z-10">
                <h2 className="text-4xl font-bold text-center mb-4">Campus News</h2>
                <p className="text-lg text-center text-gray-600 mb-8">Stories about people, research, and innovation across the Farm</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data?.slice(0, 6).map((item, index) => (
                        <div 
                            key={item._id} 
                            className={`border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all relative ${index === 0 ? 'lg:col-span-2 lg:row-span-2 h-[400px]' : 'h-[250px]'}`}
                        >
                            <img 
                                src={item.value || null}  
                                alt={item.heading || "News Image"} 
                                className="w-full h-full object-cover" 
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
                                <h3 className="text-lg font-bold">{item.title || 'No Title'}</h3>
                                {item.date && <p className="text-sm mb-2">{item.date}</p>}
                                <p className="text-sm font-semibold cursor-pointer hover:underline">Read More →</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => navigate('/latest')}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg text-lg shadow-md hover:shadow-lg"
                    >
                        More campus news
                    </button>
                </div>
            </div>
        </div>
    );
};

export default News;
