// Loads environmental variables to process.env.___
require('dotenv').config();
// Loads dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// Loads handlers
const errorHandler = require('./handlers/error');
// Loads routes
const authRoutes = require('./routes/auth');

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

// Use routes with prefix
app.use('/api/auth', authRoutes);

app.use((req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Every error goes through errorHandler
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is starting on port ${PORT}`);
});
