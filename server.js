const express = require('express');
const hbs = require('express-hbs');
const path = require('path');
const routes = require('./routes');
const app = express();


app.engine('hbs', hbs.express4());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/vendors', express.static(path.join(__dirname, 'bower_components')));

app.use('/', routes);

app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
