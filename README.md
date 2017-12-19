# GA-w03d02-homework

# Currency-converter

Use the www.fixer.io api to make a simple currency converter.

When one of the currency buttons is clicked, the app should query fixer.io for the current exchange rate, calculate the amount in the foreign currency, and update the page with the currency and amount.

Feel free to customize it in anyway you please.

## html started code
```
<!DOCTYPE html>
<html>
  <head>
    <title>Currency Converter</title>
  </head>
  <body>
    <form name="currency converter">
      $<input type="text"></input>
      <input type="button" value="EUR"></input>
      <input type="button" value="GBP"></input>
      <input type="button" value="CNY"></input>
      <input type="button" value="JPY"></input>
    </form>
    <span id="output_amount"></span>
    <span id="output_currency"></span>
    <script type="text/javascript" src="app.js"></script>
  </body>
</html>
```

## app.js file starter code
```
function convertCurrency(event) {
  if ('type' in event.target && event.target.type === 'button') {
    console.log('handle currency conversion here');
  }
}

document.body.addEventListener('click', convertCurrency);
```
