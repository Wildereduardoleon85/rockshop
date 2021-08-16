import express from 'express';
import dotenv from 'dotenv';
import usersRoutes from './routes/usersRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();
const app = express();

//Middlewares
app.use(express.json({extended: false}));

// Routes
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/products', productsRoutes);


const port = process.env.PORT || 5000
const env = process.env.NODE_ENV

app.listen(port, console.log(`Server running in ${env} mode on PORT ${port}`))