function outer() {
	const start = 'Closures are';
	return function inner() {
		return `${start} awesome`;
	};
}

function outer(a) {
	return function inner(b) {
		return a + b;
	};
}

outer(5)(5); // 10

const storeOuter = outer(5);
storeOuter(10); // 15

function outerFn() {
	const data = 'something from outerFn';
	const fact = 'Remember me!';
	return function innerFn() {
		debugger;
		return fact;
	};
}
outerFn()();

// Private variables

function counter() {
	let count = 0;
	return function inner() {
		count++;
		return count;
	};
}

const counter1 = counter();
counter1(); // 1
counter1(); // 2

const counter2 = counter();
counter2(); // 1
counter2(); // 2

counter1(); // 3

function classRoom() {
	const instructors = [ 'Elie', 'Colt' ];
	return {
		getInstructors: function() {
			return instructors.slice();
		},
		addInstructor: function(instructor) {
			instructors.push(instructor);
			return instructors.slice();
		}
	};
}

const course1 = classRoom();
course1.getInstructors(); // ['Elie', 'Colt']
course1.addInstructor('Matt'); // ['Elie', 'Colt', 'Matt']
course1.addInstructor('Tim'); // ['Elie', 'Colt', 'Matt', 'Tim']

const course2 = classRoom();
course2.addInstructor('New'); // ['Elie', 'Colt', 'New']

course1.getInstructors(); // ['Elie', 'Colt', 'Matt', 'Tim']

/* 
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

Examples: 

    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/

function specialMultiply(a, b) {
	if (a && b) return a * b;
	return function inner(b) {
		return a * b;
	};
}

function specialMultiply(a, b) {
	if (arguments.length === 2) return a * b;
	return function inner(b) {
		return a * b;
	};
}

/* 
Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You are all done playing!"

    var game2 = guessingGame(3)
    game2(5) // "You're too low!"
    game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0"
    game2(1) // "You are all done playing!"
*/

function guessingGame(amount) {
	const answer = Math.floor(Math.random() * 11);
	let guesses = 0;
	let done = false;
	return function inner(guess) {
		guesses++;
		if (guesses >= amount) {
			if (done) {
				return 'You are all done playing!';
			} else {
				done = true;
				return `No more guesses the answer was ${answer}`;
			}
		}
		if (guess === answer) {
			done = true;
			return 'You got it!';
		} else if (guess > answer) {
			return 'Your guess is too high!';
		} else if (guess < answer) {
			return 'Your guess is too low!';
		}
	};
}

function guessingGame(amount) {
	const answer = Math.floor(Math.random() * 11);
	let guesses = 0;
	let done = false;
	return function inner(guess) {
		if (!done) {
			guesses++;
			if (guess === answer) {
				done = true;
				return 'You got it!';
			} else if (guess > answer) {
				return 'Your guess is too high!';
			} else if (guess < answer) {
				return 'Your guess is too low!';
			} else if (guesses === amount) {
				done = true;
				return `No more guesses the answer was ${answer}`;
			}
		}
		return 'You are all done playing!';
	};
}
