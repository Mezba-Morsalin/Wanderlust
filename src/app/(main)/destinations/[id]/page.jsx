import { singleDestination } from '@/lib/data';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { IoMdArrowBack } from 'react-icons/io';
import { IoArrowForwardSharp, IoLocationOutline } from 'react-icons/io5';
import { SlCalender } from 'react-icons/sl';
import { TiDelete } from 'react-icons/ti';
import { causeSans } from '@/app/layout';

const DestinationDetailsPage = async ({params}) => {
    const {id} = await params
    const destination = await singleDestination(id)
    return (
        <div className='px-3 max-w-7xl mx-auto space-y-4 my-16'>
            <div className='flex justify-between'>
                <Link className='flex items-center gap-2 hover:text-cyan-500 hover: transition duration-300' href={'/destinations'}><IoMdArrowBack /> Back to Destination</Link>
                <div className='flex gap-3'>
                    <Button className={'flex items-center gap-2.5'} variant="outline"><FiEdit3 />Edit</Button>
                    <Button className={'flex items-center gap-2.5'} variant="danger"><TiDelete />Cancel</Button>
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