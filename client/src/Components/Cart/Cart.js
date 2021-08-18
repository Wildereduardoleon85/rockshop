import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'; 
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

    const removeFromCartHandler = (e) => {
        dispatch(removeFromCart(e.target.id))
    }

    const checkOutHandler = () => {
        history.push('login?redirect=shipping')
    }

    return (
        <div className="cart card">
            <h1>Carrito 
                <span> ({cartItems.reduce((acc, item)=> acc + item.qty, 0)} Productos)</span>
            </h1>
            <div className="cart-container">
                <div className="cart-left">
                    {cartItems.length === 0 ? (
                        <div>
                            <h1>Tu Carro está vacío...</h1>
                            <div className="empty-cart">
                                <img src="/img/carroVacio.png" alt="Carro Vacío" />
                            </div>
                        </div>
                        ) : 
                    cartItems.map(item=>(
                        <div className="cart-item" key={item.product}>
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
                                    <i className="fas fa-caret-down"></i>
                                </div>
                                <i id={item.product} onClick={ removeFromCartHandler } className="fas fa-trash"></i>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-right">
                    <h3>Resumen de compra</h3>
                    <div>
                        <h3>Total:</h3>
                        <p>
                            <strong>
                                $ {formatter(cartItems.reduce((acc, item)=> acc + (item.qty * item.precio), 0))}
                            </strong>
                        </p>
                    </div>
                    <button 
                        className={cartItems.length === 0 ? 'btn-disabled' : 'btn-primary'} 
                        disabled={cartItems.length === 0}
                        onClick={checkOutHandler}
                    >
                        Continuar Compra
                    </button>
                </div>
            </div>
        
        </div>
    )
}

export default Cart
