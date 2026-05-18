import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { SlCalender } from 'react-icons/sl';

const Destination = ({destination}) => {
    return (
        <div className='space-y-4'>
            <Image src={destination.imageUrl} className="h-80 object-cover mx-auto" width={500} height={300} alt='destinations'></Image>
            <div className='px-5 space-y-2'>
                <p className='flex items-center gap-2'><IoLocationOutline /> {destination.country}</p>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-semibold'>{destination.destinationName}</h3>
                <p>${destination.price}</p>
            </div>
            <p className='flex items-center gap-2'><SlCalender />{destination.duration}</p>
            <Link href={`/destinations/${destination._id}`}>Book Now</Link>
            </div>
        </div>
    );
};

export default Destination;