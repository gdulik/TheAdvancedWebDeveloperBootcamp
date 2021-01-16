const timerId = setTimeout(() => {
	console.log('This function runs in 5 seconds.');
}, 5000);

setTimeout(() => {
	console.log('Canceling the first setTimeout', timerId);
	clearTimeout(timerId);
}, 2000);
