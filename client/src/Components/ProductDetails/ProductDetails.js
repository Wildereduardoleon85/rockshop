import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../Rating/Rating';
import './product-details.scss';
import {formatter} from '../../helpers/helpers';
import Loader from '../layout/Loader/Loader';
import { getProductDetails } from '../../redux/actions/productActions';

const ProductScreen = ({match}) => {
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading, product} = productDetails

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
    }, [match, dispatch])

    if(loading || product.length < 1){
        return <Loader/>
    }else{
        const {imagen, nombre, comentarios, rating, precio, descripcion, enStock, _id} = product
        return (
            <>
                <Link to="/" ><button>Atrás</button></Link>
                <section className="product-details card">
                    <div>
                        {<img src={`/img/${imagen}`} alt={imagen} />}
                    </div>
                    <div>
                        <h2 className="titulo">{nombre}</h2>
                        <Rating comentarios={comentarios} rating={rating}/>
                        <h2 className="precio">$ {formatter(precio)}</h2>
                        <p>{descripcion}</p>
                    </div>
                    <div>
                        <p>Precio: $ {formatter(precio)}</p>
                        <p>Stock: {enStock > 0 ? 'Disponible' : 'No Disponible'}</p>
                        {enStock > 0 && (
                        <div>
                            <p>Cantidad: </p>
                                <select value={qty} onChange={(e)=> setQty(e.target.value)}>
                                {[...Array(enStock).keys()].map(x=> (
                                    <option key={x+1} vlaue={x+1}>{x+1}</option>
                                ))}
                                </select>
                                <i className="fas fa-caret-down"></i>
                        </div>
                        )}
                        <Link to={`/cart/${_id}?qty=${qty}`}>
                            <button 
                                className={enStock > 0 ? 'btn-primary' : 'btn-disabled'} 
                                disabled={enStock > 0 ? false : true}
                            >
                                Agregar al Carro
                            </button>
                        </Link>
                    </div>
                </section>
            </>
        )
    }
}

export default ProductScreen
