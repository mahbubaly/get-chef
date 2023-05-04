import React, { useContext, useState } from 'react';
import './Styles/Style.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Main/Authprovider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState();
    const { createUser } = useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    const Navigate = useNavigate()
    const from = location.state?.form?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, name, confirm);


        setError(' ')
        if (password !== confirm) {
            setError("Your password did't matched!!")

        }
        else if (password.length < 6) {
            setError("Your password is less then 6 digit!! ")

        }
        else if (password== 1234567890) {
            setError("Your password is Week!! ")

        }
        else if (password== abcdefgh) {
            setError("Your password is Week!! ")

        }

        createUser(email, password)
            .then(result => {
                const userLogged = result.user;
                console.log(userLogged);
                Navigate(from , {replace: true});
            })
            .catch(error => {
                console.error(error.message);
                setError("Already used this email address!!");
               
            })



    }
    return (
        <>
            <div>
                <div className='container mx-auto'>
                    <div className="from-z">
                        <div className="flex justify-center items-center flex-col ">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl my-5 font-bold">Sign up now!</h1>

                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleLogin} className="card-body">
                                    <div className="form-control">

                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />

                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="Email" className="input input-bordered" />

                                        {/* <label className="label">

                                            <span className="label-text">Photo url</span>
                                        </label>
                                        <input type="email" name='email' placeholder="Photo url" className="input input-bordered" /> */}
                                    </div>
                                    <div className="form-control">

                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>

                                        <input type="password" placeholder="password" name='password' className="input input-bordered" />

                                        <label className="label">
                                            <span className="label-text">Confirm password</span>
                                        </label>

                                        <input type="password" placeholder="confirm" name='confirm' className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>

                                    <div>
                                        <p className='text-warning'> {error}</p>
                                    </div>





                                    <div className="form-control mt-6">
                                        <button className='btn btn-primary'> <input className='btn-submit' type="submit" value="sign up" /></button>
                                    </div>
                                </form>

                                <small className='text-center mb-2'>I have already an account?<Link to="/log" className='hover:underline  text-[orange]'>log in </Link> </small>



                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SignUp;