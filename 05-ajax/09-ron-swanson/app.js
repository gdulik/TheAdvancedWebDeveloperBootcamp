const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quote = document.querySelector('#quote');

// XMLHttpRequest
const btnXhr = document.querySelector('#xhr');
btnXhr.addEventListener('click', () => {
	const XHR = new XMLHttpRequest();

	XHR.onreadystatechange = () => {
		if (XHR.readyState === 4 && XHR.status === 200) {
			quote.innerHTML = JSON.parse(XHR.responseText);
		} else if (XHR.readyState === 4 && XHR.status !== 200) {
			console.log('XHR Error');
		}
	};

	XHR.open('GET', url);
	XHR.send();
});

// Fetch
const btnFetch = document.querySelector('#fetch');
btnFetch.addEventListener('click', () => {
	fetch(url)
		.then((res) => {
			if (!res.ok) {
				throw new Error('RES not ok');
			}
			return res.json();
		})
		.then((data) => {
			quote.innerHTML = data[0];
		})
		.catch((err) => {
			console.log('FETCH Error', err);
		});
});

// jQuery
$('#jquery').click(() => {
	$.getJSON(url)
		.done((data) => {
			$('#quote').text(data[0]);
		})
		.fail((err) => {
			console.log('JQUERY Error', err);
		});
});

// Axios
const btnAxios = document.querySelector('#axios');
btnAxios.addEventListener('click', () => {
	axios
		.get(url)
		.then((res) => {
			quote.innerHTML = res.data[0];
		})
		.catch((err) => {
			console.log('AXIOS Error', err);
		});
});
