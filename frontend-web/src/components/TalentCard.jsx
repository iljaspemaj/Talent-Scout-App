import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/Luke Anderson.png'
const TalentCard = ({ name, description, skills, availability, experience }) => {
return (
    <div className="bg-white w-72 rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
    <div className="bg-[#328EF8] h-24 rounded-t-2xl relative">
        
        <div className="absolute bottom-0 left-16 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex justify-start overflow-hidden">
            <img 
            src={Image}
            alt={name} 
            className="w-full h-full"
            />
        </div>
        </div>
        <div className="absolute bottom-2 right-4 bg-blue-100 text-blue-800 text-sm font-normal px-2 py-1 rounded-full">
        {experience}
        </div>
    </div>


    <div className="pt-16 px-6 pb-6 flex flex-col">
        <h3 className="font-bold text-xl text-gray-800 text-start mb-3">{name}</h3>
        
        {/* Availability */}
        <div className="flex justify-start mb-4">
        <span className="px-4 py-2 bg-green-100 text-green-800 text-sm rounded-full flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
            {availability}
        </span>
        </div>
        
        {/* Description */}
        <div className="mb-5 text-start flex items-center">
        <p className="text-gray-600 italic text-[15px] leading-tight">
            "{description}"
        </p>
        </div>
        
        {/* Skills */}
        <div className="flex flex-wrap justify-start gap-2 mb-6">
        {skills.slice(0, 3).map((skill, index) => (
            <span 
            key={index} 
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
            {skill}
            </span>
        ))}
        </div>
        

        {/* View Profile Button */}
        <div className="flex justify-center">
        <Link 
            to={`/profile/${name.toLowerCase().replace(/\s+/g, '-')}`} 
            className="w-full h-12 bg-[#328EF8] text-white transition duration-300 hover:bg-[#0070cc] rounded-xl font-medium flex items-center justify-center text-base"
        >
            View Profile
        </Link>
        </div>
    </div>
    </div>
);
};

export default TalentCard;
