import React from 'react';
import { Button } from '@/components/ui/button';

const ContactUs = () => {
return (
    <div className="min-h-screen bg-[#F8FAFC] font-poppins py-16 px-10">
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="md:flex">
        <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
            Have questions or want to learn more about Talent Scout? 
            Reach out to our team and we'll get back to you promptly.
            </p>
            
            <div className="space-y-4">
            <div>
                <h3 className="font-semibold">Email</h3>
                <p>contact@talentscout.com</p>
            </div>
            <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+355 69 982 9506</p>
            </div>
            <div>
                <h3 className="font-semibold">Address</h3>
                <p>Tirana Tech Park, Albania</p>
            </div>
            </div>
        </div>

          <div className="md:w-1/2 p-6">
            <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                required 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                required 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                required
                ></textarea>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
            </Button>
            </form>
        </div>
        </div>
    </div>
    </div>
);
};

export default ContactUs;