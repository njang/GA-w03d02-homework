
let rates;
$.get("https://api.fixer.io/latest?base=USD", function(response){	
	// Isolate the rates from the response.
	rates = response.rates;
	// Collect all availalbe rates by names.
	ratesAvailable = Object.keys(rates);
	// Construct the list of options for the available currencies.
	for (let i = 0; i < ratesAvailable.length; i ++) {
		// Create an option element. Set the value and display text to the currency name.
		let optionElement = document.createElement('option');
		optionElement.value = ratesAvailable[i];
		optionElement.text = ratesAvailable[i];
		// Append the option element to the select tag with targetCurrencies id.
		document.getElementById('targetCurrencies').appendChild(optionElement);
	}
});

function convertCurrency(event) {
  if ('type' in event.target && event.target.type === 'button') {
    // Retrieve target currency from the form, and convert it to string.
    let targetCurrency = $('#targetCurrencies').val().toString();
    // Retrieve input amount from the form.
    let inputAmount = $('#inputAmount').val();
    // Convert the value, and keep two digits below decimal point.
    let outputAmount = Math.round(inputAmount * rates[targetCurrency] * 100) / 100;
	// Display the results and clear the input field.
	$('#output').html(`At today's rate, ${Number(inputAmount).toLocaleString()} USD is ${outputAmount.toLocaleString()} ${targetCurrency}.`);
	$('#inputAmount').val('');
  }
}

document.body.addEventListener('click', convertCurrency);