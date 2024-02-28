const axios = require('axios');

const CoingeckoService = {
    getAllCryptos: async () => {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
            const simplifiedCryptos = response.data.map(crypto => ({
                id: crypto.id,
                name: crypto.name
            }));
            return simplifiedCryptos;
        } catch (error) {
            throw error;
        }
    },
};

module.exports = CoingeckoService;
