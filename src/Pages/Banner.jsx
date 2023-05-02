import React from 'react';
import img1 from '../Images/ARTICLE-1.jpg'
import img2 from '../Images/banner-1.jpg'
import img3 from '../Images/ARTICLE-1.jpg'
import img4 from '../Images/img-4.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='container mx-auto px-6 mt-1 '>
            <div className="carousel w-full rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>



            

            <div className='xl:-mt-[500px] text-center text-white '>
                <h1 className='text-[48px] '>Indian Expert chef Recipes...</h1> 
                <p className='my-4'>View 100+ recipes</p>
                <Link><button className='btn btn-warning'>View recipes </button></Link>

            </div>
        
        </div>
    );
};

export default Banner;