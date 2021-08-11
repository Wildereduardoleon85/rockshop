import express from 'express';
import products from './data/data.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.get('/api/v1/products', (req, res)=>{
    res.json(products)
})

app.get('/api/v1/product/:id', (req, res)=>{
    const product = products.filter(i=> i._id === parseInt(req.params.id))
    res.json(product)
})

const port = process.env.PORT || 5000
const env = process.env.NODE_ENV

app.listen(port, console.log(`Server running in ${env} mode on PORT ${port}`))