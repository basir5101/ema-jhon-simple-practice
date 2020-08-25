import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        console.log('Product', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className = 'shop-container'>
            <div className = 'product'>
                <ul>
                    {
                        products.map(pd => <Product 
                        handleAddProduct = {handleAddProduct}
                        product = {pd}>
                        </Product>)
                    }
                </ul>
            </div>
            <div className = 'cart'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;