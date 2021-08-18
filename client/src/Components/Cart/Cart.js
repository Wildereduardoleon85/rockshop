import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions'; 
import {formatter} from '../../helpers/helpers';

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

    const removeFromCart = () => {
        console.log('remove')
    }

    return (
        <div className="cart card">
            <h1>Carrito 
                <span> ({cartItems.reduce((acc, item)=> acc + item.qty, 0)} Productos)</span>
            </h1>
            {cartItems.map(item=>(
                <div key={item.product}>
                    <div>
                        <img src={`/img/${item.imagen}`} alt={item.nombre} />
                    </div>
                    <Link to={`/product/${item.product}`}><p>{item.nombre}</p></Link>
                    <p>$ {formatter(item.precio)}</p>
                    <div>
                        <div className="input-select">
                            <select 
                                value={item.qty} 
                                onChange={(e)=> dispatch(addToCart(item.product, Number(e.target.value)))}
                            >
                                {[...Array(item.enStock).keys()].map(x=> (
                                    <option key={x+1} vlaue={x+1}>{x+1}</option>
                                ))}
                            </select>
                            <i onClick={ () => removeFromCart(item.product) } className="fas fa-caret-down"></i>
                        </div>
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart
