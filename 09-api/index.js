// Require all modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Setup express
const app = express();

// Setup environmental variables
const port = process.env.PORT || 3000;

// Require routes for todos
const todoRoutes = require('./routes/todos');

// Setup body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set path to serve static content
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

// Use todos routes with prefix
app.use('/api/todos', todoRoutes);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
