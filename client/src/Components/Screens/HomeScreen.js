import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line
    }, [])

    const getProducts = async() => {
        const {data} = await axios.get('/api/v1/products');
        setProducts(data);
    }
    
    if(products === null){
        return <h1>Loading...</h1>
    }else{
        return (
            <section className="products">
                {products.map(product=>(
                    <Products key={product._id} product={product}/>
                ))}
            </section>
        )
    }  
}

export default Home
