import React, { Component } from 'react';
import './App.css';

const Item = ({ todo }) => {
	return <li>{todo}</li>;
};

class App extends Component {
	constructor(props) {
		super(props);
		const todos = Array();
		this.state = { todos, todo: '' };
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		const todos = [ ...this.state.todos, this.state.todo ];
		this.setState({ todos, todo: '' });
	}
	render() {
		const { todo } = this.state;
		const todos = this.state.todos.map((todo, idx) => (
			<Item key={idx} todo={todo} />
		));
		return (
			<div className="App">
				<h1>Simple Todo App</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						className="todo-input"
						autoComplete="off"
						type="text"
						placeholder="What needs to be done?"
						name="todo"
						value={todo}
						onChange={(e) => {
							this.setState({ [e.target.name]: e.target.value });
						}}
					/>
					<button className="save-button" type="submit">
						SAVE
					</button>
				</form>
				<div className="todo-content">
					<ol>{todos}</ol>
				</div>
			</div>
		);
	}
}

export default App;
