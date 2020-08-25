import React from 'react';
import logo from '../../images/logo.png'
import './header.css';

const Header = () => {
    return (
        <div className = 'header'>
            <img className = 'logo' src={logo} alt=""/>
            <nav>
                <li>
                    <a href="/shop">Shop</a>
                    <a href="/product">Product</a>
                    <a href="/pricing">Pricing</a>
                </li>
            </nav>
        </div>
    );
};

export default Header;