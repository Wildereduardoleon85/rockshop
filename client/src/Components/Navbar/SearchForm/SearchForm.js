import React from 'react';
import './searchForm.scss';

const SearchForm = () => {
    return (
        <div className="search-form">
            <input 
                type="search" 
                placeholder="Buscar Productos..." 
                className="h-50p w-75p p-1"
            />
            <button className="btn-primary">
                <i className="fas fa-search"></i>Buscar
            </button>
        </div>
    )
}

export default SearchForm
