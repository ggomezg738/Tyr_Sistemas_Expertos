const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { encrypt, compare } = require('./helper/handleBcryptjs');
const mongoose = require('mongoose');

const Cliente = require('./models/Cliente');
const Empresa = require('./models/Empresa');
const Archivo = require('./models/Archivo');
const Categoria = require('./models/Categoria');

const app = express();

app.use(cors()); //Permite peticiones de otros orígenes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine", "ejs");
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

const cliente = mongoose.model('cliente', clienteSchema);

// Crear cliente
app.post("/guardarCliente", async (req, res) => {
    try{

        const { nombre,  apellido,  correoElectronico, contrasenia, direccion } = req.body;
        const passwordHash = await encrypt(contrasenia);
        const cliente = await new Cliente({
            nombre,
            apellido,
            correoElectronico, 
            contrasenia: passwordHash, 
            direccion
        })
        cliente.save();
        res.json({
        mensaje:"Cliente guardado",
        cliente,
    });

    } catch(error){

        console.log(error);

    }
});
//Login de Usuario

const loginCtrl = async (req, res) => {
    try{
        const { correoElectronico, contrasenia } = req.body;
        const usuario = await cliente.findOne({ correoElectronico });
        if(!usuario){
            res.status(404)
            res.send({ error: 'Usuario no encontrado' });
        } 
        const checkPassword = await compare(contrasenia, usuario.contrasenia);
        if(checkPassword) {
            res.send({
                mensaje: "Logueado exitosamente!!",
                data: usuario
            })
            return;
        }

        if(!checkPassword) {
            res.status(409);
            res.send({
                error: 'Contrasenia incorrecta'
            })
            return;
        }
    } catch(error){
        console.log(error);
    }
}

app.post("/loginUsuario", loginCtrl)

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

/*====================================Empresas==============================================*/

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

/*======================= Imagenes archivos============================== */
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,path.join(__dirname,'./uploads') )
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}.${file.mimetype.split('/')[1]}`);
    }
});

app.use('/uploads',express.static(path.join(__dirname,'/uploads')));
const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res, next) => {
 
    var obj = {
        nombre: req.body.nombre,
        archivo: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'archivo'
        },
        tipoArchivo: req.body.tipoArchivo,
    }
    Archivo.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/upload');
        }
    });
});

app.listen(8888, function(){
    console.log('Se levanto el servidor.');
});