import { causeSans } from '@/app/layout';
import Image from 'next/image';
import React from 'react';
import image1 from '../../../../public/assets/ShieldCheck.png'
import image2 from '../../../../public/assets/MapTrifold.png'
import image3 from '../../../../public/assets/Headset.png'

const WhyChoose = () => {
    return (
        <div className='bg-sky-100'>
            <div className='w-11/12 mx-auto py-24'>
                <div className='mb-10 text-center'>
                    <h1 className={`${causeSans.className} text-4xl font-semibold mb-2`}>Featured Destinations</h1>
                    <p className='text-black/50'>Handpicked travel experiences for the adventure seekers</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
                    <div className='bg-white p-8 shadow rounded-xl space-y-3'>
                        <Image src={image1} className='w-10' width={500} height={200} alt='shield'></Image>
                        <h3 className={`${causeSans.className} text-xl font-semibold`}>Safe & Secure</h3>
                        <p className='text-black/50 leading-7'>Your safety is our priority with comprehensive travel insurance and 24/7 support.</p>
                    </div>
                    <div className='bg-white p-8 shadow rounded-xl space-y-3'>
                        <Image src={image2} className='w-10' width={500} height={200} alt='shield'></Image>
                        <h3 className={`${causeSans.className} text-xl font-semibold`}>Expert Guides</h3>
                        <p className='text-black/50 leading-7'>Local experts who bring destinations to life with authentic cultural insights.</p>
                    </div>
                    <div className='bg-white p-8 shadow rounded-xl space-y-3'>
                        <Image src={image3} className='w-10' width={500} height={200} alt='shield'></Image>
                        <h3 className={`${causeSans.className} text-xl font-semibold`}>24/7 Support</h3>
                        <p className='text-black/50 leading-7'>Round-the-clock customer service to assist you wherever your journey takes you.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;