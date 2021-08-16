import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

// @route POST /api/v1/users
// @desc register a user
router.post('/', async(req, res)=>{
    
    const { nombre, correo, contraseña } = req.body;

    try{
        const newUser = new User({
            nombre: nombre,
            correo: correo,
            contraseña: contraseña
        });

        const user = await newUser.save();
        res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    } 
});

export default router;