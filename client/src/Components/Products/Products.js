import React from 'react';
import productos from '../../data/productos';
import ProductItem from './ProductItem/ProductItem';

const Products = () => {
    return (
        <section className="products">
            {productos.map(product=>(
                <ProductItem product={product}/>
            ))}
        </section>
    )
}

export default Products
