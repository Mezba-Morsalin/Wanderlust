"use client"
import { AlertDialog, Button } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const DeleteDestinations = ({destination }) => {
  const handleDelete = async() => {
    const  res = await fetch(`http://localhost:5000/destinations/${destination._id}`, {
        method : "DELETE"
    })

    const data = await res.json();

    if (data.deletedCount > 0) {
      toast.error(`${destination.destinationName} Deleted Successful`)
        redirect('/destinations')
    }
  }
    return (
        <div>
            <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Destination Permanently!</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destination.destinationName} Destination</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={()=>handleDelete()} slot="close" variant="danger">
                Delete Project
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

export default DeleteDestinations;