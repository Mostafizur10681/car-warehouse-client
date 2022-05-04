
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({ inventory }) => {

    const { id, name, img, description, price, quantity, supplier } = inventory;

    const navigate = useNavigate();
    const handleUpdate = productId => {
        navigate(`/inventory/${productId}`)
    }
    return (
        <div className='box rounded'>
            <Card style={{ width: '22rem' }}>
                <Card.Img width='400px' height='500px' variant="top" className='rounded' src={img} />
                <Card.Body>
                    <Card.Title className='text-uppercase text-center text-success' style={{ fontSize: '35px' }}>{name}</Card.Title>
                    <Card.Text className='text-center'>
                        {description}
                    </Card.Text>
                    <Card.Text className='text-center'>
                        Price : {price}
                    </Card.Text>
                    <Card.Text className='text-center'>
                        Quantity : {quantity}
                    </Card.Text>
                    <Card.Text className='text-center'>
                        Supplier Name : {supplier}
                    </Card.Text>
                    <div className='d-grid gap-2'>
                        <Button onClick={() => handleUpdate(id)} size='lg' variant="success">Update</Button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Inventory;