const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Server');
    res.send('Hello there');
});

module.exports = app;
