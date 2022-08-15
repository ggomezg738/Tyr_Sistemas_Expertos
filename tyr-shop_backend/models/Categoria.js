const mongoose = require('mongoose');
 
const categoriaSchema = new mongoose.Schema({
    nombre: String,
});
 
 
module.exports = new mongoose.model('Categoria', categoriaSchema);