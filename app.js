var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./main/routes');

const ENV = process.env.ENV || "development";
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const knexLogger = require("knex-logger");


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (true) {
    // if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    // app.get('/*', (req, res) => {
    //     console.log("app get /* ...");
    //     console.log(__dirname);
    //     res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    // });

    // app.get('/GetUserName', function (req, res) {
    //     console.log("get user name");
    //     knex.select().from("users").where('uid', '=', '1')
    //         .then((results) => {
    //             console.log(results[0]);
    //             res.json(results[0]);
    //         }).catch(err => console.error(err));
    // });
}

app.use('/', indexRouter);

/**
 * Module dependencies.
 */
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8080');
app.set('port', port);


/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
console.log("listen on port: " + port);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
