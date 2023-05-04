import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import cuisine from '../Images/cuisine.png'
import { BeakerIcon, XMarkIcon, Bars4Icon } from '@heroicons/react/24/solid'
import Banner from './Banner';
import { AuthContext } from '../Main/Authprovider/AuthProvider';

const Header = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const handlerSignOut = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.error(error.message);
            })
    }




    return (
        <>
            <div className='bg-gray-900'>
                <div className='container mx-auto'>
                    <div className="navbar  p-5">
                        <div className="flex-1">
                            <Link to="/" className="btn btn-ghost normal-case text-xl italic text-[orange]">
                                <img className='w-[60px] h-[60px]' src={cuisine} alt="" /> Aly cuisine</Link>
                        </div>
                        <div className="flex-none gap-5 xl:gap-9">



                            <div className='lg:block hidden'>
                                <div className='flex items-center text-white gap-5'>
                                    <Link className='hover:underline hover:text-orange-400' to="/" > <h1>Home</h1></Link>
                                    <Link className='hover:underline hover:text-orange-400' to="/blog"> <h1>Blog</h1></Link>
                                    <Link className='hover:underline hover:text-orange-400' to="/about"> <h1>About</h1></Link>
                                    <Link className='hover:underline hover:text-orange-400' to="/log"> <h1>Log in</h1></Link>
                                    <Link className='hover:underline hover:text-orange-400 ' to="/sign"> <h1>Sign up</h1></Link>
                                    <div>
                                        {user && <span className='text-white'> {user.email} <button onClick={handlerSignOut} className=' ml-3 rounded hover:bg-red-600   '>Sign out</button> </span>}
                                    </div>

                                </div>
                            </div>
                            <div className='lg:hidden nav' onClick={() => setOpen(!open)}>
                                <span>
                                    {
                                        open === true ? <XMarkIcon className="h-8 w-8 text-primary" /> : <Bars4Icon className="h-8 w-8 text-primary" />
                                    }
                                </span>
                                <div className={`${open ? 'bg-gray-900 right-0  text-primary p-6 w-44  right-14-0 pl-3 ' : '-top-96 -left-9'
                                    } absolute flex flex-col duration-1000 gap-3 `}>


                                    <Link className='hover:underline hover:text-orange-400' to="/" > <h1>Home</h1></Link>
                                    <Link className='hover:underline hover:text-orange-400' to="/blog"> <h1>Blog</h1></Link>
                                    <Link className='hover:underline hover:text-orange-400' to="/about"> <h1>About</h1></Link>
                                    <Link className='hover:underline hover:text-orange-400' to="/log"> <h1>Log in</h1></Link>
                                    <Link className='hover:underline hover:text-orange-400 ' to="/sign"> <h1>Sign up</h1></Link>
                                    <div>
                                        {user && <span className='text-white'> {user.display}</span>}
                                    </div>

                                </div>

                            </div>

                            <div className="dropdown dropdown-end hidden lg:block ">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <abbr title={user ? "Log out": "log in" }> <img src={cuisine} /> </abbr>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                           
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <div>
                                        {user && <span className='text-white'> {user.email} <button onClick={handlerSignOut} className='btn btn-warning '>Sign out</button> </span>}
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
};

export default Header;