import React from 'react';

const Cart = (props) => {
    let cart = props.cart;
    const total = cart.reduce( (total, prd) => total + prd.price, 0);
    let shipping = 0;
    if(total > 0){
        shipping = 4;
    }
    else if(total > 30){
        shipping = 2;
    }
    else if(total > 50){
        shipping = 0;
    }
    const tax = total/10;
    const totalPrice = shipping + total + tax;
    return (
        <div>
            <h5>Order summery</h5>
            <p>Items ordered: {cart.length} </p>
            <p>Shipping: {shipping}</p>
            <p>items Price : {total} </p>
            <p>Vat and tax: {total}</p>
            <p>Total Price :  {totalPrice} </p>
        </div>
    );
};

export default Cart;