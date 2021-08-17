import React from 'react';
import {Link} from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import './navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <div>
                    <img src="/img/logo.png" alt="Logo" />
                </div>
                <p>Rock Shop</p>
            </div>
            <SearchForm/>            
            <ul>
                <li>
                    <Link to="/"><i className="fas fa-shopping-cart"></i>Carrito</Link>
                </li>
                <li>
                    <Link to="#!"><i className="fas fa-user"></i>Iniciar Sesión</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
