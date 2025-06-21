import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/BlueIconDesign.png';
import { Button } from '@/components/ui/button';
import RegisterForm from '../../components/shared/auth/RegisterForm';


const Register = () => {
    return (
        <div className="min-h-screen flex font-poppins">
            {/* Pjesa e majtë (Aside) */}
            <div className="w-1/2 bg-[#0D1B2A] text-white p-10 flex flex-col justify-between">
                <Link to="/" className='flex items-center space-x-4'>
                    <img src={Logo} alt="Talent Scout" className="w-20"/>
                    <h1 className='text-white font-semibold text-[25px]'>Talent Scout</h1>
                </Link>

                <div className="space-y-4">
                    <p className="text-sm leading-relaxed">
                        "Talent Scout më ndihmoi të gjej zhvillues të talentuar në pak minuta. Tani e përdor për çdo projekt të ri që filloj."<br />
                        <span className="text-gray-400">- Arbër Kola, Project Manager @TechNova</span>
                    </p>

                    <Link to='/'>
                        <Button variant="secondary" size="sm" className="mt-2">
                            Landing Page
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Pjesa e djathtë (RegisterForm) */}
            <div className="w-1/2 bg-[#F8FAFC] flex items-center justify-center">
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;