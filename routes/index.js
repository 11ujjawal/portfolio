const express = require('express');
const router = express.Router();

router.get('/error/500', (req, res, next) => {
    res.render('error', {
        title: 'Error 500',
        message: 'Unknown Error',
        error: {
            status: 'An unknown error occurred',
            stack: ''
        }
    });
});

router.get('/', (req, res, next) => {
    res.render('index', {
        title: "Ujjawal | Web Portfolio"
    });
});

module.exports = router;
