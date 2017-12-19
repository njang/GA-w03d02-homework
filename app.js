function convertCurrency(event) {
	if ('type' in event.target && event.target.type === 'button') {
		console.log('handle currency conversion here');
	}

	$.get("https://api.fixer.io/latest?base=USD&symbols=KRW", function(response){
		console.log(Number($('#inputCurrency').text()));
		console.log(response.rates);
	});
}

document.body.addEventListener('click', convertCurrency);
