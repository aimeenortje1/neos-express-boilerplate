const express = require('express');
const routes = require('./routes.js');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', routes);

app.listen(port, () => console.log(`Service listening on port ${port}!`));

module.exports = app;
