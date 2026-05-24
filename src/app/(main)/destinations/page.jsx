import Destination from '@/app/components/Destination';
import Image from 'next/image';
import React from 'react';
import noDestination from '../../../../public/assets/NoDestination.png'
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';
const DestinationPage = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/destinations`)
        const destinations = await res.json()
    return (
        <div className='w-11/12 mx-auto my-16'>
            {
                destinations.length === 0 ? <div className='space-y-4 flex flex-col justify-center items-center'>
                    <Image src={noDestination} height={400} width={500} alt='No-Destionation'></Image>
                    <h2 className='text-3xl font-semibold'>No Destination Found</h2>
                <p>We couldn&apos;t find any destinations right now.
                            New travel places and exciting adventures will appear here soon.
                            Please check back later and explore more amazing destinations with us.</p>
                </div> : <div><h2 className='text-3xl font-semibold'>Explore All Destinations</h2>
                <p className='text-black/50 mt-2.5 mb-10'>Find your perfect travel experience from our curated collection</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    destinations.map(destination => <Destination key={destination._id} destination= {destination}></Destination>)
                }
            </div>
            </div>
            }
            <div className='flex justify-center mt-8'>
                <Link className='text-cyan-500 flex items-center gap-1 border border-cyan-500 p-3 hover:scale-105 transition duration-300 group' href='/add-destination'>Add Your Destinations <GoArrowRight className='transition duration-300 group-hover:translate-x-2' /></Link>
            </div>
        </div>
    );
};

export default DestinationPage;
