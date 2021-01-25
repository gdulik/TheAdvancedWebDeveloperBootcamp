// Require and setup express and router
const express = require('express');
const router = express.Router();

// Require models directory
const db = require('../models');

// Setup router
// List all todos
router.get('/', (req, res) => {
	db.Todo
		.find()
		.then((todos) => {
			res.json(todos);
		})
		.catch((err) => {
			res.send(err);
		});
});

// Create new todo
router.post('/', (req, res) => {
	db.Todo
		.create(req.body)
		.then((newTodo) => {
			res.status(201).json(newTodo);
		})
		.catch((err) => {
			res.send(err);
		});
});

// Retrieve a todo
router.get('/:todoId', (req, res) => {
	db.Todo
		.findById(req.params.todoId)
		.then((foundTodo) => {
			res.json(foundTodo);
		})
		.catch((err) => {
			res.send(err);
		});
});

// Update a todo
router.put('/:todoId', (req, res) => {
	db.Todo
		.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
		.then((todo) => {
			res.json(todo);
		})
		.catch((err) => {
			res.send(err);
		});
});

// Delete a todo
router.delete('/:todoId', (req, res) => {
	db.Todo
		.findByIdAndRemove(req.params.todoId)
		.then(() => {
			res.json({ message: 'Deleted' });
		})
		.catch((err) => {
			res.send(err);
		});
});

// Export router
module.exports = router;
