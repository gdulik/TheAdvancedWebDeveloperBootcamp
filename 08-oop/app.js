function House(bedrooms, bathrooms, numSqft) {
	this.bedrooms = bedrooms;
	this.bathrooms = bathrooms;
	this.numSqft = numSqft;
}

const firstHouse = new House(2, 2, 1000);

function Dog(name, age) {
	this.name = name;
	this.age = age;
	this.bark = () => {
		console.log(`${this.name} just barked!`);
	};
}

const rusty = new Dog('Rusty', 3);

class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
}

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}
}

// PART 1

// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person.

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite number.

class Person {
	constructor(firstName, lastName, favouriteColour, favouriteNumber) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.favouriteColour = favouriteColour;
		this.favouriteNumber = favouriteNumber;
	}
	multiplyFavouriteNumber(number) {
		return this.favouriteNumber * number;
	}
}

// PART 2

// Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.

class Parent {
	constructor(firstName, lastName, favoriteColor, favoriteFood) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.favoriteColor = favoriteColor;
		this.favoriteFood = favoriteFood;
	}
}

class Child extends Parent {
	constructor(firstName, lastName, favoriteColor, favoriteFood) {
		super(firstName, lastName, favoriteColor, favoriteFood);
	}
}

class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.isRunning = false;
	}
	turnOn() {
		this.isRunning = true;
	}
	turnOff() {
		this.isRunning = false;
	}
	honk() {
		if (this.isRunning) {
			return 'beep!';
		}
	}
}

// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)

/* 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/

// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you going back and adding an additional line of code to your Person constructor you previously created in exercise 1.

/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.


Examples: 
    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1
    
    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/

class Person {
	constructor(firstName, lastName, favoriteColor, favoriteNumber) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.favoriteColor = favoriteColor;
		this.favoriteNumber = favoriteNumber;
		this.family = [];
	}
	fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
	addToFamily(member) {
		if (member instanceof Person) {
			this.family.push(member);
			if (new Set(this.family).size !== this.family.length) {
				this.family.pop(member);
			}
			// if(this.family.indexOf(member) === -1 && member instanceof Person){
			// 	this.family.push(member);
			// }
		}
		return this.family.length;
	}
}

// PART II

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array.

/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"
*/

Array.prototype.map = function(cb) {
	const arr = [];
	let index = 0;
	for (let item of this) {
		arr.push(cb(item, index, this));
		index++;
	}
	// for(let i = 0; i < this.length; i++) {
	// 	arr.push(cb(this[i], i, this))
	// }
	return arr;
};

String.prototype.reverse = function() {
	return this.split('').reverse().join('');
};

// 1 - Create a constructor function for a Vehicle. Each vehicle should have a make, model and year property.

// 2 - Add a function to the Vehicle prototype called start which returns the string "VROOM!"

// 3 - Add a function to the Vehicle prototype called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a constructor function for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

// 5 - Create a constructor function for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype

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
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}
}
