const mongoose = require('mongoose');

const EmpresaSchema = mongoose.Schema({

    nombre: String,
    apellido: String,
    correoElectronico: String,
    contrasenia: String,
    direccion: String,
    nombreEmpresa: String,
    industria: String

});

module.exports = mongoose.model('Empresa', EmpresaSchema);