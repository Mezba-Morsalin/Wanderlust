import { singleDestination } from '@/lib/data';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { IoArrowForwardSharp, IoLocationOutline } from 'react-icons/io5';
import { SlCalender } from 'react-icons/sl';
import { causeSans } from '@/app/layout';
import EditDestination from '@/app/components/EditDestination';
import DeleteDestinations from '@/app/components/DeleteDestinations';

const DestinationDetailsPage = async ({params}) => {
    const {id} = await params
    const destination = await singleDestination(id)
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
                <h3 className={`${causeSans.className} text-4xl font-semibold my-3`}>{destination.destinationName}</h3>
            </div>
            <p className='flex items-center gap-2 text-black/50'><SlCalender />{destination.duration}</p>
            <p className={`${causeSans.className} text-2xl font-semibold`}>Overview</p>
            <p className='text-black/50'>{destination.description}</p>
            </div>
                <div className='md:w-[500px] shadow p-4 space-y-3'>
                    <p className='text-black/50'>Starting From</p>
                    <p className='text-cyan-500 font-semibold text-2xl'>${destination.price}</p>
                    <p className='text-black/50'>Person</p>
                    <p className='bg-gray-200 p-3'>{destination.departureDate}</p>
                    <hr />
                    <Link href={'/my-bookings'}><Button
                                  variant="outline"
                                  className=" rounded-none w-full bg-cyan-500 text-white flex gap-3 items-center"
                                >
                                  Book Now <IoArrowForwardSharp />
                                </Button></Link>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;