import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate()
    const inputRef = useRef('')
    const [productDetails, setProductDetail] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/inventory/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetail(data))

    }, [])

    const handleManageInventory = () => {
        navigate(`/inventory`)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        setShow(true)

    }

    const addQuantity = event => {
        event.preventDefault();
        // const value = event.target.restore.value;
        // console.log(value)
        const input = inputRef.current.value;
        fetch(`http://localhost:5000/inventory/increase/${productId}`, {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: input }),
        })
            .then(res => res.json())
            .then(data => {
                setProductDetail({ ...productDetails, quantity: parseInt(productDetails.quantity) + parseInt(input) })
            })
    }

    const handleReStore = event => {
        event.preventDefault();
        const reStore = event.target.reStore.value;
        console.log(reStore)
    }

    const handleDelivered = () => {
        fetch(`http://localhost:5000/inventory/decrease/${productId}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                setProductDetail({ ...productDetails, quantity: productDetails.quantity - 1 })
            })
    }
    return (
        <div className='container mx-auto w-50 my-5'>
            <div className="card mb-3" style={{ maxWidth: '700px' }}>
                <div className="row no-gutters">
                    <div className="col-md-6 col-lg-5">
                        <img src={productDetails.img} height='100%' className="card-img" alt="..." />
                    </div>
                    <div className="col-md-6 col-lg-7">
                        <div className="card-body">
                            <h3 className="card-title text-success">{productDetails.name}</h3>
                            <p className="card-text"><small>{productDetails.description}</small></p>
                            <h6 className="card-text fs-6">Price: <span className='text-danger'>${productDetails.price}</span></h6>
                            <p className="card-text">Quantity: {productDetails.quantity}</p>
                            <p className="card-text">Supplier: {productDetails.supplier}</p>
                            <button type="button" onClick={handleDelivered} className="btn btn-success my-3">Delivered</button>
                            <button onClick={handleShow} type="button" className="btn btn-danger ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Re-Stock
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Re-Store Inventory Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>{productDetails.name}</Modal.Body>
                <Modal.Footer>
                    <form className='mx-auto' onSubmit={handleReStore}>
                        <div className="input-group  mb-3">
                            <input type="text" ref={inputRef} name='restore' className="form-control" placeholder="Enter Quantity" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button onClick={addQuantity} className="btn btn-outline-success" type="submit" id="button-addon2">Add</button>
                        </div>
                    </form>
                    {/* <Button variant="success" className='mb-2' onClick={handleClose}>
                        Add
                    </Button> */}
                </Modal.Footer>
            </Modal>
            <button type="button" onClick={() => handleManageInventory()} className="btn btn-outline-success p-2 d-block mx-auto py-3 fw-bold shadow px-5 mt-3 mb-5 rounded-pill">Manage Inventories</button>
        </div>
    );
};

export default InventoryDetails;