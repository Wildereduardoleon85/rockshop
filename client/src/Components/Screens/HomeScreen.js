import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../Products/Products';
import { listProducts } from '../../actions/productActions';

const Home = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList
    
    useEffect(() => {
        dispatch(listProducts())
        // eslint-disable-next-line
    }, [dispatch])

    if(loading && products.length < 1){
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
