const btn = document.querySelector('button');
const price = document.querySelector('#price');
const currency = 'EUR';

const makeRequest = () => {
	const XHR = new XMLHttpRequest();

	XHR.onreadystatechange = () => {
		if (XHR.readyState === 4 && XHR.status === 200) {
			const data = JSON.parse(XHR.responseText);
			price.innerHTML = `${data.bpi[currency].rate} ${currency}`;
		}
	};

	XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
	XHR.send();
};

btn.addEventListener('click', makeRequest);

window.addEventListener('load', makeRequest);
