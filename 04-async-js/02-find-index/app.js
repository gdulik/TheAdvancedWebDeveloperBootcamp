const findIndex = (array, callback) => {
	for (let i = 0; i < array.length; i++) {
		if (callback(array[i], i, array)) {
			return i;
		}
	}
	return -1;
};

const arr1 = [ 3, 4, 6, 2, 1 ];

findIndex(arr1, (num, index, array) => {
	return num === 6;
});

const arr2 = [ 5, 11, 13, 8, 6, 7 ];

findIndex(arr2, (num, index, array) => {
	return num % 2 === 0;
});

const langs = [ 'Java', 'C++', 'Python', 'Ruby' ];

findIndex(langs, (lang, index, array) => {
	return lang === 'JavaScript';
});
