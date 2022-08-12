const Cliente = require('../models/Cliente');

exports.crearCliente = async (req, res) => {
    
    try{
        
        let cliente;

        //Creamos el cliente
        cliente = new Cliente(req.body);

        await cliente.save();
        res.send(cliente);

    } catch(error) {
        
        console.log(error);
        res.status(500).send('Ha ocurrido un error.');
    
    }

}