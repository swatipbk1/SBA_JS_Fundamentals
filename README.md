# SBA_JS_Fundamentals

# Currency Converter Application

This is a currency converter application that allows users to convert between different currencies. The application fetches exchange rates from an external API and provides user interaction for currency conversion and manipulation.

## Implementation of Requirements

### 1. Use of Fetch API

- Implemented fetching exchange rates from an external web API using the Fetch API.
- Implemented in `exchangeRates.js`.
- Use the Exchange Rate API Key from OANDA Corporation valid for free for 7 days.

### 2. User Interaction with API

- Created a search feature allowing users to filter currencies based on search queries.
- Implemented in `app.js`.

### 3. User Manipulation of Data within API

- Enabled users to add custom currencies through a POST request to the API.
- Implemented in `app.js`.

### 4. Use of Promises and async/await Syntax

- Utilized async/await syntax and Promises for handling asynchronous operations.
- Implemented in various functions throughout `app.js` and `exchangeRates.js`.

### 5. Organization of JavaScript Code into Modules

- Organized JavaScript code into three different module files: `exchangeRates.js`, `currencies.js`, and `app.js`.
- Imported functions and data across files as necessary.

### 6. Program Behavior and Event Loop Understanding

- Ensured the program runs as expected, handling asynchronous operations appropriately.
- Conducted testing to avoid undesired behavior caused by misunderstanding of the JavaScript event loop.

### 7. Creating an Engaging User Experience with HTML and CSS

- Designed a visually appealing user interface using HTML and CSS.
- Styled elements for better user interaction and experience.

## Usage

- Clone the repository.
- Open `index.html` in a web browser to use the application.
- Enter the amount, select currencies, and click "Convert" to convert currency.
- Use the search feature to filter currencies.
- Add custom currencies by entering a currency code and clicking "Add".

## Dependencies

- No external dependencies required.

## Credits

- This application was created by Swati Pandey.
