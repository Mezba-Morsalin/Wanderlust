import { Button } from '@heroui/react';
import { format } from 'date-fns';
import Image from 'next/image';
import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';
import CancelBooking from './CancelBooking';

const UserBookings = ({u}) => {
    return (
        <div className='shadow p-8 border border-gray-200'>
            <div className='flex flex-col lg:flex-row gap-10 justify-between'>
                <div className='flex flex-col lg:flex-row gap-8'>
                    <Image src={u.destinationImage} alt='destination-image' height={350} width={350}></Image>
                    <div className='space-y-3'>
                        <h2 className='text-2xl font-semibold'>{u.nameOfDestination}</h2>
                    <p className='text-black/50 flex items-center gap-2'><IoLocationOutline />{u._id}</p>
                    <p className='text-black/50 flex items-center gap-2'><SlCalender />{u.departureDate ? format(new Date(u.departureDate), "dd MMMM yyyy") : "No Date"}</p>
                    <p className='text-cyan-500 text-2xl font-semibold'>${u.destinationPrice}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-end '>
                    <div className='flex gap-4'>
                        <CancelBooking UId={u._id}/>
                    <Button className={'bg-cyan-500 text-white rounded-none hover:bg-cyan-600 transition duration-300 flex items-center'} variant='ghost'><FaRegEye />View</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserBookings;