import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import wanderlust from '../../../public/assets/Wanderlast.png'
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    return (
        <nav className='bg-white shadow py-5'>
            <div className='w-11/12 mx-auto'>
            <div className='flex justify-between items-center'>
            <ul className='flex items-center gap-6'>
                <li><Link className='text-base font-semibold' href='/'>Home</Link></li>
                <li><Link className='text-base font-semibold' href='/destinations'>Destinations</Link></li>
                <li><Link className='text-base font-semibold' href='/add-destination'>Add Destinations</Link></li>
                <li><Link className='text-base font-semibold' href='/my-bookings'>My Bookings</Link></li>
                <li><Link className='text-base font-semibold' href='/admin'>Admin</Link></li>
            </ul>
            <div>
                <Image src={wanderlust} alt='Wanderlust-logo' width={200} height={200}></Image>
            </div>
            <ul className='flex items-center gap-6'>
                <li><Link className='text-base font-semibold flex items-center gap-2' href='/profile'><CgProfile></CgProfile>Profile</Link></li>
                <li><Link className='text-base font-semibold' href='/login'>Login</Link></li>
                <li><Link className='text-base font-semibold' href='/signup'>Sign Up</Link></li>
            </ul>
        </div>
        </div>
        </nav>
    );
};

export default Navbar;