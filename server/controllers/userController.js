import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

// @route POST /api/v1/users
// @desc register a user
export const createUser = async(req, res) => {
    const { nombre, correo, contraseña } = req.body;

    try{
        const newUser = new User({
            nombre: nombre,
            correo: correo,
            contraseña: contraseña
        });

        const salt = await bcrypt.genSalt(10);
        newUser.contraseña = await bcrypt.hash(contraseña, salt);

        const user = await newUser.save();
        res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Error del Servidor');
    } 
}


//@desc   Auth User & get token
//@route  POST /api/v1/users/login
//access: public
export const authUser = async(req, res) => {
    const {correo, contraseña} = req.body

    try{
        const user = await User.findOne({correo})
        if(!user){
            return res.status(401).json({msg: 'Credenciales inválidas'})
        }
        const isMatch = await bcrypt.compare(contraseña, user.contraseña)
        if(!isMatch){
            return res.status(401).json({msg: 'Credenciales inválidas'})
        }
        res.json({
            _id: user._id,
            nombre: user.nombre,
            correo: user.correo,
            esAdminitrador: user.esAdministrador,
            token: null
        })
    }catch(error){
        console.error(error.message)
        res.status(500).send('Error del Servidor')
    }
}