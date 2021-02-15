const initialState = {
	todos: [],
	id: 0
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_TODO':
			var newState = { ...state };
			newState.id++;
			return {
				...newState,
				todos: [
					...newState.todos,
					{ task: action.task, id: newState.id }
				]
			};
		case 'REMOVE_TODO':
			let todos = state.todos.filter((val) => val.id !== +action.id);
			return { ...state, todos };
		default:
			return state;
	}
}

const store = Redux.createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

$(document).ready(() => {
	$('ul').on('click', 'button', (event) => {
		store.dispatch({
			type: 'REMOVE_TODO',
			id: $(event.target).attr('id')
		});
		$(event.target).parent().remove();
	});

	$('form').on('submit', (e) => {
		e.preventDefault();
		let newTask = $('#task').val();
		store.dispatch({
			type: 'ADD_TODO',
			task: newTask
		});
		let $newLi = $('<li>', { text: newTask });
		let $newButton = $('<button>', {
			text: 'X',
			id: store.getState().id
		});
		$newLi.append($newButton);
		$('#todos').append($newLi);
		$('form').trigger('reset');
	});
});
