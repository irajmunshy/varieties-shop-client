import React from 'react';
import { Link } from 'react-router-dom';

const GoBack = () => {
    return (
        <div className="mt-5">
            <h1 className="py-3">Please CheckOut Product</h1>
            <Link to="/home" className="buy">Choice Product</Link>
        </div>
    );
};

export default GoBack;