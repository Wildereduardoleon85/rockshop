import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    rating: {type: Number, required: true},
    comentario: {type: String, required: true},
}, {timestamps: true})

const productSchema = mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    nombre: {
        required: true,
        type: String
    },
    imagen: {
        required: true,
        type: String
    },
    marca: {
        required: true,
        type: String
    },
    categoria: {
        required: true,
        type: String
    },
    descripcion: {
        required: true,
        type: String
    },
    rating: {
        required: true,
        type: Number,
        default: 0
    },
    comentarios: [reviewSchema],
    enStock: {
        required: true,
        type: Number,
        default: 0
    },
    precio: {
        required: true,
        type: Number,
        default: 0
    }
}, {timestamps: true})

const Product = mongoose.model('Product', productSchema)

export default Product