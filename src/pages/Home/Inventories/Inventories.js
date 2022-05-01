import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div className='conatiner my-5'>
            <h1 className='mt-3 mb-2 text-center text-uppercase text-success'>Our Inventories</h1>
            <hr style={{ width: '35%', margin: '0  auto' }} className='mb-4' />
            <div className='inventory-conatiner container'>
                {
                    inventories.map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;