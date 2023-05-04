import React from 'react';
import Header from '../Pages/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Pages/Footer';


const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header />
            <div className='mx-auto flex justify-center  items-center bg-white'>{
                navigation.state === "loading" && <progress className="progress w-56"></progress>
            } </div>
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;