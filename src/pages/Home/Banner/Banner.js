
import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner.png'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.png'
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='mb-5'>
                    <h1 className='text-uppercase '>Brand New Car</h1>
                    <p style={{ fontSize: '24px' }}>Visit our Warehouse and buy it Quickly</p>
                    <Button variant="btn btn-success mb-1">Learn More</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='mb-5'>
                    <h1 className='text-uppercase '>Raceing Car</h1>
                    <p style={{ fontSize: '24px' }}>Top speed car, Increase speed and enjoy this.</p>
                    <Button variant="btn btn-success mb-1">Learn More</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className='mb-5'>
                    <h1 className='text-uppercase'>Comfortable and Cheap Price Car</h1>
                    <p style={{ fontSize: '24px' }}>
                        Super car with chep cost.
                    </p>
                    <Button variant="btn btn-success mb-1">Learn More</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;