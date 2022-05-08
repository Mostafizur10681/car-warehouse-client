import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const AddInventory = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    console.log(user.email)
    const onSubmit = data => {
        console.log(data)
        const url = `https://quiet-beyond-84134.herokuapp.com/inventory`;
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
        toast('Your New Inventory Item is Added')
    };
    return (
        <div className='container mt-5 w-50 mx-auto'>
            <h2 className='text-center text-success text-uppercase'>Please Add a Inventory</h2>
            <form className='d-flex flex-column mt-3 mb-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 border p-2 rounded' type='text' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2 border p-2 rounded' placeholder="Email" defaultValue={user.email} type="email" {...register("email", { required: true })} />
                <textarea className='mb-2 border' placeholder='Description' {...register("description",)} />
                <input className='mb-2 border' placeholder='Price' type="number" {...register("price",)} />
                <input className='mb-2 border' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                <input className='mb-2 border' placeholder='Quantity' {...register("quantity", { required: true, maxLength: 20 })} />
                <input className='mb-2 border' placeholder='Photo URL' type='text' {...register("img",)} />
                <input type="submit" value='Add Inventory' className='btn-success py-2 text-center rounded' />
                <ToastContainer></ToastContainer>
            </form>
        </div>
    );
};

export default AddInventory;