import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import usersRoutes from './routes/users.js';
import productsRoutes from './routes/products.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();
const app = express();

//Middlewares
app.use(express.json({extended: false}));

// Routes
app.get('/api/v1/products', (req, res)=>{
    res.json(products)
})

app.get('/api/v1/product/:id', (req, res)=>{
    const product = products.filter(i=> i._id === parseInt(req.params.id))
    res.json(product)
})

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/products', productsRoutes);

const port = process.env.PORT || 5000
const env = process.env.NODE_ENV

app.listen(port, console.log(`Server running in ${env} mode on PORT ${port}`))