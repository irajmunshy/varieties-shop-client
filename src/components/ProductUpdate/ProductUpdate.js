import React, { useState } from 'react';
const axios = require('axios');

const ProductUpdate = (props) => {
    const id = props.productId;
    const [image, setImage] = useState(null);

    const handleUpdate = () => {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const wight = document.getElementById('wight').value;

        const productData = {
            name: name,
            image: image,
            price: price,
            wight: wight
        }
        
        fetch(`https://intense-coast-96128.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(productData) 
        })
        .then(res => res.json())
        .then(data => console.log('updated'))
    }

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '3c15a825f4e4ac0d0971a4c8ee8ae8b2');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
            imageData)
          .then((response) => {
            setImage(response.data.data.display_url);
            console.log(response.data.data.display_url)
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return (
        <div>
            <h4>Edit Product</h4>
            <div className="updateProduct">
                    <div className="py-5 d-flex justify-content-between">
                        <div className="left-input">
                            <div>
                                <label htmlFor="">Update Product Name</label>
                                <input name="name" type="text" id="name" className="w-100 mt-2 text form-control" placeholder="Enter New Name"/>
                            </div>

                            <div className="pt-3">
                                <label htmlFor="">Update Price</label>
                                <input name="price" type="text" id="price" className="w-100 mt-2 text form-control" placeholder="Enter New Price"/>
                            </div>
                        </div>

                        <div className="left-input">
                            <div>
                                <label htmlFor="">Update Wight</label>
                                <input name="wight" type="text" id="wight" className="w-100 mt-2 text form-control" placeholder="Enter New Wight"/>
                            </div>

                            <div className="pt-3">
                                <label htmlFor="">Update Photo</label><br />
                                <input type="file" id="image" className="mt-2 form-control text" onChange={handleImageUpload} />
                            </div>
                        </div>
                    </div>
            
                    <input type="submit" onClick={handleUpdate} className="mb-4 submit" value="Update"/>
            </div>
            <h3 className="text-center py-3">Update Coming Soon...</h3>
        </div>
    );
};

export default ProductUpdate;