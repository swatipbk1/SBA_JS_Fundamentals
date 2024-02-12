const API_KEY = '34b7875b-89d4-4ce2-8fa4-42d73033f520'; // Oanda API key
const API_URL = 'https://api.exchangerate-api.com/v4/latest/';

async function fetchExchangeRates(baseCurrency) {
  try {
    const response = await fetch(`${API_URL}${baseCurrency}`);
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { fetchExchangeRates };
