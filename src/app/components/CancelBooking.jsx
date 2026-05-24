"use client"

import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { RiDeleteBin5Line } from 'react-icons/ri';

const CancelBooking = ({UId}) => {
    const handleDelete = async ()=> {

      const {data : tokenData} = await authClient.token();
        const res = await fetch(`http://localhost:5000/bookings/${UId}`, {
            method: 'DELETE',
            headers : {
                "Content-type" : "application/json",
                authorization : `Bearer ${tokenData?.token}`
            }
        });
        const data = await res.json();

        if(data.deletedCount > 0) {
            toast.success("Your Booking Cancel Successfully")
            setTimeout(() => {
                    window.location.reload();
                }, 1000);
        }
    }
    return (
        <div>
             <AlertDialog>
      <Button className={'border border-red-500 text-red-500 rounded-none flex items-center'} variant='ghost'><RiDeleteBin5Line /> Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently Cancel <strong>Destination</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={()=> handleDelete()} slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    <Toaster/>
        </div>
    );
};

export default CancelBooking;