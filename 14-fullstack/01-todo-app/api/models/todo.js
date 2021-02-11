const mongoose = require('mongoose');

// Set schema
const todoSchema = new mongoose.Schema({
	name: {
		type: String,
		required: 'Name cannot be blank!'
	},
	completed: {
		type: Boolean,
		default: false
	},
	createdDate: {
		type: Date,
		default: Date.now
	}
});

// Compile schema
const Todo = mongoose.model('Todo', todoSchema);

// Export schema
module.exports = Todo;
