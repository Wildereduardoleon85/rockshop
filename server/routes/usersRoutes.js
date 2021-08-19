import express from 'express';
import {createUser, authUser} from '../controllers/userController.js'

const router = express.Router();

router.route('/').post(createUser)
router.route('/login').post(authUser)


export default router;