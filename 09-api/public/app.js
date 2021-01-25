$(document).ready(() => {
	$.getJSON('/api/todos').then(addTodos);
	$('#todoInput').keypress((event) => {
		if (event.which == 13) {
			createTodo();
		}
	});
	$('.list').on('click', 'li', function() {
		updateTodo($(this));
	});
	$('.list').on('click', 'span', function(e) {
		e.stopPropagation();
		removeTodo($(this).parent());
	});
});

const addTodos = (todos) => {
	todos.forEach((todo) => addTodo(todo));
};

const addTodo = (todo) => {
	const newTodo = $(`<li class="task">${todo.name}<span>X</span></li>`);
	newTodo.data('id', todo._id);
	newTodo.data('completed', todo.completed);
	if (todo.completed) {
		newTodo.addClass('done');
	}
	$('.list').append(newTodo);
};

const createTodo = () => {
	const userInput = $('#todoInput').val();
	$.post('/api/todos', { name: userInput })
		.then((newTodo) => {
			addTodo(newTodo);
			$('#todoInput').val('');
		})
		.catch((err) => {
			console.log(err);
		});
};

const removeTodo = (todo) => {
	const clickedId = todo.data('id');
	$.ajax({
		method: 'DELETE',
		url: `/api/todos/${clickedId}`
	})
		.then((data) => {
			todo.remove();
		})
		.catch((err) => {
			console.log(err);
		});
};

const updateTodo = (todo) => {
	const clickedId = todo.data('id');
	const isDone = !todo.data('completed');
	const updateData = { completed: isDone };
	$.ajax({
		method: 'PUT',
		url: `/api/todos/${clickedId}`,
		data: updateData
	}).then((updatedTodo) => {
		todo.toggleClass('done');
		todo.data('completed', isDone);
	});
};
