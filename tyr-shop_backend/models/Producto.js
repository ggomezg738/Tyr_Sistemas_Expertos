const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({

    nombre: String,
    descripcion: String,
    precio: Number,
    imagen:
    {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('producto', productoSchema);