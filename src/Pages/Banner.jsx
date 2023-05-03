import React, { useEffect, useState } from 'react';
import img1 from '../Images/ARTICLE-1.jpg'
import img2 from '../Images/banner-1.jpg'
import img3 from '../Images/ARTICLE-1.jpg'
import img4 from '../Images/img-4.jpg'
import { Link } from 'react-router-dom';
import ChefDetails from './ChefDetails/ChefDetails';
import Marquee from "react-fast-marquee";

const Banner = () => {

    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allChef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(err => console.error(err))


    }, [])
    return (
        <>

            <div>
                <img className='w-full' src={img1} alt="" />
            </div>

            <div className='container mx-auto px-6 mt-1 '>

                <div className='lg:-mt-[500px] -mt-8  text-center text-white '>
                    <h1 className='text-[48px] '>Indian Expert chef Recipes...</h1>
                    <p className='my-4'>Views 100k+ recipes</p>
                    <Link><button className='btn btn-warning'>View recipes </button></Link>

                </div>


                <div className='mt-96 text-[48px] text-center font-bold'>
                    <h1>Welcome...</h1>
                    <h2>Meet With our experts </h2>

                </div>



                <div className='grid grid-cols-3 gap-5'>

                    {
                        chefs.map(chef =>
                            <ChefDetails
                                key={chef.id}
                                chef={chef}


                            />
                        )
                    }
                </div>

            </div>
        </>

    );
};

export default Banner;