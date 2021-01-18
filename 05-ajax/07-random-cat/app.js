$('#btn').click(() => {
	$.getJSON('http://aws.random.cat/meow')
		.done((data) => {
			$('#photo').attr('src', data.file);
		})
		.fail((err) => {
			console.log('ERROR');
		});
});
