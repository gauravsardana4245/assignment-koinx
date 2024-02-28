const express = require('express');
const router = express.Router();
const cryptoController = require('../controllers/cryptoController');

router.get('/get-all-cryptos', cryptoController.getAllCryptos);
router.post('/create-cryptos', cryptoController.createCryptos);

module.exports = router;