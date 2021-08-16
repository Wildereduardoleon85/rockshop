import express from 'express';
import Product from '../models/productModel.js';

const router = express.Router();

// @route POST /api/v1/products
// @desc register a product
router.post('/', async(req, res)=>{
    
    const { 
        usuario, 
        nombre, 
        imagen, 
        marca, 
        categoria, 
        descripcion, 
        rating, 
        comentarios, 
        enStock, 
        precio 
    } = req.body;

    try{
        const newProduct = new Product({
            usuario,
            nombre,
            imagen,
            marca,
            categoria,
            descripcion,
            rating, 
            comentarios,
            enStock,
            precio
        });

        const product = await newProduct.save();
        res.json(product);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    } 
});

export default router;