import React from 'react'
import { FaUser } from "react-icons/fa";

const Stats = () => {
    const stats = [
    { value: "150+", label: "Talents in asking", icon: <FaUser/>},
    { value: "200+", label: "Projects completed" },
    { value: "100+", label: "Companies lining" }
];

    return (
    <section className="pb-12 font-poppins">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 text-center">
        {stats.map((stat, index) => (
            <div key={index} className="bg-white shadow-md hover:shadow-lg rounded-2xl max-w-xs p-6">
                <div className="flex items-center justify-center mb-2">
                <span className="text-blue-600 text-2xl">{stat.icon}</span>
                <h2 className="text-3xl font-bold text-black">{stat.value}</h2>
                </div>
            <p className="text-gray-600 text-base">{stat.label}</p>
            </div>
        ))}
        </div>
    </section>
);
};

export default Stats;