import { getDestination } from '@/lib/data';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import SlideDestination from './SildeDestination';

const FeatureDestination = async () => {
    const destinations = await getDestination()
    return (
        <div className='w-11/12 mx-auto my-16'>
            <div className='flex justify-between items-center'>
                <div className='mb-10'>
                    <h1 className='text-4xl font-semibold mb-2'>Featured Destinations</h1>
                    <p className='text-black/50'>Handpicked travel experiences for the adventure seekers</p>
                </div>
                <div>
                    <Link className='flex gap-3 items-center ' href={'/destinations'}><Button className={'border border-cyan-500 text-cyan-500 p-4 cursor-pointer rounded-none'} variant='ghost'>All Destinations <FaLongArrowAltRight /></Button></Link>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                 {
                    destinations.slice(1, 4).map(destination => <SlideDestination key={destination._id} destination={destination}></SlideDestination>)
                 }
            </div>
        </div>
    );
};

export default FeatureDestination;



