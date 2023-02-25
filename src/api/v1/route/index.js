const express = require('express');

const app = express();

/* mount all the route files here */
app.use('/test', require('./test')) // TODO: remove this test route

module.exports = app;