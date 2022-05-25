import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/orders?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data)
        }
        getOrders();
    }, [user])

    return (
        <div>
            orders:{orders.length}
        </div>
    );
};

export default MyOrders;