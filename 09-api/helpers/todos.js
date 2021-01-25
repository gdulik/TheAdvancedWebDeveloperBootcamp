// Require models directory
const db = require('../models');

// List all todos
exports.getTodos = (req, res) => {
	db.Todo
		.find()
		.then((todos) => {
			res.json(todos);
		})
		.catch((err) => {
			res.send(err);
		});
};

// Create new todo
exports.createTodo = (req, res) => {
	db.Todo
		.create(req.body)
		.then((newTodo) => {
			res.status(201).json(newTodo);
		})
		.catch((err) => {
			res.send(err);
		});
};

// Retrieve a todo
exports.getTodo = (req, res) => {
	db.Todo
		.findById(req.params.todoId)
		.then((foundTodo) => {
			res.json(foundTodo);
		})
		.catch((err) => {
			res.send(err);
		});
};

// Update a todo
exports.updateTodo = (req, res) => {
	db.Todo
		.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
		.then((todo) => {
			res.json(todo);
		})
		.catch((err) => {
			res.send(err);
		});
};

// Delete a todo
exports.deleteTodo = (req, res) => {
	db.Todo
		.findByIdAndRemove(req.params.todoId)
		.then(() => {
			res.json({ message: 'Deleted' });
		})
		.catch((err) => {
			res.send(err);
		});
};

// Export all route functions
module.exports = exports;
