import React from 'react';
import productos from '../../data/productos';
import Products from '../Products/Products';

const Home = () => {
    return (
        <section className="products">
            {productos.map(product=>(
                <Products key={product._id} product={product}/>
            ))}
        </section>
    )
}

export default Home
