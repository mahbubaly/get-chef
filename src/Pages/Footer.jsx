import React from 'react';

const Footer = () => {
    return (
        <>

            <div className='header bg-gray-900'>
                <div className='container mx-auto '>

                    <footer className="footer  lg:p-24 p-6 text-white mt-24 ">
                        <div>

                            <p className='leading-loose'>Be the first to find out about exclusive <br />
                                deals, the latest Lookbooks trends. <br />
                                We're on a mission to build a better <br />
                                future where technology.
                            </p>
                        </div>
                        <div>
                            <span className="text-white text-lg">Quick Links</span>
                            <a className="footer-text ">Home</a>
                            <a className="link link-hover">About Us</a>
                            <a className="link link-hover">Services</a>

                        </div>
                        <div>
                            <span className="text-white text-lg">Social Media</span>
                            <a className="footer-text ">Facbook</a>
                            <a className="link link-hover">Instagram</a>
                            <a className="link link-hover">LinkedIn</a>
                            <a className="link link-hover">Twitter</a>

                        </div>
                        <div>
                            <span className="text-white text-lg">Banking Info</span>
                            <a className="footer-text ">Select</a>
                            <a className="link link-hover">Service</a>
                            <a className="link link-hover">Payment</a>

                        </div>
                        <div>
                            <span className="text-white text-lg ">Contact Us</span>
                            <p cl>88B Rte de Saint-Leu <br /> 93430 Villetaneuse. <br />+33 758 915 351</p>

                        </div>




                    </footer>

                    <hr />



                    <footer className="  p-4 ">
                        <div className='lg:flex justify-between lg:text-left text-center pt-5 '>
                            <p>Copyright@ All rights reserved  by Mahbubur Rahman</p>
                            <div className='flex lg:gap-[46px] gap-0 lg:justify-start justify-center text-center'>
                                <p>Privacy</p>
                                <p>Security</p>
                                <p>Terms</p>
                            </div>
                        </div>
                    </footer>


                </div>


            </div>

        </>
    );
};

export default Footer;