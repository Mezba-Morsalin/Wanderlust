import Destination from '@/app/components/Destination';
import { getDestination } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import noDestination from '../../../../public/assets/NoDestination.png'
const DestinationPage = async () => {
    const destinations = await getDestination()
    return (
        <div className='w-11/12 mx-auto my-16'>
            {
                destinations.length === 0 ? <div className='space-y-4 flex flex-col justify-center items-center'>
                    <Image src={noDestination} height={400} width={500} alt='No-Destionation'></Image>
                    <h2 className='text-3xl font-semibold'>No Destination Found</h2>
                <p>We couldn&apos;t find any destinations right now.
                            New travel places and exciting adventures will appear here soon.
                            Please check back later and explore more amazing destinations with us.</p>
                </div> : <div><h2 className='text-3xl font-semibold mb-10'>Explore All Destinations</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    destinations.map(destination => <Destination key={destination._id} destination= {destination}></Destination>)
                }
            </div>
            </div>
            }
        </div>
    );
};

export default DestinationPage;
