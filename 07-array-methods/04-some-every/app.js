const arr = [ 1, 2, 3 ];

// SOME
arr.some(function(value, index, array) {
	return value < 2;
});

const some = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) return true;
	}
	return false;
};

function hasEvenNumber(arr) {
	return arr.some(function(value) {
		return value % 2 === 0;
	});
}

hasEvenNumber([ 1, 2, 3, 4 ]);
hasEvenNumber([ 1, 3, 5 ]);

function hasComma(str) {
	return str.split('').some(function(value) {
		return value === ',';
	});
}

hasComma('This is wonderful');
hasComma('This, is wonderful');

// EVERY
arr.every(function(value, index, array) {
	return value > 0;
});

const every = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (!callback(arr[i], i, arr)) return false;
	}
	return true;
};

function allLowerCase(str) {
	return str.split('').every(function(value) {
		return value === value.toLowerCase();
	});
}

allLowerCase('this is really nice');
allLowerCase('this is Really nice');

function allArrays(arr) {
	return arr.every(Array.isArray);
}

allArrays([ [ 1 ], [ 2 ], [ 3, 4 ] ]);
allArrays([ [ 1 ], [ 2 ], {} ]);

/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr) {
	return arr.some((value) => {
		return value % 2 === 1;
	});
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num) {
	return num.toString().split('').some((value) => {
		return value === '0';
	});
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr) {
	return arr.every((value) => {
		return value % 2 === 1;
	});
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr) {
	const obj = {};
	return arr.every((value) => {
		if (obj[value]) return false;
		obj[value] = 1;
		return true;
	});
}

function hasNoDuplicates(arr) {
	return arr.every((value) => {
		return arr.indexOf(value) === arr.lastIndexOf(value);
	});
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key) {
	return arr.every((obj) => {
		return obj[key];
	});
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue) {
	return arr.every((obj) => {
		return obj[key] === searchValue;
	});
}
