import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://quiet-beyond-84134.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])


    const handleManageInventory = () => {
        navigate(`/inventory`)
    }
    return (
        <div className='conatiner my-5'>
            <h1 className='mt-3 mb-2 text-center text-uppercase text-success'>Our Inventories</h1>
            <hr style={{ width: '35%', margin: '0  auto' }} className='mb-4' />
            <div className='inventory-conatiner container'>
                {
                    inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }

            </div>
            <button type="button" onClick={() => handleManageInventory()} className="btn btn-outline-success p-2 d-block mx-auto py-3 fw-bold shadow px-5 mt-3 mb-5 rounded-pill">Manage Inventories</button>
        </div>
    );
};

export default Inventories;