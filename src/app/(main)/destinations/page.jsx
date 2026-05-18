import Destination from '@/app/components/Destination';
import { getDestination } from '@/lib/data';
import React from 'react';

const DestinationPage = async () => {
    const destinations = await getDestination()
    return (
        <div className='w-11/12 mx-auto my-16'>
            <h2>Explore All Destinations</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    destinations.map(destination => <Destination key={destination._id} destination= {destination}></Destination>)
                }
            </div>
        </div>
    );
};

export default DestinationPage;