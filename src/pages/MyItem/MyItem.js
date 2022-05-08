import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {

    const [user] = useAuthState(auth);
    const [items, setItems] = useState([])

    useEffect(() => {
        // const email = user.email;
        // const url = `http://localhost:5000/inventory?email=${email}`;
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setItems(data))

        const getNewInventory = async () => {
            const email = user.email;
            const url = `http://localhost:5000/inventory?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data)
        }
        getNewInventory()

    }, [user])
    return (
        <div>
            <h1>my items : {items.length}</h1>
        </div>
    );
};

export default MyItem;