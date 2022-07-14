var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var usuarios = [{
}]

app.use(cors()); //Permite peticiones de otros orígenes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.send('<html><body><h1>Nooo</h1></body></html>');
});

app.get('/pagina1', function(req, res){
    res.send('<html><body><h1>pagina 1</h1></body></html>');
});

//Crear Usuario
app.post('/usuarios', function(req, res){
    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correoElectronico: req.body.correoElectronico,
        contrasenia: req.body.contrasenia,
        direccion: req.body.direccion
    }
    
    usuarios.push(usuario);
    res.send({codigoResultado:1, mensaje:'Registro guardado', usuario: usuario});
});

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


app.listen(8888, function(){
    console.log('Se levanto el servidor.');
});