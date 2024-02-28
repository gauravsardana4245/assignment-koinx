const CryptoModel = require('../models/cryptoModel');
const CoingeckoService = require('../services/coingeckoService');

const getAllCryptos =  async (req, res) => {
    try {
        const cryptos = await CryptoModel.find();
        res.json(cryptos);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createCryptos =  async (req, res) => {
    try {
        const cryptoList = await CoingeckoService.getAllCryptos();
        const insertedCryptos = await CryptoModel.insertMany(cryptoList);
        res.json(insertedCryptos);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateCryptos = async () => {
    try {
        console.log("cryptos updating...");
        const cryptoList = await CoingeckoService.getAllCryptos();
        await CryptoModel.deleteMany({});
        await CryptoModel.insertMany(cryptoList);
        console.log('Cryptos updated successfully');
    } catch (error) {
        console.error('Error updating cryptos:', error);
     }
}


module.exports = {
    getAllCryptos,
    updateCryptos,
    createCryptos
}
