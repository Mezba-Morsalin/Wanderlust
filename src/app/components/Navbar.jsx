"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import wanderlust from "../../../public/assets/Wanderlast.png";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";
import { BounceLoader } from "react-spinners";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    const pathname = usePathname();

    const navLinkClass = (path) =>
        `relative font-semibold transition duration-300 w-fit
        ${pathname === path
            ? "text-cyan-500"
            : "text-black hover:text-cyan-500"}
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:bg-cyan-500 after:transition-all after:duration-300
        ${pathname === path
            ? "after:w-full"
            : "after:w-0 hover:after:w-full"}`;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <nav className="bg-white shadow py-4 sticky top-0 z-[999]">

            <div className="w-11/12 mx-auto flex items-center justify-between">

                <button
                    className="lg:hidden text-3xl cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    <HiMenu />
                </button>

                <ul className="hidden lg:flex items-center gap-6">

                    <li>
                        <Link
                            className={navLinkClass("/")}
                            href="/"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            className={navLinkClass("/destinations")}
                            href="/destinations"
                        >
                            Destinations
                        </Link>
                    </li>

                    <li>
                        <Link
                            className={navLinkClass("/my-bookings")}
                            href="/my-bookings"
                        >
                            My Bookings
                        </Link>
                    </li>

                    <li>
                        <Link
                            className={navLinkClass("/admin")}
                            href="/admin"
                        >
                            Admin
                        </Link>
                    </li>

                </ul>

                <div className="flex justify-center">
                    <Image
                        src={wanderlust}
                        alt="logo"
                        width={170}
                        height={170}
                    />
                </div>

                <div className="hidden lg:flex items-center gap-5">

                    {isPending ? (
                        <BounceLoader
                            color="#06b6d4"
                            size={35}
                        />
                    ) : user ? (
                        <>
                            <div className="flex items-center gap-2">

                                <Image
                                    src={user?.image || "/assets/default-user.png"}
                                    alt="user"
                                    width={40}
                                    height={40}
                                    className="rounded-full border"
                                />

                                <div className="flex flex-col space-y-1.5">
                                    <span className="font-medium">
                                    Hi, {user?.name}
                                </span>
                                <Link  className={`${navLinkClass("/profile")} text-sm text-gray-500`}
                        href="/profile">
                                        See Your Profile
                                    </Link>
                                </div>

                            </div>

                            <Link href={'/'}
                                onClick={handleSignOut}
                                className="text-red-500 font-semibold hover:text-red-600 hover:bg-gray-200 p-2 duration-300 transition rounded"
                            >
                                Sign Out
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                className={navLinkClass("/profile")}
                                href="/profile"
                            >
                                <div className="flex items-center gap-2">
                                    <CgProfile />
                                    <span>Profile</span>
                                </div>
                            </Link>

                            <Link
                                className={navLinkClass("/signin")}
                                href="/signin"
                            >
                                Sign In
                            </Link>

                            <Link
                                className={navLinkClass("/signup")}
                                href="/signup"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}

                </div>
            </div>

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 z-[998]"
                />
            )}

            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white z-[1000] shadow-lg transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full"}`}
            >

                <div className="flex justify-between items-center px-5 py-4 border-b">

                    <h2 className="text-xl font-bold leading-none">
                        Menu
                    </h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="text-2xl leading-none cursor-pointer"
                    >
                        <HiX />
                    </button>

                </div>

                <div className="flex flex-col gap-5 p-5">

                    <Link
                        onClick={() => setOpen(false)}
                        className={navLinkClass("/")}
                        href="/"
                    >
                        Home
                    </Link>

                    <Link
                        onClick={() => setOpen(false)}
                        className={navLinkClass("/destinations")}
                        href="/destinations"
                    >
                        Destinations
                    </Link>

                    <Link
                        onClick={() => setOpen(false)}
                        className={navLinkClass("/my-bookings")}
                        href="/my-bookings"
                    >
                        My Bookings
                    </Link>

                    <Link
                        onClick={() => setOpen(false)}
                        className={navLinkClass("/admin")}
                        href="/admin"
                    >
                        Admin
                    </Link>

                    <hr />

                    {isPending ? (
                        <div className="flex justify-center">
                            <BounceLoader
                                color="#06b6d4"
                                size={35}
                            />
                        </div>
                    ) : user ? (
                        <>
                            <div className="flex items-center gap-3">

                                <Image
                                    src={user?.image || "/assets/default-user.png"}
                                    alt="user"
                                    width={45}
                                    height={45}
                                    className="rounded-full border"
                                />

                                <div>
                                    <h3  className="font-semibold">
                                        {user?.name}
                                    </h3>

                                    <Link  className={`${navLinkClass("/profile")} text-sm text-gray-500`}
                        href="/profile">
                                        See Your Profile
                                    </Link>
                                </div>

                            </div>

                            <Link href={'/'}
                                onClick={handleSignOut}
                                className="text-left text-red-500 font-semibold hover:text-red-600 transition"
                            >
                                Sign Out
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                onClick={() => setOpen(false)}
                                className={navLinkClass("/signin")}
                                href="/signin"
                            >
                                Sign In
                            </Link>

                            <Link
                                onClick={() => setOpen(false)}
                                className={navLinkClass("/signup")}
                                href="/signup"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}

                </div>
            </div>
        </nav>
    );
};

export default Navbar;