const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// api/cliente
router.post('/', clienteController.crearCliente);

module.exports = router;