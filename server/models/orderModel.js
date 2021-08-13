import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    usuario: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    orderItems: [
        {
            nombre: {type: String, required: true},
            cantidad: {type: Number, required: true},
            imagen: {type: String, required: true},
            precio: {type: Number, required: true},
            producto: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product'}
        }
    ],
    direccionEnvio: {
        direccion: {type: String, required: true},
        ciudad: {type: String, required: true},
        codigoPostal: {type: String, required: true},
        pais: {type: String, required: true}
    },
    metodoDePago: {
        required: true,
        type: String
    },
    resultadoDePago: {
        id: {type: String},
        status: {type: String},
        horaDeActualizacion: {type: String},
        direccionDeCorreo: {type: String}
    },
    precioDeImpuesto: {
        required: true,
        type: Number,
        default: 0.0
    },
    precioDeEnvio: {
        required: true,
        type: Number,
        default: 0.0
    },
    precioTotal: {
        required: true,
        type: Number,
        default: 0.0
    },
    estaPagado: {
        type: Boolean,
        required: true,
        default: false
    },
    fechaDePago: {
        type: Date
    },
    estaEnviado: {
        type: Boolean,
        required: true,
        default: false
    },
    fechaDeEnvio: {
        type: Date
    },
}, {timestamps: true})

const Order = mongoose.model('Order', orderSchema)

export default Order