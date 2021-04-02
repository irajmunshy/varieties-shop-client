import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import ProductUpdate from '../ProductUpdate/ProductUpdate';


const Deals = () => {
    const [toggle, setToggle] = useState('');
    const [productId, setProductId] = useState(null);
 
    const handleToggle = (value) => {
        value === 'add' ? setToggle('add') : value === 'edit' ? setToggle('edit') : setToggle('manage')
    }

    const handleProductUpdate = (id) => {
        setToggle('update');
        setProductId(id);
    }


    return (
        <div className="row main-components">
            <div className="w-25 sideBar">
                <Link className="navbar-brand" to="/home">
                    <h3>VARIETIES SHOP</h3>
                </Link>

                <div id="btnDiv">
                    <p class="Btn active" onClick={() => handleToggle("manage")}><FontAwesomeIcon icon={faThLarge} />Manage Product</p>
                    <p class="Btn active" onClick={() => handleToggle("add")}><FontAwesomeIcon icon={faPlus} />Add Product</p>
                    <p class="Btn active" onClick={() => handleToggle("edit")}><FontAwesomeIcon icon={faEdit} />Edit Product</p>
                </div>
            </div>

            <div className="w-75 main-content">
                {   
                    toggle === 'manage' ? <ManageProduct handleProductUpdate={handleProductUpdate} /> : 
                    toggle === 'edit' ? <ProductUpdate /> : 
                    toggle === 'update' ? <ProductUpdate productId={productId} /> :<AddProduct />
                }
            </div>
        </div>
    );
};

export default Deals;