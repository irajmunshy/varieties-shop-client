import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const ManageProduct = (props) => {
    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('https://intense-coast-96128.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleProductDelete = (product, id) => {
        history.push('/');
        fetch(`https://intense-coast-96128.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                console.log('product deleted!');
            }
        });
    }

    return (
        <div >
            <h4>Manage Product</h4>
            <div className="manageProduct">
                <div className="products-container">
                    <div className="tableHead">
                        <div className="one">Product Name</div>
                        <div className="two">Wight</div>
                        <div className="three">Price</div>
                        <div className="four" id="Four">Action</div>
                    </div>

                    <div className="products-details">
                        {   
                            products.map(product => 
                                <div className="tableBody">
                                    <div className="one">{product.name}</div>
                                    <div className="two">{product.wight}</div>
                                    <div className="three">${product.price}</div>
                                    <div className="four icon">
                                        <div>
                                            <FontAwesomeIcon onClick={() => props.handleProductUpdate(product._id)} icon={faEdit} />
                                        </div>
                        
                                        <div>
                                            <FontAwesomeIcon onClick={() => handleProductDelete(product, product._id)} icon={faTrashAlt} />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;