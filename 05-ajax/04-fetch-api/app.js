const btn = document.querySelector('button');
const price = document.querySelector('#price');
const currency = 'EUR';

const makeRequest = () => {
	fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
		.then((res) => {
			if (!res.ok) {
				throw new Error('This is an error');
			}
			return res.json();
		})
		.then((data) => {
			price.innerHTML = `${data.bpi[currency].rate} ${currency}`;
		})
		.catch((error) => {
			console.log(error);
		});
};

btn.addEventListener('click', makeRequest);

window.addEventListener('load', makeRequest);
