$('#btn').click(() => {
	// $.ajax({
	// 	method: 'GET',
	// 	url: 'https://baconipsum.com/api/?type=meat-and-filler',
	// 	dataType: 'json'
	// })
	$.getJSON('https://baconipsum.com/api/?type=meat-and-filler')
		.done((data) => {
			$('p').text(data[0]);
		})
		.fail(() => {
			console.log('ERROR');
		});
});
