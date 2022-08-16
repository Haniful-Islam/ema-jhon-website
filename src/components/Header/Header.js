import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <ul className='munu-item' >
                        <li><a href="/">Home</a></li>
                        <li><a href="/#">order</a></li>
                        <li><a href="/#">order review</a></li>
                        <li><a href="/#">manage inventory</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;