import React from 'react';
import './productItem.scss';
import {formatter} from '../../../helpers/helpers'

const ProductItem = ({product}) => {
    return (
        <div className="card" key={product._id}>
            <div>
                <img src={`./img/${product.imagen}`} alt={product.imagen} />
            </div>
            <div>
                <h3>{product.nombre}</h3>
                <p>{product.comentarios}</p>
                <p><strong>$ {formatter(product.precio)}</strong></p>
            </div>
        </div>
    )
}

export default ProductItem
