import React, { useContext, useEffect, useState } from 'react';
import './CheckOut.css';
import Header from '../Header/Header';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const {name, price} = product;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const time = new Date();
    let quantity = 1;

    useEffect(() => {
        fetch(`https://intense-coast-96128.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    
    const handleCheckOut = () => {
        const newOrders = {time: time.toString(), quantity: quantity.toString(), ...product, ...loggedInUser};
       
        fetch('https://intense-coast-96128.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newOrders)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <Header />

            <div className="container">
                <h3>CheckOut</h3>
                <div className="mt-3 checkOut">
                    <div className="d-flex top-area">
                        <span className="w-50">Description</span>
                        <span className="w-25">Quantity</span>
                        <span className="w-25">Price</span>
                    </div>

                    <div className="py-2 d-flex">
                        <span className="w-50">{name}</span>
                        <span className="w-25">1</span>
                        <span className="w-25">${price}</span>
                    </div>

                    <div className="d-flex bottom-area">
                        <span className="w-75">Total</span>
                        <span className="w-25">${price}</span>
                    </div>
                </div>
                <Link className="checkBtn" to="/orders" onClick={handleCheckOut}>Checkout</Link>
            </div>
        </div>
    );
};

export default CheckOut;