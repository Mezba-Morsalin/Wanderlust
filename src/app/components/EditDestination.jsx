
import { UpdateForm } from '@/lib/action';
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from '@heroui/react';
import React from 'react';
import { FiEdit3 } from 'react-icons/fi';

const EditDestination = ({destination}) => {
  
    const updateDataAction = async (formData) => {
      "use server"
      return UpdateForm(destination._id, formData);
    }
    return (
        <div>
            <Modal>
      <Button className={'flex items-center gap-2.5'} variant="outline"><FiEdit3 />Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-3xl mt-16">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FiEdit3/>
              </Modal.Icon>
              <Modal.Heading>Edit Your Destination</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
               Edit and manage your destination information with ease. Keep your travel package updated by changing trip details, pricing, schedules, images, and descriptions to provide travelers with the latest experience.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
               <form action={updateDataAction}
                           className="p-10 space-y-8"
                         >
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             {/* Destination Name */}
                             <div className="md:col-span-2">
                               <TextField defaultValue={destination.destinationName} name="destinationName" isRequired>
                                 <Label>Destination Name</Label>
                                 <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                 <FieldError />
                               </TextField>
                             </div>
               
                             {/* Country */}
                             <TextField defaultValue={destination.country } name="country" isRequired>
                               <Label>Country</Label>
                               <Input placeholder="Indonesia" className="rounded-2xl" />
                               <FieldError />
                             </TextField>
               
                             {/* Category - Updated Select Component */}
                             <div>
                               <Select
                                  defaultSelectedKeys={[destination.category]}
                                  name="category"
                                  isRequired
                                  className="w-full"
                                  placeholder="Select category"
>
                                 <Label>Category</Label>
                                 <Select.Trigger className="rounded-2xl">
                                   <Select.Value />
                                   <Select.Indicator />
                                 </Select.Trigger>
                                 <Select.Popover>
                                   <ListBox>
                                     <ListBox.Item id="Beach" textValue="Beach">
                                       Beach
                                       <ListBox.ItemIndicator />
                                     </ListBox.Item>
                                     <ListBox.Item id="Mountain" textValue="Mountain">
                                       Mountain
                                       <ListBox.ItemIndicator />
                                     </ListBox.Item>
                                     <ListBox.Item id="City" textValue="City">
                                       City
                                       <ListBox.ItemIndicator />
                                     </ListBox.Item>
                                     <ListBox.Item id="Adventure" textValue="Adventure">
                                       Adventure
                                       <ListBox.ItemIndicator />
                                     </ListBox.Item>
                                     <ListBox.Item id="Cultural" textValue="Cultural">
                                       Cultural
                                       <ListBox.ItemIndicator />
                                     </ListBox.Item>
                                     <ListBox.Item id="Luxury" textValue="Luxury">
                                       Luxury
                                       <ListBox.ItemIndicator />
                                     </ListBox.Item>
                                   </ListBox>
                                 </Select.Popover>
                               </Select>
                             </div>
               
                             {/* Price */}
                             <TextField defaultValue={destination.price} name="price" type="number" isRequired>
                               <Label>Price (USD)</Label>
                               <Input
                                 type="number"
                                 placeholder="1299"
                                 className="rounded-2xl"
                               />
                               <FieldError />
                             </TextField>
               
                             {/* Duration */}
                             <TextField defaultValue={destination.duration} name="duration" isRequired>
                               <Label>Duration</Label>
                               <Input
                                 placeholder="7 Days / 6 Nights"
                                 className="rounded-2xl"
                               />
                               <FieldError />
                             </TextField>
               
                             {/* Departure Date */}
                             <div className="md:col-span-2">
                               <TextField defaultValue={destination.departureDate} name="departureDate" type="date" isRequired>
                                 <Label>Departure Date</Label>
                                 <Input type="date" className="rounded-2xl" />
                                 <FieldError />
                               </TextField>
                             </div>
               
                             {/* Image URL - Removed preview */}
                             <div className="md:col-span-2">
                               <TextField defaultValue={destination.imageUrl} name="imageUrl" isRequired>
                                 <Label>Image URL</Label>
                                 <Input
                                   type="url"
                                   placeholder="https://example.com/bali-paradise.jpg"
                                   className="rounded-2xl"
                                 />
                                 <FieldError />
                               </TextField>
                             </div>
               
                             {/* Description */}
                             <div className="md:col-span-2">
                               <TextField  name="description"
   defaultValue={destination.description}
   placeholder="Describe the travel experience..."
   className="rounded-3xl">
                                 <Label>Description</Label>
                                 <TextArea
                                   placeholder="Describe the travel experience..."
                                   className="rounded-3xl"
                                 />
                                 <FieldError />
                               </TextField>
                             </div>
                           </div>
               <Modal.Footer>
              <Button slot="close" className={'text-cyan-500'} variant="secondary">
                Cancel
              </Button>
              <Button type='submit' className={'bg-cyan-500'} slot="close">Edit Destination</Button>
            </Modal.Footer>
                         </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        </div>
    );
};

export default EditDestination;