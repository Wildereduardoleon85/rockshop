import express from 'express';
import {productRegister, fetchAllProducts, getProductById} from '../controllers/productsController.js'

const router = express.Router();

router.route('/').post(productRegister)
router.route('/').get(fetchAllProducts)
router.route('/:id').get(getProductById)


export default router;