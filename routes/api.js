const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = 'PIHG89KBEG6FPDD4'; // Replace with your actual Alpha Vantage API key

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/dashboard', async (req, res) => {
  const symbol = req.body.symbol.toUpperCase();

  try {
    const response = await axios.get('https://www.alphavantage.co/query', {
      params: {
        function: 'GLOBAL_QUOTE',
        symbol: symbol,
        apikey: API_KEY
      }
    });

    const stockData = response.data['Global Quote'];

    if (stockData && stockData['05. price']) {
      res.render('dashboard', { stock: stockData, symbol, error: null });
    } else {
      res.render('dashboard', { stock: null, symbol, error: `⚠️ No data available for ${symbol}. Please try another symbol.` });
    }
  } catch (err) {
    console.error(err);
    res.render('dashboard', { stock: null, symbol, error: '⚠️ Error fetching data. Please try again later.' });
  }
});

module.exports = router;
