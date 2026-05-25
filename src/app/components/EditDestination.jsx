"use client";

import React from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { FiEdit3 } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const EditDestination = ({ destination }) => {
  const router = useRouter();
  const updateDataAction = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
     const {data : tokenData} = await authClient.token();

     console.log(tokenData)
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${destination._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization : `Bearer ${tokenData?.token}`
          },
          body: JSON.stringify(data),
        }
      );

      const updatedData = await res.json();
      console.log("Updated:", updatedData);

      if (updatedData.modifiedCount > 0) {
              toast.success(
                `Destination Edited Successfully`
              );
      
              router.refresh();
            } else {
              toast.error("Failed Edit Destination");
            }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div>
      <Modal>
      <Button className="flex items-center gap-2.5" variant="outline">
        <FiEdit3 /> Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-3xl mt-16">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FiEdit3 />
              </Modal.Icon>

              <Modal.Heading>Edit Your Destination</Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-muted">
                Edit and manage your destination information easily.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={updateDataAction} className="p-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={destination.destinationName}
                        name="destinationName"
                        isRequired
                      >
                        <Label>Destination Name</Label>
                        <Input className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField
                      defaultValue={destination.country}
                      name="country"
                      isRequired
                    >
                      <Label>Country</Label>
                      <Input className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Category */}
                    <div>
                      <Select
                        defaultSelectedKeys={
                          destination.category
                            ? [destination.category]
                            : []
                        }
                        name="category"
                        isRequired
                        className="w-full"
                      >
                        <Label>Category</Label>

                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Beach">Beach</ListBox.Item>
                            <ListBox.Item id="Mountain">Mountain</ListBox.Item>
                            <ListBox.Item id="City">City</ListBox.Item>
                            <ListBox.Item id="Adventure">
                              Adventure
                            </ListBox.Item>
                            <ListBox.Item id="Cultural">
                              Cultural
                            </ListBox.Item>
                            <ListBox.Item id="Luxury">Luxury</ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Price */}
                    <TextField
                      defaultValue={destination.price}
                      name="price"
                      type="number"
                      isRequired
                    >
                      <Label>Price (USD)</Label>
                      <Input type="number" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                      defaultValue={destination.duration}
                      name="duration"
                      isRequired
                    >
                      <Label>Duration</Label>
                      <Input className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={destination.departureDate}
                        name="departureDate"
                        type="date"
                        isRequired
                      >
                        <Label>Departure Date</Label>
                        <Input type="date" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={destination.imageUrl}
                        name="imageUrl"
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input type="url" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <Label>Description</Label>
                      <TextArea
                        name="description"
                        defaultValue={destination.description}
                        className="rounded-3xl w-full"
                      />
                    </div>
                  </div>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button type="submit" className="bg-cyan-500" slot="close">
                      Edit Destination
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    <Toaster/>
    </div>
  );
};

export default EditDestination;