
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import SlideDestination from './SildeDestination';

const FeatureDestination = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/destinations`)
    const destinations = await res.json();
    return (
        <div className='w-11/12 mx-auto my-16'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='mb-10'>
                    <h1 className='text-4xl font-semibold mb-2'>Featured Destinations</h1>
                    <p className='text-black/50'>Handpicked travel experiences for the adventure seekers</p>
                </div>
                <div className='mb-8'>
                    <Link className='flex gap-3 items-center ' href={'/destinations'}><Button className={'border border-cyan-500 text-cyan-500 p-4 cursor-pointer rounded-none'} variant='ghost'>All Destinations <FaLongArrowAltRight /></Button></Link>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                 {
                    destinations.slice(1, 4).map(destination => <SlideDestination key={destination._id} destination={destination}></SlideDestination>)
                 }
            </div>
        </div>
    );
};

export default FeatureDestination;



