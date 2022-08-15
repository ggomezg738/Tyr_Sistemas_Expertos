const mongoose = require('mongoose');
 
const archivoSchema = new mongoose.Schema({
    nombre: String,
    archivo:
    {
        data: Buffer,
        contentType: String
    },
    tipoArchivo: String,
});
 
 
module.exports = new mongoose.model('Archivo', archivoSchema);