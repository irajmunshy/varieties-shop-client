import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const OrdersDetail = (props) => {
    const {_id, image, name, price, time, wight, quantity} = props.product;

    const handleDelete = (id) => {
        fetch(`https://intense-coast-96128.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                // product.style.display = 'none';
                console.log('product deleted!');
            }
        });
    }

    return (
            <div className="product-info">
                <div>
                    <img style={{width: "150px"}} src={image} alt=""/>
                </div>

                <div>
                    <p><span>Product Name:</span> {name}</p>
                    <p><span>Price:</span> ${price}</p>
                    <p><span>Quantity:</span> {quantity}</p>
                </div>

                <div>
                    <p><span>Order Date:</span> {time}</p>
                    <p><span>Close Item: </span><FontAwesomeIcon onClick={() => handleDelete(_id)} icon={faWindowClose} /></p>
                </div>
            </div>
    );
};

export default OrdersDetail;