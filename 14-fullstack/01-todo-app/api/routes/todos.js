// Require and setup express and router
const express = require('express');
const router = express.Router();

// Require models directory
const db = require('../models');

// Require helpers for router
const helpers = require('../helpers/todos');

// Setup router
router.route('/').get(helpers.getTodos).post(helpers.createTodo);

router
	.route('/:todoId')
	.get(helpers.getTodo)
	.put(helpers.updateTodo)
	.delete(helpers.deleteTodo);

// Export router
module.exports = router;
