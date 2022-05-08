import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './InventoryPage.css'

const InventoryPage = () => {
    const [cars, setCars] = useState([])

    const navigate = useNavigate();

    const handleUpdate = productId => {
        navigate(`/inventory/${productId}`)
    }
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure yo want to delete?')
        if (proceed) {
            console.log('delete item', id)
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remaining = cars.filter(car => car._id !== id);
                        setCars(remaining)
                    }
                })
        }
    }

    const handleAddItem = () => {
        navigate('/addItem')
    }
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
                                    <button onClick={() => handleUpdate(car._id)} className=' text-dark btn fs-6 border-3 border-success rounded-pill '><FontAwesomeIcon className='fs-6 text-success me-0' style={{ cursor: "pointer" }} icon={faPenToSquare}></FontAwesomeIcon><span >Update</span></button>
                                    <button onClick={() => handleDelete(car._id)} className=' text-dark btn fs-6 border-3 border-danger rounded-pill'><FontAwesomeIcon className=' fs-6 text-danger ' style={{ cursor: "pointer" }} icon={faTrash}></FontAwesomeIcon><span>Delete</span></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>

            <Button onClick={() => handleAddItem()} variant="outline-success mx-auto d-block mt-4 mb-5">Add New Item</Button>
        </div>
    );
};

export default InventoryPage;