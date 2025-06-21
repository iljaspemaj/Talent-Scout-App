import React from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';

const ProfileNavbar = () => {
    const { name } = useParams();

const formattedName = name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

return (
    <div className="max-w-6xl mx-auto pt-8 grid grid-cols-2 items-center">
    <Link to="/" className='flex items-center space-x-4'>
        <h1 className='text-black font-semibold text-[24px]'>
        {formattedName}
        </h1>
    </Link>

    <div>
    <nav>
                <ul className="flex justify-center gap-12">
                <li>
                    <NavLink to={`/profile/${name}`} end className={({ isActive }) => isActive 
                        ? 'font-semibold text-[18px] text-blue-600 underline underline-offset-8 decoration-2' 
                        : 'font-semibold text-[18px] text-black hover:text-blue-600'}>
                    Overview
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/profile/${name}/skills`} className={({ isActive }) => isActive 
                        ? 'font-semibold text-[18px] text-blue-600 underline underline-offset-8 decoration-2' 
                        : 'font-semibold text-[18px] text-black hover:text-blue-600'}>
                    Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/profile/${name}/projects`} className={({ isActive }) => isActive 
                        ? 'font-semibold text-[18px] text-blue-600 underline underline-offset-8 decoration-2' 
                        : 'font-semibold text-[18px] text-black hover:text-blue-600'}>
                    Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/profile/${name}/reviews`} className={({ isActive }) => isActive 
                        ? 'font-semibold text-[18px] text-blue-600 underline underline-offset-8 decoration-2' 
                        : 'font-semibold text-[18px] text-black hover:text-blue-600'}>
                    Reviews
                    </NavLink>
                </li>
                </ul>
                </nav>
    </div>
    </div>
);
};

export default ProfileNavbar;