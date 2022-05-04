import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const Navigate = useNavigate()
    const [productDetails, setProductDetail] = useState({});

    useEffect(() => {
        fetch(`/inventory/${inventoryId}`)
            .then(res => res.json())
            .then(data => setProductDetail(data))
    }, [])


    return (
        <div>
            <h1>This is private route : {inventoryId}</h1>
            <p>description: { }</p>
        </div>
    );
};

export default InventoryDetails;