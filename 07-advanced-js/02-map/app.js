const arr = [ 1, 2, 3 ];

arr.map((value, index, array) => {
	return value * 2;
});

const map = (arr, callback) => {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(callback(arr[i], i, arr));
	}
	return newArr;
};

map(arr, (value, index, array) => {
	return value * 2;
});

function tripleValues(arr) {
	return arr.map(function(value) {
		return value * 3;
	});
}

tripleValues([ 1, 2, 3 ]);

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr) {
	return arr.map((value) => {
		return value * 2;
	});
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
	return arr.map((value, index) => {
		return value * index;
	});
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
	return arr.map((obj) => {
		return obj[key];
	});
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
	return arr.map((obj) => {
		return `${obj.first} ${obj.last}`;
	});
}
