import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/BlueIconDesign.png'; 
const Navbar = () => {
    const isLoggedIn = localStorage.getItem("token"); 

return (
    <div className="max-w-6xl mx-auto pt-8 grid grid-cols-2 items-center">
        <Link to="/" className='flex items-center space-x-4'>
                <img src={Logo} alt="Talent Scout" className="w-20"/>
                <h1 className='text-black font-semibold text-[20px]'>Talent Scout</h1>
        </Link>
        
        <div className="flex justify-center gap-10">
            <Link to="/about" className="text-black font-semibold text-[18px] hover:text-blue-600">About Us</Link>
            <Link to="/talent-search" className="text-black font-semibold text-[18px] hover:text-blue-600">Talent Search</Link>
            <Link to="/contact" className="text-black font-semibold text-[18px] hover:text-blue-600">Contact Us</Link>
        </div>
        </div>
);
};

export default Navbar;