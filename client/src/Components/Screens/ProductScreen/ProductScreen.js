import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Rating from '../../Rating/Rating';
import './product-screen.scss';
import {formatter} from '../../../helpers/helpers';

const ProductScreen = ({match}) => {

    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProduct()
        // eslint-disable-next-line
    }, [])

    const getProduct = async() => {
        const {data} = await axios.get(`/api/v1/product/${match.params.id}`);
        setProduct(data[0]);
    }

    if(product === null){
        return <h1>Loading...</h1>
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
