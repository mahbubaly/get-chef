import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorLogo from '../Images/error-removebg-preview.png'

const Error = () => {
    const error = useRouteError();
    return (
        <div className=' p-6 text-center mt-9'>
            
            <img className='mx-auto' src={errorLogo} alt="" />
            
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link><button className='btn btn-warning mt-11'>Go back home</button></Link>
        </div>
    );
};

export default Error;