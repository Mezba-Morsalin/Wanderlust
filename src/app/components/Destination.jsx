import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { IoLocationOutline } from 'react-icons/io5';
import { SlCalender } from 'react-icons/sl';


const Destination = ({destination}) => {
    return (
        
        <div className='space-y-4 shadow p-8 rounded-2xl border border-gray-200'>
           <div className='overflow-hidden rounded-2xl'>
    <Image
        src={destination.imageUrl}
        className="h-80 w-full object-cover hover:scale-110 transition duration-500"
        width={500}
        height={300}
        alt='destinations'
    />
</div>
            <div className='px-5 space-y-2'>
                <p className='flex items-center gap-2 text-black/50'><IoLocationOutline /> {destination.country}</p>
            <div className='flex justify-between'>
                <h3 className={` text-2xl font-semibold`}>{destination.destinationName}</h3>
                <p>${destination.price}</p>
            </div>
            <p className='flex items-center gap-2 text-black/50'><SlCalender />{destination.duration}</p>
            <Link href={`/destinations/${destination._id}`} className='flex items-center gap-2 underline text-cyan-500 text-lg'>Book Now <GoArrowUpRight /></Link>
            </div>
        </div>
    );
};

export default Destination;