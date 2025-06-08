import React from 'react'
import { Link } from 'react-router-dom';
import heroImage from '../assets/Blue_Person.png';
function Hero() {
return (
    <section className="py-20 pb-5 px-6 font-poppins">
    <div className= "max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
        <h1 className="text-[36px] font-semibold text-black leading-snug mb-6">
        Discover and connect <br /> with top tech talent
        </h1>
        <p className="text-[20px] font-normal text-black mb-8">
        Join hundreds of companies using Talent Scout to find the best developers and designers.
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <Link
        to="/login"
        className="inline-flex w-[150px] h-[60px] bg-[#008DFE] text-white font-semibold rounded-lg items-center justify-center transition duration-300 hover:bg-[#0070cc]"
    >
        Explore Talent
        </Link>
        <Link
        to="/register"
        className="inline-flex w-[150px] h-[60px] bg-[#FFFEFE] text-black font-semibold rounded-lg border border-gray-300 items-center justify-center transition duration-300 hover:bg-gray-100"
    >
        Register Talent
        </Link>
    </div>
    </div>

        <div className="flex justify-center">
        <img
            src={heroImage}
            alt="Tech talent illustration"
            className="w-[546px] h-auto"
        />
        </div>
        </div>
    </section>
);
}

export default Hero