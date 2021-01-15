function forEach(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr);
	}
}

const strings = [ 'my', 'forEach', 'example' ];
let result = '';
forEach(strings, function(str, index, array) {
	if (array.length - 1 !== index) {
		result += str + ' ';
	} else {
		result += str + '!!!';
	}
});

console.log(result);
