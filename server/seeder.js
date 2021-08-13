import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModels.js';
import Product from './models/productModels.js';
import Order from './models/orderModels.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async()=>{
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()
    } catch (error) {
        
    }
}