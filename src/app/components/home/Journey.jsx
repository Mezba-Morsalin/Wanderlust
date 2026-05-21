import { causeSans } from '@/app/layout';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Journey = () => {
    return (
        <div className="bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/assets/CTA.png')] bg-cover bg-center bg-no-repeat h-[60vh] w-full">
            <div className='h-full text-center flex flex-col justify-center items-center space-y-3'>
                <h2 className={`${causeSans.className} text-4xl lg:text-5xl text-white font-semibold`}>Ready to Start Your Journey</h2>
                <p className='text-white mb-6'>Join thousands of travelers who have discovered the world with us</p>
                <Link href={'/destinations'}><Button className={'bg-white text-black flex gap-3 items-center rounded'} variant='ghost'>BOOK YOUR TRIP TODAY <FaLongArrowAltRight /></Button></Link>
            </div>
        </div>
    );
};

export default Journey;