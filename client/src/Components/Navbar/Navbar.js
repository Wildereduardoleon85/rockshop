import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import './navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <div>
                    <img src="./img/logo.png" alt="Logo" />
                </div>
                <p>Rock Shop</p>
            </div>
            <SearchForm/>            
            <ul>
                <li>
                    <a href="#!"><i className="fas fa-shopping-cart"></i>Carrito</a>
                </li>
                <li>
                    <a href="#!"><i className="fas fa-user"></i>Iniciar Sesión</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
