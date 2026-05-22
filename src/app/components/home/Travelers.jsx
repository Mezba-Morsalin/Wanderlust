;
import React from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import person2 from '../../../../public/assets/person2.png'
import person1 from '../../../../public/assets/person1.png'
import Image from 'next/image';

const Travelers = () => {
    return (
        <div className='w-11/12 mx-auto my-16'>
            <div className='flex justify-between'>
                <div className='space-y-2.5'>
                    <h2 className={` text-4xl font-semibold`}>What Travelers Say</h2>
                    <p className='text-black/50'>Real experiences from our happy travelers</p>
                </div>
                <div className='flex gap-3'>
                    <button className='border border-black/50 w-10 h-10 rounded-full flex items-center justify-center  text-black/50 hover:bg-cyan-500 hover:text-white hover:border-none transition cursor-pointer'>
                      <FaLongArrowAltLeft size={20} />
                    </button>

                    <button className='border border-black/50 w-10 h-10 flex items-center justify-center rounded-full text-black/50 hover:bg-cyan-500 hover:text-white hover:border-none transition cursor-pointer'>
                      <FaLongArrowAltRight size={20} />
                    </button>
                </div>
            </div>
           <div className='flex flex-col lg:flex-row gap-12 mt-10'>
             <div className='flex flex-col-reverse lg:flex-row gap-10 border shadow border-gray-300 p-8'>
                <div className='space-y-2'>
                    <h3 className={`$ text-2xl font-semibold`}>The Bali trip was absolutely magical! every details was perfectly planned. That Resort via luxurious and the cultural experiences where unforgettable</h3>
                <p className={` text-cyan-500`}>-- Michel Chen</p>
                <p className='text-black/50'>Singapore</p>
                </div>
                <div>
                    <Image className='w-96' src={person2} height={200} width={1000} alt='person-2'></Image>
                </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row gap-10 border shadow border-gray-300 p-8'>
                <div className='space-y-2'>
                    <h3 className={`text-2xl font-semibold`}>Swiss Alps adventure exceeded all Expectations the mountain views where breathtaking and our guide was incredibly knowledgeable highly Recommended</h3>
                <p className={`$ text-cyan-500`}>-- Sarah Johnson</p>
                <p className='text-black/50'>New York, USA</p>
                </div>
                <div>
                    <Image className='w-96' src={person1} height={200} width={1000} alt='person-1'></Image>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Travelers;