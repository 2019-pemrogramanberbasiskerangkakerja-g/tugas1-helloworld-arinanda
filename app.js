const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 1212;

require('./routes')(app);

app.set('port', port);
server.listen(port);

module.exports = app;