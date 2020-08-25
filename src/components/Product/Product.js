import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className = 'products'>
            <div>
                <img src= {img} alt=""/>
            </div>
            <div className = 'product'>
                <h4>{name}</h4>
                <p><small>by: </small> {seller}</p>
                <p> ${price} </p>
                <p>only {stock} left in stock - order soon </p>
                <button onClick = { () => props.handleAddProduct(props.product)} ><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
        
    );
};

export default Product;