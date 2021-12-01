const  express = require('express');
const router = express.Router();

const locacaoControllers = require('../controllers/locacaoControllers.js');

router.get('/locacao', locacaoControllers.index);

router.post('/locacao', locacaoControllers.store);

router.put('/locacao/:codigo', locacaoControllers.update);

router.delete('/locacao/:codigo', locacaoControllers.delete);

module.exports = router;