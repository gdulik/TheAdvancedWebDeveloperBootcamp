const btn = document.querySelector('#btn');
const img = document.querySelector('#photo');

// Listen for clicks
btn.addEventListener('click', () => {
	// Make the request
	const XHR = new XMLHttpRequest();

	XHR.onreadystatechange = () => {
		if (XHR.readyState === 4 && XHR.status === 200) {
			const data = JSON.parse(XHR.responseText);
			img.src = data.message;
		}
	};

	XHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
	XHR.send();
});
