const initialState = {
	count: 0
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT':
			var newState = { ...state };
			newState.count++;
			return newState;
		case 'DECREMENT':
			var newState = { ...state };
			newState.count--;
			return newState;
		default:
			return state;
	}
}

const store = Redux.createStore(rootReducer);

function increment() {
	return {
		type: 'INCREMENT'
	};
}

function decrement() {
	return {
		type: 'DECREMENT'
	};
}

$(document).ready(() => {
	$('#counter').text(store.getState().count);
	$('#increment').on('click', () => {
		store.dispatch(increment());
		$('#counter').text(store.getState().count);
	});

	$('#decrement').on('click', () => {
		store.dispatch(decrement());
		$('#counter').text(store.getState().count);
	});
});
