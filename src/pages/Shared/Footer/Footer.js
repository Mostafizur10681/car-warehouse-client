import React, { useEffect, useState } from 'react';
import { } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import facebook from '../../../images/facebook.png'
import whatsapp from '../../../images/whatsapp.png'
import instagram from '../../../images/instgram.jpg'
import linkdin from '../../../images/linkdin.png'
import github from '../../../images/github.png'
import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'
import './Footer.css'

const Footer = () => {
    const [date, setDate] = useState();
    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])
    return (
        <div>
            <footer className="text-center text-lg-start pt-3 bg-dark text-muted">
                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4 text-white">
                                    Car WareHouse
                                </h6>
                                <p className='text-white'>
                                    All kind of car are available. We are import brand new car from many countries
                                </p>
                                <div>
                                    <Link to='/facebook'><img src={facebook} className='me-3' style={{ width: '26px', height: '26px' }} alt="" srcset="" /></Link>
                                    <Link to='/whatsapp'><img src={whatsapp} className='me-3' style={{ width: '26px', height: '26px' }} alt="" srcset="" /></Link>
                                    <Link to='/instagram'><img src={instagram} className='me-3' style={{ width: '26px', height: '26px' }} alt="" srcset="" /></Link>
                                    <Link to='/linkdin'><img src={linkdin} className='me-3' style={{ width: '26px', height: '26px' }} alt="" srcset="" /></Link>
                                    <Link to='/github'><img src={github} className='me-3' style={{ width: '26px', height: '26px' }} alt="" srcset="" /></Link>


                                </div>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase text-white fw-bold mb-3">
                                    Products
                                </h6>
                                <p>
                                    <Link to='/blogs' className=" text-white text-decoration-none hover-link">Blogs</Link>
                                </p>
                                <p>
                                    <Link to='/shop' className=" text-white text-decoration-none hover-link">Shop</Link>
                                </p>
                                <p>
                                    <Link to='/inventory' className=" text-white text-decoration-none hover-link">Inventory</Link>
                                </p>
                                <p>
                                    <Link to='/TermsCondition' className=" text-white text-decoration-none hover-link">Terms & Condition</Link>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase text-white fw-bold mb-3">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to='/pricing' className='text-white text-decoration-none'>Pricing</Link>
                                </p>
                                <p>
                                    <a href="#!" className="text-white text-decoration-none">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white text-decoration-none">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white text-decoration-none">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4 text-white">
                                    Contact US
                                </h6>
                                <p className='text-white'> <LocationMarkerIcon style={{ width: '16px', height: '16px', color: 'green' }} className='me-2'></LocationMarkerIcon>
                                    Ring Road, Shayamoli, Dhaka</p>
                                <p className='text-white'>
                                    <MailIcon style={{ width: '16px', height: '16px' }} className='me-2'></MailIcon>
                                    mostafizur15-10681@diu.edu.bd
                                </p>
                                <p className='text-white'>
                                    <PhoneIcon style={{ width: '16px', height: '16px', color: 'green' }} className='me-2'></PhoneIcon>
                                    +880-1644823123</p>
                                <p className='text-white'>
                                    <PhoneIcon style={{ width: '16px', height: '16px' }} className='me-2'></PhoneIcon>
                                    +880-1879198066</p>
                            </div>

                        </div>

                    </div>
                </section>

                <div className="text-center text-white p-4">
                    &copy; Bike WareHouse - {date}
                </div>

            </footer>

        </div>
    );
};

export default Footer;