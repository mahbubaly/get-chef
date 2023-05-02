import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="email" className="input input-bordered" required />

                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered"  required/>

                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" required/>

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                        <label className="label">
                                            <span className="label-text">Confirm password</span>
                                        </label>
                                        <input type="password" placeholder="password" name='confirm' className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Sign Up</button>
                                    </div>
                                </div>

                                <small className='text-center mb-2'>Don't have account?<Link to="/log" className='hover:underline  text-[orange]'>Log in </Link> </small>



                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default SignUp;