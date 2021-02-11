import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Homepage = () => <div>HOMEPAGE</div>;

const About = () => <div>ABOUT</div>;

const SwitchDemo = () => (
	<Switch>
		<Route exact path="/" component={Homepage} />
		<Route exact path="/about" component={About} />
	</Switch>
);

export default SwitchDemo;
