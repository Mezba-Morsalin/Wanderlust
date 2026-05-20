"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import wanderlust from '../../../public/assets/Wanderlast.png';
import { CgProfile } from 'react-icons/cg';
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const navLinkClass = (path) =>
        `relative font-semibold transition duration-300
        ${pathname === path ? "text-cyan-500" : "text-black hover:text-cyan-500"}
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:h-[2px] after:bg-cyan-500 after:transition-all after:duration-300
        ${pathname === path ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

    return (
        <nav className='bg-white shadow py-4 relative'>
            <div className='w-11/12 mx-auto flex items-center justify-between'>
                <button
                    className='lg:hidden text-3xl'
                    onClick={() => setOpen(true)}
                >
                    <HiMenu />
                </button>

                <ul className='hidden lg:flex items-center gap-6'>
                    <li><Link className={navLinkClass('/')} href='/'>Home</Link></li>
                    <li><Link className={navLinkClass('/destinations')} href='/destinations'>Destinations</Link></li>
                    <li><Link className={navLinkClass('/my-bookings')} href='/my-bookings'>My Bookings</Link></li>
                    <li><Link className={navLinkClass('/admin')} href='/admin'>Admin</Link></li>
                </ul>
                <div className='flex-1 flex justify-center md:flex-none'>
                    <Image
                        src={wanderlust}
                        alt='Wanderlust-logo'
                        width={160}
                        height={160}
                    />
                </div>
                <ul className='hidden lg:flex items-center gap-6'>
                    <li>
                        <Link className={navLinkClass('/profile')} href='/profile'>
                            <CgProfile className='inline mr-1' /> Profile
                        </Link>
                    </li>
                    <li><Link className={navLinkClass('/signin')} href='/signin'>Sign In</Link></li>
                    <li><Link className={navLinkClass('/signup')} href='/signup'>Sign Up</Link></li>
                </ul>

            </div>
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className='fixed inset-0 bg-black/40 z-40'
                />
            )}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full"}`}
            >

                <div className='flex justify-between items-center p-4 border-b'>
                    <h2 className='font-bold text-lg'>Menu</h2>
                    <button onClick={() => setOpen(false)} className='text-2xl'>
                        <HiX />
                    </button>
                </div>

                <div className='flex flex-col gap-4 p-5'>
                    <Link onClick={() => setOpen(false)} className={navLinkClass('/')} href='/'>Home</Link>
                    <Link onClick={() => setOpen(false)} className={navLinkClass('/destinations')} href='/destinations'>Destinations</Link>
                    <Link onClick={() => setOpen(false)} className={navLinkClass('/my-bookings')} href='/my-bookings'>My Bookings</Link>
                    <Link onClick={() => setOpen(false)} className={navLinkClass('/admin')} href='/admin'>Admin</Link>

                    <hr />

                    <Link onClick={() => setOpen(false)} className={navLinkClass('/profile')} href='/profile'>
                        <CgProfile className='inline mr-1' /> Profile
                    </Link>
                    <Link onClick={() => setOpen(false)} className={navLinkClass('/signin')} href='/signin'>Sign In</Link>
                    <Link onClick={() => setOpen(false)} className={navLinkClass('/signup')} href='/signup'>Sign Up</Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;