import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../assets/BlueIconDesign.png'; // përdor të njëjtin logo si në login
import { Button } from '@/components/ui/button';
const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!username || username.length < 3) {
            setError('Emri i përdoruesit duhet të jetë së paku 3 karaktere');
            return;
        }

        try {
            const res = await axios.post('http://localhost:8095/auth/register', { 
                username,
                email, 
                password 
            });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', username);
            navigate('/dashboard'); // ose faqja ku do të dërgohet pas regjistrimit
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
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

            {/* Pjesa e djathtë - formular për regjistrim */}
            <div className="w-1/2 bg-[#F8FAFC] flex items-center justify-center">
            <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md h-[530px]">
                <h2 className="text-2xl font-bold mb-6 text-center">Create your account</h2>
                    <div className="flex justify-end text-sm mb-4">
                        <Link
                            to="/login"
                            className="text-black font-semibold px-4 py-2 bg-[#FFFEFE] rounded-lg border border-gray-300 hover:bg-gray-100 absolute top-10 right-10"
                        >
                            Login
                        </Link>
                    </div>
                    
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                minLength={3}
                            />
                            </div>

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
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;