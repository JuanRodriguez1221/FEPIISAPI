const mongoose = require("mongoose");

const documentoSchema = mongoose.Schema({
    direccion: {
        type: String,
        required: true
    },
    fecha_entrega: {
        type: Date,
        required: true
    },
    fecha_retorno: {
        type: Date,
        required: true
    },
    estado: {
        type: Number,
        required: true
    },
    identificacion_cliente: {
        type: Number,
        required: true
    },
    nombreCompleto: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    enseres: [
        {
            cantidad: {
                type: Number,
                required: true
            },
            enser: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('AlquilerConsulta', documentoSchema);
