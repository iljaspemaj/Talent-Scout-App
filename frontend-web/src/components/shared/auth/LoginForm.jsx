import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { login } from '../../../../store/authSlice'

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8095/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);

            dispatch(login({
            user: res.data.user,  
            token: res.data.token
        }));

            navigate('/dashboard');
        } catch (err) {
            setError('Invalid credentials');
        }
    };


    return (
        <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
            <div className="flex justify-end text-sm mb-4">
                <Link
                    to="/register"
                    className="text-black font-semibold px-4 py-2 bg-[#FFFEFE] rounded-lg border border-gray-300 hover:bg-gray-100 absolute top-10 right-10"
                >
                    Register
                </Link>
            </div>
            
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

                <Button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Log in
                </Button>
            </form>
        </div>
    );
};

export default LoginForm;