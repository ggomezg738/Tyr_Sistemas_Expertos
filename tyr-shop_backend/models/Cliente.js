const mongoose = require('mongoose');

const ClienteSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correoElectronico: {
        type: String,
        required: true
    },
    contrasenia: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Cliente', ClienteSchema);