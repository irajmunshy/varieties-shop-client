import React from 'react';

const PlaceOrder = (props) => {
    return (
        <div>
            <form action="" onClick={props.handleConfirm}>
                <input type="text" placeholder="Enter Your Name" required className="w-50 d-block mx-auto form-control"/><br />
                <input type="email" placeholder="Enter Your Email" required className="w-50 d-block mx-auto form-control"/><br />
                <input type="email" placeholder="Enter YourAddress" required className="w-50 d-block mx-auto form-control"/><br />
                <input type="num" placeholder="Enter Your Number" required className="w-50 d-block mx-auto form-control"/><br />
                <input type="submit" value="Conform Info" className="btn buy" name="" id=""/>
            </form>
        </div>
    );
};

export default PlaceOrder;