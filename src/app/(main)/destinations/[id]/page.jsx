
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { SlCalender } from 'react-icons/sl';
import EditDestination from '@/app/components/EditDestination';
import DeleteDestinations from '@/app/components/DeleteDestinations';
import Booking from '@/app/components/Booking';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const DestinationDetailsPage = async ({params}) => {
    const {id} = await params

    const {token} = await auth.api.getToken({
        headers : await headers()
    })
    console.log(token)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${id}`, 
        {
            headers : {
                authorization : `Bearer ${token}`
            }
        }
    )
    const destination = await res.json();
    console.log(destination)
    return (
        <div className='px-3 max-w-7xl mx-auto space-y-4 my-16'>
            <div className='flex justify-between'>
                <Link className='flex items-center gap-2 hover:text-cyan-500 hover: transition duration-300' href={'/destinations'}><IoMdArrowBack /> Back to Destination</Link>
                <div className='flex gap-3'>
                    <EditDestination destination = {destination}/>
                    <DeleteDestinations
  destination={destination}
/>
                </div>
            </div>
            <Image src={destination.imageUrl} className="h-[700px]  object-cover mx-auto mb-12" width={2000} height={2000} alt='destinations'></Image>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className=' space-y-3'>
                <p className='flex items-center gap-2 text-black/50'><IoLocationOutline /> {destination.country}</p>
            <div className='flex justify-between'>
                <h3 className={` text-4xl font-semibold my-3`}>{destination.destinationName}</h3>
            </div>
            <p className='flex items-center gap-2 text-black/50'><SlCalender />{destination.duration}</p>
            <p className={` text-2xl font-semibold`}>Overview</p>
            <p className='text-black/50'>{destination.description}</p>
            </div>
                <Booking destination={destination}/>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;