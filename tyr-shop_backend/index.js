var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');
const Cliente = require('./models/Cliente');
const Empresa = require('./models/Empresa');
/*
const conectarDB = require('./config/db');
*/

//Conectamos a la BD
try{
    mongoose.connect('mongodb+srv://Gerson:Bobby123@cluster0.bzhahgn.mongodb.net/tyr');
    console.log('BD conectada');
} catch(error){
    console.log(error);
}


 app.use('/api/cliente', require('./routes/cliente'));



const clienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correoElectronico: String,
    contrasenia: String,
    direccion: String
});

const cliente = mongoose.model('cliente', clienteSchema)


app.use(cors()); //Permite peticiones de otros orígenes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
bodyParser.urlencoded({ extended: true });
app.use(express.json());

// Crear cliente
app.post("/guardarCliente", (req, res) => {
    const body = req.body;
    const cliente = new Cliente(body);
    cliente.save();
    res.json({
        mensaje:"Cliente guardado",
        cliente,
    });
});


/*
app.get('/', function(req, res){
    res.send('<html><body><h1>Nooo</h1></body></html>');
});

app.get('/pagina1', function(req, res){
    res.send('<html><body><h1>pagina 1</h1></body></html>');
});
*/

//Crear Usuario
/*
app.post('/usuarios', function(req, res){
    const ClienteSchema = mongoose.Schema({

        nombre: String,
        apellido: String,
        correoElectronico: String,
        contrasenia: String,
        direccion: String
    
    });
    let cliente;

        //Creamos el cliente
        cliente = new Cliente(req.body);

        await cliente.save();
        res.send(cliente);
    
});
*/


//Obtener Usuario
app.get('/usuarios/:id', function(req, res){
    if(req.params.id > (usuarios.length-1))
        res.send({codigoResultado:0, mensaje:"Usuario no existe"});
    else
        res.send(usuarios[req.params.id]);
});

//Obtener todos los usuarios
app.get('/usuarios', function(req,res){
    res.send(usuarios);
});

//Actualizar un usuario
app.put('/usuarios/:id', function(req, res){
    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correoElectronico: req.body.correoElectronico,
        contrasenia: req.body.contrasenia,
        direccion: req.body.direccion
    }

    usuarios[req.params.id] = usuario;
    res.send({codigoResultado:1, mensaje:"Usuario Actualizado"});
});

//Eliminar un usuario
app.delete('/usuarios/:id', function(req, res){
    usuarios.splice(req.params.id, 1);
    res.send({codigoResultado:1, mensaje:"Usuario Eliminado"});
});

/*====================================Empresas==================================================*/

const empresaSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correoElectronico: String,
    contrasenia: String,
    direccion: String,
    nombreEmpresa: String,
    industria: String
});

const empresa = mongoose.model('empresa', empresaSchema)

// Crear empresa
app.post("/guardarEmpresa", (req, res) => {
    const body = req.body;
    const empresa = new Empresa(body);
    empresa.save();
    res.json({
        mensaje:"Cliente guardado",
        empresa,
    });
});


app.listen(8888, function(){
    console.log('Se levanto el servidor.');
});