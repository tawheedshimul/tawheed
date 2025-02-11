import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='sticky top-0 z-30'>
                <Navbar />
            </div>

            <Outlet />

            <Footer />

        </div>
    );
};

export default Main;