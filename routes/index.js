const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const skill = JSON.parse(fs.readFileSync(path.join(__dirname, '../views/skill.json')));

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
        title: "Ujjawal | Web Portfolio",
        skill: skill
    });
});

module.exports = router;
