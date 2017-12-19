function convertCurrency(event) {
	if ('type' in event.target && event.target.type === 'button') {
		console.log('handle currency conversion here');
		// $.get("https://api.fixer.io/latest?base=USD&symbols=KRW", function(response){
		$.get("https://api.fixer.io/latest?base=USD&symbols=KRW", function(response){	
			let currencyEntered = Number($('#inputCurrency').val());
			let conversionRate = Number(response.rates.KRW);
			let currencyConverted = currencyEntered * conversionRate;
			
			$('#output_amount').html(currencyConverted);
			$('#output_currency').html("KRW");
		});
	}
}

document.body.addEventListener('click', convertCurrency);
