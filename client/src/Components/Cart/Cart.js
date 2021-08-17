import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions'; 

const Cart = ({match, location, history}) => {

    const productId = match.params.id
    const qty = location.search ? parseInt(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart 

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [productId, qty, dispatch])

    return (
        <div>
            <h1>CART</h1>
        </div>
    )
}

export default Cart
