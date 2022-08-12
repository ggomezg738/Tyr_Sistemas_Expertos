const mongoose = require('mongoose');

const ClienteSchema = mongoose.Schema({

    nombre: String,
    apellido: String,
    correoElectronico: String,
    contrasenia: String,
    direccion: String

});

module.exports = mongoose.model('Cliente', ClienteSchema);