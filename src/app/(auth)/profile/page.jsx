import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

// react-icons থেকে প্রয়োজনীয় আইকনগুলো ইমপোর্ট করা হয়েছে
import { FaMapMarkerAlt, FaCamera, FaPen, FaPlane, FaGlobe, FaArrowUp, FaDollarSign } from 'react-icons/fa';

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`,
        {
            cache: "no-store"
        }
    );

    const userData = await res.json();

    if (!userData || userData.length === 0) {
        return (
            <div className="flex justify-center items-center h-64 text-gray-500 font-medium">
                No bookings found.
            </div>
        );
    }

    const firstBooking = userData[0];

    const totalSpent = userData.reduce(
    (sum, booking) => sum + Number(booking.destinationPrice),
    0
);
const uniqueCountries = [
    ...new Set(userData.map(item => item.destinationCountry))
];
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-4xl font-semibold">My Profile</h1>
                <p className="text-gray-500 text-sm mt-1">Manage your account settings and travel preferences</p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                
                {/* Left Column: Profile Card */}
                <div className="bg-white border border-gray-100 shadow-sm p-6 flex flex-col items-center rounded-sm">
                    {/* Profile Image with Camera Icon */}
                    <div className="relative w-32 h-32 mb-4">
                        <div className="w-full h-full rounded-full overflow-hidden relative">
                            <Image
                                src={firstBooking.userImage}
                                alt={firstBooking.userName}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <button className="absolute bottom-1 right-1 bg-[#149cb7] text-white p-2 rounded-full hover:bg-[#11859c] transition-colors shadow-md">
                            <FaCamera size={12} />
                        </button>
                    </div>

                    {/* Name & Location */}
                    <h2 className="text-xl font-bold text-gray-800">{firstBooking.userName}</h2>
                    <div className="flex items-center text-gray-400 text-sm mt-1 mb-6">
                        <FaMapMarkerAlt size={12} className="mr-1" />
                        <span>Dhaka, Bangladesh</span>
                    </div>

                    {/* Divider */}
                    <div className="w-full border-t border-gray-100 my-4"></div>

                    {/* Meta Info */}
                    <div className="w-full space-y-3 text-sm mb-6">
                        <div className="flex justify-between">
                            <span className="text-gray-400">Member since</span>
                            <span className="font-semibold text-gray-800">May 2026</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Nationality</span>
                            <span className="font-semibold text-gray-800">Bangladesh</span>
                        </div>
                    </div>

                    {/* Edit Profile Button */}
                    <button className="w-full bg-[#149cb7] text-white py-2.5 px-4 rounded-sm hover:bg-[#11859c] transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                        <FaPen size={12} />
                        Edit Profile
                    </button>
                </div>

                {/* Right Column: Travel Statistics */}
                <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Travel Statistics</h3>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Total Bookings */}
                        <div className="bg-white p-5 border border-gray-100 rounded-sm flex justify-between items-center shadow-sm">
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Bookings</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">{userData.length}</p>
                            </div>
                            <div className="p-3 bg-cyan-50 rounded-full text-cyan-500">
                                <FaPlane size={18} />
                            </div>
                        </div>

                        {/* Countries Visited */}
                        <div className="bg-white p-5 border border-gray-100 rounded-sm flex justify-between items-center shadow-sm">
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Countries Visited</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">{uniqueCountries.length}</p> 
                            </div>
                            <div className="p-3 bg-emerald-50 rounded-full text-emerald-500">
                                <FaGlobe size={18} />
                            </div>
                        </div>

                        {/* Upcoming Trips */}
                        <div className="bg-white p-5 border border-gray-100 rounded-sm flex justify-between items-center shadow-sm">
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Upcoming Trips</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1">0</p>
                            </div>
                            <div className="p-3 bg-amber-50 rounded-full text-amber-500">
                                <FaArrowUp size={18} className="transform rotate-45" /> 
                            </div>
                        </div>

                        {/* Total Spent */}
                        <div className="bg-white p-5 border border-gray-100 rounded-sm flex justify-between items-center shadow-sm">
                            <div>
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Spent</p>
                                <p className="text-2xl font-bold text-gray-800 mt-1"> ${totalSpent}</p>
                            </div>
                            <div className="p-3 bg-fuchsia-50 rounded-full text-fuchsia-500">
                                <FaDollarSign size={18} />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;