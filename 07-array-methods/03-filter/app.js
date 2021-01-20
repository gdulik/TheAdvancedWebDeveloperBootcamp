const arr = [ 1, 2, 3 ];

arr.filter((value, index, array) => {
	return value > 2;
});

const instructors = [
	{ name: 'Elie' },
	{ name: 'Tim' },
	{ name: 'Matt' },
	{ name: 'Colt' }
];

instructors.filter((value) => {
	return value.name.length > 3;
});

const filter = (arr, callback) => {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) newArr.push(arr[i]);
	}
	return newArr;
};

filter(instructors, (value) => {
	return value.name.length > 3;
});

function onlyFourLetterNames(arr) {
	return arr.filter(function(value) {
		return value.length === 4;
	});
}

onlyFourLetterNames([ 'Rusty', 'Matt', 'Moxie', 'Colt' ]);

function divisibleByThree(arr) {
	return arr.filter(function(value) {
		return value % 3 === 0;
	});
}

divisibleByThree([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
	return arr.filter((obj) => {
		return obj[key] !== undefined;
	});
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
	return arr.filter((val) => {
		return val === searchValue;
	})[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
	return arr.filter((value) => {
		return value[key] === searchValue;
	})[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
	const vowels = 'aeiou';
	return str
		.toLowerCase()
		.split('')
		.filter((value) => {
			return vowels.indexOf(value) === -1;
		})
		.join('');
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
	return arr
		.filter((value) => {
			return value % 2 === 1;
		})
		.map((value) => {
			return value * 2;
		});
}
