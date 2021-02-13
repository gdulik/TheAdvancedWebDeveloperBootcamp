let initialState = {
	count: 0
};
// Create reducer
function rootReducer(state = initialState, action) {
	// Reducer functions should be pure
	if (action.type === 'INCREMENT') {
		let newState = Object.assign({}, state);
		newState.count++;
		return newState;
	}
	if (action.type === 'DECREMENT') {
		let newState = Object.assign({}, state);
		newState.count--;
		return newState;
	}
	return state;
}
// Create store
let store = Redux.createStore(rootReducer);

store.getState(); // {count: 0}
store.dispatch({ type: 'INCREMENT' });
store.getState(); // {count: 1}

// Action creators
function increment() {
	return {
		type: 'INCREMENT'
	};
}

store.dispatch(increment());
