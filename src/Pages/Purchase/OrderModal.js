import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const OrderModal = ({ order, setOrder }) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, name, available_quantity } = order;

    let intQuantity = parseInt(order.available_quantity)
    let minOrder = parseInt(order.min_order)

    const handleOrder = event => {
        event.preventDefault();

        const ordering = {
            orderId: _id,
            order: name,
            userEmail: user.email,
            userName: user.displayName,
            phone: event.target.phone.value,
            orderQuantity: event.target.quantity.value,
            address: event.target.address.value
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ordering)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast("YOUR ORDER IS CONFIRMED");

                }

                setOrder(null);
            });



    }
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>



                        <input type="text" name="toolName" disabled value={order.name} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="userName" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                        <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <textarea type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Confirm" className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default OrderModal;