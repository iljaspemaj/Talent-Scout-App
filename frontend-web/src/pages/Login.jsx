import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../assets/BlueIconDesign.png'; // ndërroje sipas path-it të saktë
import { Button } from '@/components/ui/button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:8095/auth/login', { email, password });
        localStorage.setItem('token', res.data.token);
      navigate('/dashboard'); // ose faqja ku do të dërgohet pasi log in
    } catch (err) {
        setError('Invalid credentials');
    }
};

    return (
    <div className="min-h-screen flex font-poppins">
    
    <div className="w-1/2 bg-[#0D1B2A] text-white p-10 flex flex-col justify-between">

        <Link to="/" className='flex items-center space-x-4'>
        <img src={Logo} alt="Talent Scout" className="w-20"/>
        <h1 className='text-white font-semibold text-[25px]'>Talent Scout</h1>
        </Link>

        <div className="space-y-4">
        <p className="text-sm leading-relaxed">
        “Talent Scout më ndihmoi të gjej zhvillues të talentuar në pak minuta. Tani e përdor për çdo projekt të ri që filloj.”<br />
        <span className="text-gray-400">- Arbër Kola, Project Manager @TechNova</span>
        </p>

        <Link to='/'>
        <Button variant="secondary" size="sm" className="mt-2">
            Landing Page
        </Button>
        </Link>
        </div>
    </div>

    
    <div className="w-1/2 bg-[#F8FAFC] flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <div className="flex justify-end text-sm mb-4">
    <Link
    to="/register"
    className="text-black font-semibold px-4 py-2 bg-[#FFFEFE] rounded-lg border border-gray-300 hover:bg-gray-100 absolute top-10 right-10"
    >
    Register
    </Link>
        </div>
        
        {/* Pjesa e djathtë - formular për login */}
        <h2 className="text-2xl font-bold mb-6 text-center">Login in your account</h2>
        <form onSubmit={handleLogin}>
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
                type="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
                type="password"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>

            {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
            )}

            <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
            Log in
            </button>
        </form>
        </div>
    </div>
    </div>
);
};

export default Login;