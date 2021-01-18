const url = 'https://opentdb.com/api.php?amount=1';

axios
	.get(url)
	.then((res) => {
		console.log(res.data.results[0].question);
	})
	.catch((err) => {
		if (err.response) {
			console.log(`RESPONSE ERROR: ${err}`);
		} else if (err.request) {
			console.log(`REQUEST ERROR: ${err}`);
		} else {
			console.log(`ERROR: ${err}`);
		}
	});
