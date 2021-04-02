import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios');

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const [addProduct, setAddProduct] = useState('');

    const onSubmit = (data) => {
        const {name, price, wight} = data;
        const productData = {
            name: name,
            image: imageUrl,
            price: price,
            wight: wight
        }

        fetch('https://intense-coast-96128.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => setAddProduct("Product Added Successfully!"))
        
        document.getElementById('name').value = '';
        document.getElementById('price').value = '';
        document.getElementById('wight').value = '';
        document.getElementById('image').value = '';
    }

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '3c15a825f4e4ac0d0971a4c8ee8ae8b2');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
            imageData)
          .then((response) => {
            setImageUrl(response.data.data.display_url);
            console.log(response.data.data.display_url)
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return (
        <div>
            <h4>Add Product</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="addProduct pb-5 d-flex justify-content-between">
                    <div className="left-input">
                        <div>
                            <label htmlFor="">Product Name</label>
                            <input name="name" type="text" ref={register} id="name" className="w-100 mt-2 text form-control" placeholder="Enter Name"/>
                        </div>

                        <div className="pt-3">
                            <label htmlFor="">Add Price</label>
                            <input name="price" type="text" ref={register} id="price" className="w-100 mt-2 text form-control" placeholder="Enter Price"/>
                        </div>
                    </div>

                    <div className="left-input">
                        <div>
                            <label htmlFor="">Wight</label>
                            <input name="wight" type="text" ref={register} id="wight" className="w-100 mt-2 text form-control" placeholder="Enter Wight"/>
                        </div>

                        <div className="pt-3">
                            <label htmlFor="">Add Photo</label><br />
                            <input type="file" className="mt-2 form-control text" id="image" onChange={handleImageUpload} />
                        </div>
                    </div>
                </div>
        
                <input type="submit" className="mt-3 submit" value="Save"/>
            </form>

            <div className="text-center text-success py-3">
                {addProduct && 
                    <p>{addProduct}</p>
                }
            </div>
        </div>
    );
};

export default AddProduct;