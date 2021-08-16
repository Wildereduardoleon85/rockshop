import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../../Rating/Rating';
import './product-screen.scss';
import {formatter} from '../../../helpers/helpers';
import Loader from '../Loader/Loader';
import { getProductDetails } from '../../../actions/productActions';

const ProductScreen = ({match}) => {
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading, product} = productDetails

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))
    }, [match, dispatch])

    if(loading){
        return <Loader/>
    }else{
        const {imagen, nombre, comentarios, rating, precio, descripcion, enStock} = product
        return (
            <section className="product-screen card">
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
                    <p>Cantidad: </p>
                    <button className="btn-primary">Agregar al Carro</button>
                </div>
            </section>
        )
    }
}

export default ProductScreen
