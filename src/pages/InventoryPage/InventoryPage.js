import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryPage.css'

const InventoryPage = () => {
    const [cars, setCars] = useState([])

    const navigate = useNavigate();

    const handleUpdate = productId => {
        navigate(`/inventory/${productId}`)
    }
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className='container my-5'>

            <h2 className='text-center text-secondary mb-3 text-uppercase text-success'>Inventory Statement</h2>
            <hr style={{ width: '35%', margin: '0  auto' }} className='mb-4' />
            <table className=''>

                <thead>

                    <tr className='bg-custom text-light'>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Quantity</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        cars.map(car =>
                            <tr>
                                <td data-label="Name">{car.name}</td>
                                <td data-label="Price(per kg)">{car.price}</td>
                                <td data-label="Supplier">{car.supplier}</td>
                                <td data-label="Quantity">{car.quantity}</td>
                                <td>
                                    <button onClick={() => handleUpdate(car.id)} className=' text-dark btn fs-6 border-3 border-success rounded-pill me-1'><FontAwesomeIcon className='fs-6 text-success me-1' style={{ cursor: "pointer" }} icon={faPenToSquare}></FontAwesomeIcon><span >Update</span></button>
                                    <button className=' text-dark btn fs-6 border-3 border-danger rounded-pill'><FontAwesomeIcon className=' fs-6 text-danger ' style={{ cursor: "pointer" }} icon={faTrash}></FontAwesomeIcon><span>Delete</span></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>


        </div>
    );
};

export default InventoryPage;