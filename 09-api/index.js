// Require all modules
const express = require('express');
const bodyParser = require('body-parser');

// Setup express
const app = express();

// Setup environmental variables
const port = process.env.PORT || 3000;

// Require routes for todos
const todoRoutes = require('./routes/todos');

// Setup body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('Hello');
});

// Use routes for todos with prefix
app.use('/api/todos', todoRoutes);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
