import React from 'react';
import { Link } from 'react-router-dom';
import { ImLocation } from 'react-icons/im';

const ChefDetails = ({ chef }) => {
    console.log(chef);
    const { id, name, image, age, experience, recipes } = chef
    return (
        <>

            <Link>

                <div className="card lg:w-96 lg:h-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className='p-6'>
                        <h1 className='text-xl font-semibold'>Name: {name}</h1>

                        <h2 className='mt-2'>Nationality: Indian</h2>
                        <p className='my-2'><ImLocation className='inline mr-2 ' /> location: India</p>
                        <div className='lg:flex justify-between items-center'>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" />
                            </div>




                            <Link to={`/chef/${id}`}><button className='btn  bg-[#222224] text-white'>View Details</button></Link>
                        </div>
                    </div>
                </div>





            </Link>

        </>
    );
};

export default ChefDetails;