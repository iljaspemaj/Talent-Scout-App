import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/BlueIconDesign.png';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TalentSearchNavbar = ({ onExperienceFilterChange, selectedExperience }) => {
const handleExperienceChange = (value) => {
    onExperienceFilterChange(value);
};

return (
    <div className='max-w-6xl mx-auto pt-8 flex justify-between items-center'>
    <Link to="/" className='flex items-center space-x-4'>
        <img src={Logo} alt="Talent Scout" className="w-20"/>
        <h1 className='text-black font-semibold text-[20px]'>Talent Scout</h1>
    </Link>

    <h1 className='text-black font-semibold text-[25px] hidden md:block'>
        Talent Search
    </h1>

    <div className='flex justify-end'>
        <Select onValueChange={handleExperienceChange} value={selectedExperience}>
        <SelectTrigger className="w-[180px] ml-4">
            <SelectValue placeholder="Search" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advanced">Advanced</SelectItem>
        </SelectContent>
        </Select>
    </div>
    </div>
);
};

export default TalentSearchNavbar;
