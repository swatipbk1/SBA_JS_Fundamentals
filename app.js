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
    const option2 = option1.cloneNode(true);
    fromCurrencySelect.appendChild(option1);
    toCurrencySelect.appendChild(option2);
  });
}

populateCurrencies();

// Convert currency
async function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (!isNaN(amount) && fromCurrency && toCurrency) {
    const rates = await fetchExchangeRates(fromCurrency);
    if (rates) {
      const exchangeRate = rates[toCurrency];
      if (exchangeRate) {
        const result = amount * exchangeRate;
        resultText.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
      } else {
        resultText.textContent = 'Exchange rate not available for selected currency';
      }
    } else {
      resultText.textContent = 'Failed to fetch exchange rates';
    }
  } else {
    resultText.textContent = 'Please enter valid amount and select currencies';
  }
}

// Search currencies
function searchCurrencies(query) {
  const filteredCurrencies = currencies.filter(currency =>
    currency.toLowerCase().includes(query.toLowerCase())
  );
  // Clear existing options
  fromCurrencySelect.innerHTML = '';
  toCurrencySelect.innerHTML = '';
  // Populate dropdowns with filtered currencies
  filteredCurrencies.forEach(currency => {
    const option1 = document.createElement('option');
    option1.value = currency;
    option1.textContent = currency;
    const option2 = option1.cloneNode(true);
    fromCurrencySelect.appendChild(option1);
    toCurrencySelect.appendChild(option2);
  });
}


// Add currency
async function addCurrency(currency) {
  try {
    const response = await fetch('https://api.example.com/currencies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if required
      },
      body: JSON.stringify({ currency }),
    });

    if (!response.ok) {
      throw new Error('Failed to add currency');
    }

    // Handle success
    console.log('Currency added successfully');
    // You may want to update the currencies array and repopulate the dropdowns here
  } catch (error) {
    console.error('Error adding currency:', error.message);
    // Display error message to the user
  }
}

// Event listeners
convertBtn.addEventListener('click', convertCurrency);

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  if (query) {
    searchCurrencies(query);
  } else {
    // If search input is empty, repopulate dropdowns with all currencies
    populateCurrencies();
  }
});

addCurrencyBtn.addEventListener('click', () => {
  const customCurrency = customCurrencyInput.value.trim().toUpperCase();
  if (customCurrency && !currencies.includes(customCurrency)) {
    addCurrency(customCurrency);
    // Clear the input field
    customCurrencyInput.value = '';
  }
});

