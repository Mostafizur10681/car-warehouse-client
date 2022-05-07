import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Services.css'

const Services = () => {
    return (
        < div className='mb-5' >
            <h1 className='mt-3 mb-2 text-center text-uppercase text-success'>Our Inventories Packages</h1>
            <hr style={{ width: '35%', margin: '0  auto' }} className='mb-4' />
            <div className="wrapper">
                <input type="radio" name="slider" id="tab-1" />
                <input type="radio" name="slider" id="tab-2" checked />
                <input type="radio" name="slider" id="tab-3" />
                <header>
                    <label for="tab-1" className="tab-1">Basic</label>
                    <label for="tab-2" className="tab-2">Standard</label>
                    <label for="tab-3" className="tab-3">Premium</label>
                    <div className="slider"></div>
                </header>
                <div className="card-area">
                    <div className="cards">
                        <div className="row row-1">
                            <div className="price-details">
                                <span className="price">19</span>
                                <p>For beginner use</p>
                            </div>
                            <ul className="features ms-3">
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>100 GB Premium Bandwidth</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>FREE 50+ Installation Scripts WordPress Supported</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>One FREE Domain Registration .com and .np extensions only</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Unlimited Email Accounts & Databases</span></li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="price-details">
                                <span className="price">99</span>
                                <p>For professional use</p>
                            </div>
                            <ul className="features ms-3">
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Unlimited GB Premium Bandwidth</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>FREE 200+ Installation Scripts WordPress Supported</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Five FREE Domain Registration .com and .np extensions only</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Unlimited Email Accounts & Databases</span></li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="price-details">
                                <span className="price">49</span>
                                <p>For team collaboration</p>
                            </div>
                            <ul className="features ms-5">
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>200 GB Premium Bandwidth</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>FREE 100+ Installation Scripts WordPress Supported</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Two FREE Domain Registration .com and .np extensions only</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Unlimited Email Accounts & Databases</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button>Choose plan</button>
            </div>
        </div >
    );
};

export default Services;