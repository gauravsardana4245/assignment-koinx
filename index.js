const express = require('express');
const connectDB = require('./config/db');
const CryptoModel = require('./app/models/cryptoModel');
const cryptoController = require('./app/controllers/cryptoController.js');
const cron = require('node-cron');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use('/api/crypto', require('./app/routes/cryptoRoutes'));

// Schedule background job to update cryptos every hour
cron.schedule('0 * * * *', cryptoController.updateCryptos);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});