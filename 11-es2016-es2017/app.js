// exponentiation **
const calculatedNumber = 2 ** 4;
calculatedNumber; // 16

// [].includes
const nums = [ 1, 2, 3, 4, 5 ];
nums.includes(3); // true
nums.includes(44); // false

// padStart
'awesome'.padStart(10); // '   awesome'
'awesome'.padStart(10, '!'); // '!!!awesome'

// padEnd
'awesome'.padEnd(10); // 'awesome   '
'awesome'.padEnd(10, '!'); // 'awesome!!!'

// async functions
async function first() {
	return 'We did it!';
}
first(); // returns a promise
first().then((val) => console.log(val)); // 'We did it!'

async function getMovieData() {
	console.log('Starting!');
	const movieData = await $.getJSON(
		'https://omdbapi.com?t=titanic&apikey=thewdb'
	);
	console.log('All done!');
	console.log(movieData);
}
getMovieData(); // logs an object with data about the movie

async function getUser(user) {
	try {
		const response = await $.getJSON(
			`https://api.github.com/users/${user}`
		);
		console.log(response.name);
	} catch (e) {
		console.log('User does not exist!');
	}
}
getUser('elie'); // Elie Schoppik
getUser('foo!!!'); // User does not exist!

async function hasMostFollowers(...usernames) {
	let urls = usernames.map((username) =>
		$.getJSON(`https://api.github.com/users/${username}`)
	);
	const result = await Promise.all(urls);
	let max = result.sort((a, b) => b.followers - a.followers)[0];
	return `${max.name} has the most followers with ${max.followers}`;
}

async function starWarsString(id) {
	const person = await $.getJSON(`https://swapi.dev/api/people/${id}/`);
	const movie = await $.getJSON(
		`${person.films[0].replace('http', 'https')}`
	);
	const planet = await $.getJSON(
		`${movie.planets[0].replace('http', 'https')}`
	);
	return `${person.name} is featured in ${movie.title}, directed by ${movie.director} and it takes place on ${planet.name}`;
}
