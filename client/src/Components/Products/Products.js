import React from 'react';
import { Link } from 'react-router-dom';
import './products.scss';
import Rating from '../Rating/Rating';
import {formatter} from '../../helpers/helpers';


const Products = ({product}) => {
    const {_id, imagen, nombre, comentarios, precio, rating} = product
    return (
        <div className="card">
            <Link to={`/product/${_id}`}>
                <img src={`/img/${imagen}`} alt={imagen} />
            </Link>
            <div>
                <Link to={`/product/${_id}`}>{nombre}</Link>
                <Rating comentarios={comentarios} rating={rating}/>
                <Link to={`/product/${_id}`}>
                    <strong>$ {formatter(precio)}</strong>
                </Link>
            </div>
        </div>
    )
}

export default Products
