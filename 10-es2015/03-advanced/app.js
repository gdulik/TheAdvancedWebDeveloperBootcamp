// class
class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	sayHello() {
		return `Hello ${this.firstName} ${this.lastName}`;
	}
	static isStudent(obj) {
		return obj.construtor === Student;
	}
}
const elie = new Student('Elie', 'Schoppik');
Student.isStudent(s); // true

// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.

/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of the parameter multiplied with the favoriteNumber property on a person object.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/

class Person {
	constructor(firstName, lastName, favoriteColor, favoriteNumber) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.favoriteColor = favoriteColor;
		this.favoriteNumber = favoriteNumber;
	}
	multiplyFavoriteNumber(num) {
		return num * this.favoriteNumber;
	}
}

// inheritance
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	sayHello() {
		return `Hello ${this.firstName} ${this.lastName}`;
	}
}
class Student extends Person {
	constructor(firstName, lastName) {
		super(firstName, lastName);
	}
}

// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model and year property.

// 2 - Add an instance method called start which returns the string "VROOM!"

// 3 - Add an instance method called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a class for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype

class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	start() {
		return 'VROOM!';
	}
	toString() {
		return `The make, model, and year are ${this.make} ${this.model} ${this
			.year}`;
	}
}

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle {
	constructor() {
		super(...arguments);
		this.numWheels = 2;
	}
}

// maps
const firstMap = new Map();

firstMap.set(1, 'Elie');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.delete('nice'); // true
firstMap.size; // 2

const arrayKey = [];
firstMap.set(arrayKey, [ 1, 2, 3, 4, 5 ]);
const objectKey = {};
firstMap.set(objectKey, { a: 1 });

firstMap.get(1); // 'Elie'
firstMap.get(false); // 'a boolean'
firstMap.get(arrayKey); // [1,2,3,4,5]
firstMap.get(objectKey); // {a:1}

firstMap.forEach((v) => console.log(v));

firstMap.values();
firstMap.keys();

// sets
const s = new Set();
const s2 = new Set([ 3, 1, 4, 1, 2, 1, 5 ]); // {3,1,4,2,5}

s.add(10); // {10}
s.add(20); // {20, 10}
s.add(10); // {20, 10}
s.size; // 2

s.has(10); // true
s.delete(20); //true
s.size; // 1

s2[Symbol.iterator];

class MessageBoard {
	/*
    In your constructor method, you should assign two properties for each object created from the MessageBoard class. The first should be a property called messages which is an empty Map, and the second is a property called id which has a value of 1. 
    
    var m = new MessageBoard
    
    m.hasOwnProperty('messages') // true
    m.messages.constructor // function Map() { [native code] }
    m.hasOwnProperty('id') // true
    m.id // 1
    */

	constructor() {
		this.messages = new Map();
		this.id = 1;
	}

	/*
    
    Add a method called addMessage which accepts a string. The function should add a key and value to the messages map with a key of whatever the value of this.id is and a value of whatever the string is that is passed to the function. The function should return the object created from the class so that the method can be chained. (HINT - to implement the last part, make sure to return this).
    
    var m = new MessageBoard
    m.addMessage('hello');
    m.messages.size // 1
    m.addMessage('awesome!') // m
    m.addMessage('awesome!').addMessage('nice!').addMessage('cool!') 
    */

	addMessage(str) {
		this.messages.set(this.id, str);
		this.id++;
		return this;
	}

	/*
    Add a method called findMessageById which accepts a number and returns the message in the messages map with the same key as the number passed to the function. If the key is not found in the messages map, the function should return undefined.
    
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageById(1) // 'hello!'
    m.findMessageById(2) // 'hi!'
    m.findMessageById(3) // 'whats up?'
    m.findMessageById(4) // undefined
    m.findMessageById() // undefined
    */

	findMessageById(id) {
		return this.messages.get(id);
	}

	/*
    Add a method called findMessageByValue which accepts a string and returns the message in the messages map with the same value as the string passed to the function. If the value is not found in the messages map, the function should return undefined.
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageByValue('hello!') // 'hello!'
    m.findMessageByValue('hi!') // 'hi!'
    m.findMessageByValue('whats up?') // 'whats up?'
    m.findMessageByValue('nothing here') // undefined
    m.findMessageByValue() // undefined
    */

	findMessageByValue(val) {
		for (let [ key, value ] of this.messages.entries()) {
			if (value === val) return val;
		}
	}

	/*
    Add a method called removeMessage which accepts a number and removes a message in the messages map with a key of the number passed to the function.
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.removeMessage(1)
    m.removeMessage(2)
    m.messages.size // 1
    m.removeMessage() // m
    */

	removeMessage(key) {
		this.messages.delete(key);
		return this;
	}

	/*
    Add a method called numberOfMessages which returns the number of keys in the messages map
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.numberOfMessages() // 3
    */

	numberOfMessages() {
		return this.messages.size;
	}

	/*
    Add a method called messagesToArray which returns an array of all of the values in the messages map
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.messagesToArray() // ['hello!', 'hi!', 'whats up?'])
    */

	messagesToArray() {
		const arr = [];
		this.messages.forEach((v) => arr.push(v));
		return arr;
		// return Array.from(this.messages.values());
	}
}

/*
Write a function called uniqueValues which accepts an array and returns the number of unique values in the array

uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // 6
*/

function uniqueValues(arr) {
	const s = new Set(arr);
	return s.size;
}

/*

Write a function called hasDuplicates which accepts an array and returns true if there are duplicate values in the array, otherwise it should return false.

hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // true
hasDuplicates([1,2,3,4,5,6]) // false
hasDuplicates([]) // false
*/

function hasDuplicates(arr) {
	const s = new Set(arr);
	if (s.size === arr.length) return false;
	else return true;
}

/*

Write a function called countPairs which accepts an array of numbers and a number. The function should return the number of unique pairs (two numbers) that sum up to the number passed to the function.

countPairs([8,2,6,4,10,0],10) // 3
countPairs([8,2],10) // 1
countPairs([1,2],10) // 0
countPairs([1,2,3,4,5],10) // 0
countPairs([],10) // 0
countPairs([5,4,-10,6,-20,16],-4) // 2
countPairs([0,-4],-4) // 1
*/

function countPairs(arr, sum) {
	let count = 0;
	const s = new Set(arr);
	for (const v of s) {
		if (s.has(sum - v) && v !== sum - v) count++;
	}
	return count / 2;
}

// promises
function displayAtRandomTime() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.5) {
				resolve('Yes!');
			} else {
				reject('No!');
			}
		}, 1000);
	});
}

function getMostFollowers(...usernames) {
	let baseUrl = 'https://api.github.com/users/';
	let urls = usernames.map((username) => $.getJSON(`${baseUrl}${username}`));
	return Promise.all(urls).then((data) => {
		let max = data.sort((a, b) => b.followers - a.followers)[0];
		return `${max.name} has the most followers with ${max.followers}`;
	});
}
getMostFollowers('elie', 'tigarcia', 'colt').then((data) => {
	console.log(data);
});

function starWarsString(id) {
	let string = '';
	return $.getJSON(`https://swapi.dev/api/people/${id}/`)
		.then((data) => {
			string += `${data.name} is featured in `;
			const filmData = data.films[0].replace('http', 'https');
			return $.getJSON(filmData);
		})
		.then((data) => {
			string += `${data.title}, directed by ${data.director} `;
			const planetData = data.planets[0].replace('http', 'https');
			return $.getJSON(planetData);
		})
		.then((data) => {
			string += `and it takes place on ${data.name}`;
			return string;
		})
		.then((finalString) => {
			return finalString;
		});
}

// generators
function* pauseAndReturnValues(num) {
	for (let i = 0; i < num; i++) yield i;
}
const gen = pauseAndReturnValues(5);
gen.next(); //{value: 0, done: false}
gen.next(); //{value: 1, done: false}
gen.next(); //{value: 2, done: false}
gen.next(); //{value: 3, done: false}
gen.next(); //{value: 4, done: false}
gen.next(); //{value: undefined, done: true}

// Object.assign
const o = { instructors: [ 'Elie', 'Tim' ] };
const o2 = Object.assign({}, o);

// Array.from
const divs = document.querySelectorAll('div');
const converted = Array.from(divs);

const firstSet = new Set([ 1, 2, 3, 4, 3, 2, 1 ]); // {1,2,3,4}
const arrayFromSet = Array.from(firstSet); // [1,2,3,4]

// find
const instructors = [
	{ name: 'Elie' },
	{ name: 'Matt' },
	{ name: 'Tim' },
	{ name: 'Colt' }
];
instructors.find((val) => val.name === 'Tim'); // {name: 'Tim'}

// findIndex
const instructors = [
	{ name: 'Elie' },
	{ name: 'Matt' },
	{ name: 'Tim' },
	{ name: 'Colt' }
];
instructors.findIndex((val) => val.name === 'Tim'); // 2

// includes
'awesome'.includes('some'); // true

// Number.isFinite
function seeIfNumber(val) {
	if (Number.isFinite(val)) return 'It is a number!';
}

/* 
Write a function called copyObject, which accepts one parameter, an object. The function should return a shallow copy of the object.

var o = {name: 'Elie'}
var o2 = copyObject({}, o)
o2.name = "Tim"
o2.name // 'Tim'
o.name // 'Elie'
*/

function copyObject(obj, old) {
	return Object.assign(obj, old);
}

/* 

Write a function called checkIfFinite which accepts one parameter and returns true if that parameter is a finite number.

checkIfFinite(4) // true
checkIfFinite(-3) // true
checkIfFinite(4. // .toEqual(true
checkIfFinite(NaN) // false
checkIfFinite(Infinity) // false
*/

function checkIfFinite(num) {
	return Number.isFinite(num);
}

/*

Write a function called areAllNumbersFinite which accepts an array and returns true if every single value in the array is a finite number, otherwise return false.

var finiteNums = [4,-3,2.2]
var finiteNumsExceptOne = [4,-3,2.2,NaN]
areAllNumbersFinite(finiteNums) // true
areAllNumbersFinite(finiteNumsExceptOne) // false
*/

function areAllNumbersFinite(arr) {
	let finite = true;
	arr.forEach((num) => {
		if (!Number.isFinite(num)) finite = false;
	});
	if (finite) return true;
	else return false;
	// return arr.every(Number.isFinite);
}

/* 

Write a function called convertArrayLikeObject which accepts a single parameter, an array like object. The function should return the array like object converted to an array.

var divs = document.getElementsByTagName('div')
divs.reduce // undefined

var converted = convertArrayLikeObject(divs)
converted.reduce // funciton(){}...
*/

function convertArrayLikeObject(obj) {
	return Array.from(obj);
}

/*

Write a function called displayEvenArguments which accepts a variable number of arguments and returns a new array with all of the arguments that are even numbers.

displayEvenArguments(1,2,3,4,5,6) // [2,4,6]
displayEvenArguments(7,8,9) // [8]
displayEvenArguments(1,3,7) // []
*/

function displayEvenArguments(...nums) {
	return nums.filter((num) => !(num % 2));
}
