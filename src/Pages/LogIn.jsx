import React, { useContext, useState } from 'react';
import './Styles/Style.css'
import { Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Main/Authprovider/AuthProvider';

const LogIn = () => {
    const [error,setError] = useState();
    const {logIn} = useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    const Navigate = useNavigate()
    const from = location.state?.form?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password) 
        .then(result => {
            const logIn = result.user;
            console.log(logIn);
            form.reset();
            Navigate(from , {replace: true});
        })
        .catch( error => {
            console.error(error);
            setError("Invalid password!!")
        })


        
    }
    return (
        <>
            <div>
                <div className='container mx-auto'>
                    <div className="from-z">
                        <div className="flex justify-center items-center flex-col ">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl my-5 font-bold">Login now!</h1>

                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleLogin} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className='btn btn-primary'> <input className='btn-submit' type="submit" value="Login" /></button>
                                    </div>
                                </form>

                                <div className=' ml-8 mb-2'>
                                    <p className='text-warning '>{error} </p>
                                </div>

                                <small className='text-center mb-2'>Don't have account?<Link to="/sign" className='hover:underline  text-[orange]'>Sign up </Link> </small>



                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default LogIn;