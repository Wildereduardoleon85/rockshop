import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    correo: {
        required: true,
        type: String,
        unique: true
    },
    contraseña: {
        required: true,
        type: String
    },
    esAdministrador: {
        required: true,
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

export default User