import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AddDestination from './add-destination/page';

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default MainLayout;