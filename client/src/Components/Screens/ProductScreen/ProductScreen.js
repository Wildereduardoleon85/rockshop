import React from 'react';
import productos from '../../../data/productos';
import Rating from '../../Rating/Rating';
import './product-screen.scss';
import {formatter} from '../../../helpers/helpers';

const ProductScreen = ({match}) => {

    const product = productos.filter(i=> i._id === parseInt(match.params.id))
    const {imagen, nombre, comentarios, rating, precio, descripcion, enStock} = product[0]
    
    return (
        <section className="product-screen card">
            <div>
                {<img src={`/img/${imagen}`} alt="" />}
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

export default ProductScreen
