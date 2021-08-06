import React from 'react'

const SearchForm = () => {
    return (
        <div className="d-flex align-center ml-3 w-50">
            <input 
                type="search" 
                placeholder="Search for products..." 
                className="h-50p w-75p p-1"
            />
            <button className="h-50p btn-primary w-25p">
                <i className="fas fa-search mr-1"></i>Search
            </button>
        </div>
    )
}

export default SearchForm
