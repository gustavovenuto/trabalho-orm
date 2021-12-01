const  express = require('express');
const router = express.Router();

const clientesControllers = require('../controllers/clientesControllers.js');

router.get('/clientes', clientesControllers.index);

router.post('/clientes', clientesControllers.store);

router.put('/clientes/:codigo', clientesControllers.update);

router.delete('/clientes/:codigo', clientesControllers.delete);

module.exports = router;