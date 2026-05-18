import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center min-h-screen gap-2">
        <Spinner className='text-cyan-500' size="xl" />
      </div>
        </div>
    );
};

export default loading;