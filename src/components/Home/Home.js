import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';


const Home = () => {
    const [products, setProducts] = useState([]);

    const handleSearch = () => {
        const productItem = document.getElementById('productItem').value;
        setProducts([]);
        fetch(`https://intense-coast-96128.herokuapp.com/searchProducts/${productItem}`)
        .then(res => res.json())
        .then(data => {setProducts(data.slice(0, 12))})
    }

    useEffect(() => {
        fetch('https://intense-coast-96128.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 12)))
    }, [])

    return (
        <div>
            <Header />

            <div className="container mb-4">
                <div class="input-group w-50 mx-auto my-3 search-area">
                    <input type="text" class="form-control" placeholder="Search Products..." id="productsItem" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn buy" type="button" onClick={handleSearch} >Search</button>
                </div>

                {!products.length &&
                    <div class="spinner-border d-block my-4 mx-auto text-success" role="status">
                        <span class="visually-hidden"></span>
                    </div>
                }

                <div className="products pt-4">
                    {
                        products.map(product => <Products product={product}></Products>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;