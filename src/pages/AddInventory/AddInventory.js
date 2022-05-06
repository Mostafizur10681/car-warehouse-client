import React from 'react';
import { useForm } from "react-hook-form";

const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };
    return (
        <div className='container mt-5 w-50 mx-auto'>
            <h2 className='text-center text-success text-uppercase'>Please Add a Inventory</h2>
            <form className='d-flex flex-column mt-3 mb-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description",)} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price",)} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Quantity' {...register("quantity", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Photo URL' type='text' {...register("img",)} />
                <input type="submit" value='Add Inventory' className='btn-success py-2 rounded' />
            </form>
        </div>
    );
};

export default AddInventory;