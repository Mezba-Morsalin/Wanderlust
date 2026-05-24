"use client";

import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoArrowForwardSharp } from "react-icons/io5";

const Booking = ({ destination }) => {
    const [date, setDate] = useState(null);

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleBooking = async () => {

        if(!user) {
            toast.error("Please Login First")
        }
        if (!date) {
            toast.error("Please Select a Date ")
        }

        const bookingData = {
            userId: user.id,
            userName: user.name,
            userImage: user.image,

            destinationId: destination._id,
            nameOfDestination: destination.destinationName,
            destinationImage: destination.imageUrl,
            destinationCountry: destination.country,
            destinationPrice: destination.price,

            departureDate: date.toString(),
        };

            const {data : tokenData} = await authClient.token();

        try {

            const res = await fetch("http://localhost:5000/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${tokenData?.token}`
                },
                body: JSON.stringify(bookingData),
            });

            const data = await res.json();

            if(data?.acknowledged) {
                toast.success(`${destination.destinationName} Booking Successful`)
            }
            else {
                toast.error(data?.message || "Booking Failed")
            }

        } catch (error) {
            toast.error("Something Went Wrong");
            console.log(error)
        }
    };

    if (isPending) {
        return (
            <div className="md:w-[900px] shadow p-4">
                <p className="text-cyan-500">
                    Just a moment, setting things up...
                </p>
            </div>
        );
    }

    return (
        <div className="md:w-[900px] shadow p-4 space-y-3">

            <p className="text-black/50">Starting From</p>

            <div>
                <p className="text-cyan-500 font-semibold text-2xl">
                    ${destination.price}
                </p>

                <p className="text-black/50">Per Person</p>
            </div>

            <DateField
                value={date}
                onChange={setDate}
                className="w-[256px]"
                name="date"
            >
                <Label>Date</Label>

                <DateField.Group>
                    <DateField.Input>
                        {(segment) => (
                            <DateField.Segment segment={segment} />
                        )}
                    </DateField.Input>
                </DateField.Group>
            </DateField>

            <hr />

            <Button
                onClick={handleBooking}
                disabled={!user || !date}
                variant="outline"
                className="rounded-none w-full bg-cyan-500 text-white flex gap-3 items-center hover:scale-105 transition duration-300 group disabled:opacity-50"
            >
                Book Now

                <IoArrowForwardSharp className="transition duration-300 group-hover:translate-x-2" />
            </Button>

            <Toaster />

        </div>
    );
};

export default Booking;