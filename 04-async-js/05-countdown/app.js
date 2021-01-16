const countDown = (duration) => {
	const intervalId = setInterval(() => {
		duration--;
		if (duration <= 0) {
			console.log('Ring Ring Ring!!!');
			clearInterval(intervalId);
		} else {
			console.log(duration);
		}
	}, 1000);
};
