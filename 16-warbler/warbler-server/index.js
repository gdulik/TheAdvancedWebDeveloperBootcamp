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
const messagesRoutes = require('./routes/messages');
// Loads middleware
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');

const db = require('./models');
const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

// Use routes with prefix
app.use('/api/auth', authRoutes);
app.use(
	'/api/users/:id/messages',
	loginRequired,
	ensureCorrectUser,
	messagesRoutes
);

app.get('/api/messages', loginRequired, async function(req, res, next) {
	try {
		let messages = await db.Message
			.find()
			.sort({ createdAt: 'desc' })
			.populate('user', {
				username: true,
				profileImageUrl: true
			});
		return res.status(200).json(messages);
	} catch (err) {
		return next(err);
	}
});

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
