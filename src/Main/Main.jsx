import React from 'react';
import Header from '../Pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;