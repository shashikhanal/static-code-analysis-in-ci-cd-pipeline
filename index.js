const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// instance of Express
const app = express();

// middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes
app.get('/', (req, res) => {
	res.send('Hello, World.');
});

// error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something went wrong.');
});

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
