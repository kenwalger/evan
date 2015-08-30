'use strict';

var express = require('express'),
    hbs = require('hbs'),
    path = require('path');

var routes = require('./src/routes/index');


var app = express();

//Handlebars partials setup
hbs.registerPartials(__dirname + '/src/views/partials')

app.use(express.static(path.join(__dirname, '/src/public')));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/src/views');




//ROUTES

app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(request, response, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, request, response, next) {
        response.status(err.status || 500);
        response.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, request, response, next) {
    response.status(err.status || 500);
    response.render('error', {
        message: err.message,
        error: {}
    });
});



//SERVER
app.listen(3000, function() {
   console.log("\nThe Express front-end server is running on port 3000");
});

module.exports = app;