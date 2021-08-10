import React from 'react';
import './productItem.scss';
import Rating from './Rating/Rating';
import {formatter} from '../../../helpers/helpers';

const ProductItem = ({product}) => {
    const {_id, imagen, nombre, comentarios, precio, rating} = product
    return (
        <div  className="card">
            <a href={`/product/${_id}`}>
                <img src={`./img/${imagen}`} alt={imagen} />
            </a>
            <div>
                <a href={`/product/${_id}`}>{nombre}</a>
                <Rating comentarios={comentarios} rating={rating}/>
                <a href={`/product/${_id}`}>
                    <strong>$ {formatter(precio)}</strong>
                </a>
            </div>
        </div>
    )
}

export default ProductItem
