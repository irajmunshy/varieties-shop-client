import React from 'react';
import './Products.css';
import { useHistory } from 'react-router';

const Products = (props) => {
    const {_id, name, price, image, wight} = props.product;

    const history = useHistory();
    const handleProductAdd = (_id) => {
        history.push(`/product/${_id}`);
    }

    return (
        <div className="product">
            <img src={image} alt=""/>
            <h5 className="p-2">{name} - {wight}</h5>
            <div className="d-flex justify-content-between">
                <h3 className="price">${price}</h3>
                <button onClick={() => handleProductAdd(_id)} className="buy">Buy Now</button>
            </div>
        </div>
    );
};

export default Products;