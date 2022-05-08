
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({ inventory }) => {

    const { _id, name, img, description, price, quantity, supplier } = inventory;

    const navigate = useNavigate();

    const handleUpdate = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='box rounded'>
            <Card style={{ width: '22rem' }}>
                <Card.Img width='400px' height='400px' variant="top" className='rounded' src={img} />
                <Card.Body>
                    <Card.Title className='text-uppercase fs-3 fw-3 text-center text-success' style={{ fontSize: '35px' }}>{name}</Card.Title>
                    <Card.Text className='text-center'>
                        {description}
                    </Card.Text>
                    <Card.Text className='text-center' style={{ fontSize: '20px' }}>
                        Price : <span className='text-danger '>${price}</span>
                    </Card.Text>
                    <Card.Text className='text-center'>
                        Quantity : {quantity}
                    </Card.Text>
                    <Card.Text className='text-center'>
                        Supplier: {supplier}
                    </Card.Text>
                    <div className='d-grid gap-2'>
                        <Button onClick={() => handleUpdate(_id)} size='lg' variant="success">Update</Button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Inventory;