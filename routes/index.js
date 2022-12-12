const express = require('express');

// Import our modular routers for /apiRoute
const apiRoute = require('./apiRoute');

const app = express();
//http://localhost:3001/api/notes
app.use('/notes', apiRoute);

module.exports = app;