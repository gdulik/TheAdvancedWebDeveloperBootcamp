const p1 = new Promise((resolve, reject) => {
	// resolve([ 1, 2, 3, 4 ]);
	reject('Error');
});

p1
	.then((data) => console.log(`Promise p1 resolved with data: ${data}`))
	.catch((data) => console.log(`Promise p1 was rejected with data: ${data}`));
