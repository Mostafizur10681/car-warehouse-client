import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    return (
        <div>
            <h1>This is private route : {inventoryId}</h1>
            <p>description: { }</p>
        </div>
    );
};

export default InventoryDetails;