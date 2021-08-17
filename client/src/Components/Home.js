import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from './Products/Products';
import { listProducts } from '../redux/actions/productActions';
import Loader from './layout/Loader/Loader';

const Home = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const {loading, products} = productList
    
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    if(loading || products.length < 1){
        return <Loader/>
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
