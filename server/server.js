const express = require('express');
const path = require('path');
const routes = require('./routes.js');
const app = express();
const port = process.env.PORT || 5000;
const node_env = process.env.NODE_ENV || 'development';

// Serve frontend assets in production mode
if (process.env.NODE_ENV == 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}

// Serve backend endpoints
app.use('/api', routes);

// Route all other requests for frontend app in production mode
if (process.env.NODE_ENV == 'production') {
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname+'../client/build/index.html'));
	});
}

app.listen(port, () => console.log(`Backend service running in ${node_env} mode listening on port ${port}!`));

module.exports = app;
