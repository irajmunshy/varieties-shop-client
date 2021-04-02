import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import OrdersDetail from '../OrdersDetail/OrdersDetail';
import './Orders.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import GoBack from '../GoBack/GoBack';

const Orders = () => {
    const [placeOrder, setPlaceOrder] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [orderProducts, setOrderProducts] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {photo, userName, email} = loggedInUser;
    let totalCost = orderProducts.reduce((totalCost, product) => totalCost + parseInt(product.price), 0);
    const tax = totalCost * .1;

    useEffect(() => {
        fetch('https://intense-coast-96128.herokuapp.com/orders?email=' + email, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrderProducts(data))
    }, [email])

    const handlePlaceOrder = () => {
        setPlaceOrder(true);
    }

    const handleConfirm = () => {
        setConfirm(true);

        fetch('https://intense-coast-96128.herokuapp.com/deleteOrders', {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div className="orders-container">
            <Header />

            <div className="container">
                {confirm ?
                    <div className="mt-5">
                        <h1>Congratulations</h1>
                        <h3>Your Order SuccessFully</h3>    
                    </div>
                    :
                    <div className="row">
                        <div className="col-md-4">
                            <h5>My Profile</h5>
                            <div className="user-info">
                                <img src={photo} alt=""/>
                                <h3 className="py-2">{userName}</h3>

                                <div className="text-left">
                                    <p>Total Products: {orderProducts.length}</p>
                                    <p>Tax 10%: ${tax.toFixed(2)}</p>
                                    <p>Total Price: ${totalCost + tax}</p>
                                    <button onClick={handlePlaceOrder} className="btn buy">Place To Order</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 ">
                            <h5>{placeOrder && orderProducts.length ? 'Place Order' :'Item Cart'}</h5>
                            <div className="all-products">
                                {(placeOrder && orderProducts.length) ?
                                    <PlaceOrder handleConfirm={handleConfirm}></PlaceOrder>
                                    :
                                    !orderProducts.length ?
                                                    <GoBack />
                                                    :
                                                    orderProducts.map(product => <OrdersDetail product={product}></OrdersDetail>)
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Orders;