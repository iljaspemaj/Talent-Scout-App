import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '../assets/BlueIconDesign.png';
import image from '../assets/Talent Network.png'
const AboutUs = () => {
return (
    <div className="min-h-screen bg-[#F8FAFC] font-poppins">
        {/* Header Section */}
        <div className="bg-[#0D1B2A] text-white py-4 px-8">
    <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className='flex items-center space-x-4'>
                    <img src={Logo} alt="Talent Scout" className="w-20"/>
                    <h1 className='text-white font-semibold text-[20px]'>Talent Scout</h1>
            </Link>
    <p className="text-sm italic">"Bridging the gap between tech talent and opportunities"</p>
    </div>
    </div>

      {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#0D1B2A] to-[#1B3A4B] text-white py-20 px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* Teksti në të majtë */}
        <div className="text-center lg:text-left lg:w-1/2">
        <h2 className="text-4xl font-bold mb-6">Discover Top Tech Talent</h2>
        <p className="text-xl mb-8 max-w-md mx-auto lg:mx-0">
            Connecting companies with the best software developers in the industry
        </p>
        <div className="flex justify-center lg:justify-start space-x-4">
            <Link to='/login'>
            <Button className="bg-white text-[#0D1B2A] hover:bg-gray-100">
            Explore Talent
            </Button>
            </Link>

            <Link to='/register'>
            <Button variant="outline" className="text-[#0D1B2A] border-white hover:bg-gray-100 hover:text-[#0D1B2A]">
            Join Our Network
            </Button>
            </Link>
        </div>
        </div>

        {/* Imazhi në të djathtë */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
        <img
            src={image}
            alt="Talent network connections"
            className="h-auto w-[400px] object-cover rounded-lg shadow-xl transition-transform hover:scale-105 duration-300"
        />
        </div>
    </div>
    </div>

      {/* Team Section */}
        <div className="py-16 bg-white">
    <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
        { name: "Iljas Pemaj", role: "Head of Talent WebDevs", img: "/team1.jpg" },
        { name: "[Emri]", role: "WebDevs", img: "/team2.jpg" },
        { name: "[Emri]", role: "WebDevs", img: "/team3.jpg" },
        { name: "Blerina Lera", role: "Python", img: "/team4.jpg" },
        { name: "[Emri]", role: "Python", img: "/team5.jpg" },
        { name: "Mergim Kosumi", role: "Java", img: "/team6.jpg" },
        { name: "Anisa Mazreku", role: "Java", img: "/team7.jpg" },
    ].map((member, index) => (
        <div key={index} className="text-center">
        <div className="h-48 w-48 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
            {/* Placeholder për foto */}
            <div className="h-full w-full flex items-center justify-center text-gray-400">
            [Foto {index + 1}]
            </div>
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-[#0D1B2A]">{member.role}</p>
        </div>
        ))}
    </div>
    </div>
    </div>

        {/* Testimonials Section */}
        <div className="py-16 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-4xl px-8 text-center">
    <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
    <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-xl italic mb-4">
        "Talent Scout helped us find the perfect developer in just 3 days!"
        </p>
        <p className="font-semibold">- [Emri], [Kompania]</p>
    </div>
    </div>
    </div>

        {/* Call-to-Action Section */}
        <div className="py-16 bg-[#0D1B2A] text-white text-center">
        <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
    <div className="flex justify-center space-x-4">
        <Button className="bg-white text-[#0D1B2A] hover:bg-gray-100 px-8 py-3">
        Explore Talent
        </Button>
        <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-3">
        Join Our Network
        </Button>
    </div>
    </div>
    </div>

    </div>
);
};

export default AboutUs;
