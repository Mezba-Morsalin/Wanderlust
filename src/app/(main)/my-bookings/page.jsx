import UserBookings from '@/app/components/UserBookings';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
    headers: await headers() 
})
    const user = session?.user

    console.log("user", user)
    const res = await fetch(`${process.env.SERVER_URL}/bookings/${user?.id}`);
    const data = await res.json();
    console.log("data", data);

    const hasBookings = data && data.length > 0
    return (
        <div className='w-11/12 mx-auto my-24'>
            <div>
                {
                    hasBookings ? <div>
                    <div className='space-y-3'>
                <h2 className='text-4xl font-semibold'>My Bookings</h2>
            <p className='text-black/50'>Manage and view your upcoming travel plans</p>
            </div>
            <div className='flex flex-col gap-10 mt-10'>
                {
                data.map((u, index) => <UserBookings key={index} u={u}></UserBookings>)
            }
            </div>
                </div> : <div className='space-y-3 flex flex-col justify-center items-center'>
                        <h2 className='text-4xl font-semibold'>No Bookings Found</h2>
                        <p className='text-black/50'>You haven’t made any bookings yet. Explore destinations and start your first trip by booking something you like.</p>
                        <Link href={'/destinations'} ><Button className='text-cyan-500 border border-cyan-500 flex gap-2 items-center rounded-none mt-4' variant='ghost'>Explore Destinations <FaArrowRightLong /></Button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyBookingPage;


