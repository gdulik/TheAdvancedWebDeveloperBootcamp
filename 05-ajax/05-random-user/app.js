const btn = document.querySelector('#btn');

const avatar = document.querySelector('#avatar');
const fullname = document.querySelector('#fullname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const city = document.querySelector('#city');

const url = 'https://randomuser.me/api/';

const handleErrors = (res) => {
	if (!res.ok) throw new Error(res.status);
	return res;
};

const parseJSON = (res) => {
	return res.json();
};

const updateProfile = (data) => {
	avatar.src = data.results[0].picture.medium;
	fullname.innerText = `${data.results[0].name.first} ${data.results[0].name
		.last}`;
	username.innerText = data.results[0].login.username;
	email.innerText = data.results[0].email;
	city.innerText = data.results[0].location.city;
};

const printError = (error) => {
	console.log(`ERROR: ${error}`);
};

const getRandomUser = () => {
	fetch(url)
		.then(handleErrors)
		.then(parseJSON)
		.then(updateProfile)
		.catch(printError);
};

btn.addEventListener('click', getRandomUser);
