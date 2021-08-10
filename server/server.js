import express from 'express';
import products from './data/data.js';

const app = express();

app.get('/api/v1/products', (req, res)=>{
    res.json(products)
})

app.get('/api/v1/product/:id', (req, res)=>{
    const product = products.filter(i=> i._id === parseInt(req.params.id))
    res.json(product)
})

app.listen(5000, console.log('Server running on PORT 5000'))