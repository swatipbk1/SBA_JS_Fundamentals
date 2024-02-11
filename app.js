import { fetchExchangeRates } from './exchangeRates.js';
import currencies from './currencies.js';


const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const resultText = document.getElementById('result');
const searchInput = document.getElementById('searchInput');
const addCurrencyBtn = document.getElementById('addCurrencyBtn');
const customCurrencyInput = document.getElementById('customCurrencyInput');

// Populate currency dropdowns
function populateCurrencies() {
  currencies.forEach(currency => {
    const option1 = document.createElement('option');
    option1.value = currency;
    option1.textContent = currency;
