import React from 'react';
import SearchForm from './SearchForm';

const Navbar = () => {
    return (
        <nav className="bg-dark px-8 flex-row">
            <div className="flex-row align-center max-width-fit p-1 logo-div">
                <div className="logo">
                    <img src="./img/logo.png" alt="Logo" />
                </div>
                <p className="text-light ml-1 font-size-24">Rock Shop</p>
            </div>

            <SearchForm/>            

            <ul className="flex-row align-center ml-auto">
                <li className="ml-2" >
                    <a href="#!"><i className="fas fa-shopping-cart mr-1"></i>Cart</a>
                </li>
                <li className="ml-2" >
                    <a href="#!"><i className="fas fa-user mr-1"></i>Log In</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
