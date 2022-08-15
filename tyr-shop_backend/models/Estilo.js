const mongoose = require('mongoose');

const EstiloSchema = mongoose.Schema({

    tipo: String,
    nombre: String,
    cuerpo: String

});

module.exports = mongoose.model('Estilo', EstiloSchema);