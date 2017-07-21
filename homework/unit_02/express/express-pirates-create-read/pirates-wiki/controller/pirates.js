var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//all routes for /pirate
router.get('/', (req, res) => {
    res.render('index', {
        data: pirates.name
    })
});

router.get('/new', (req, res) => {
    res.render('new', {

    })
});

router.get('/:id', (req, res) => {
    res.render('show', {
        data: 'hello'
    })
});


router.post('/', (req, res) => {
    console.log(req.body);
    const pirateNames = {
        description: req.body.description,
        urgent: req.body.urgent
    };
    data.seededTodos.push(pirateNames);
    res.redirect('/todos');
});

//exports
module.exports = router;
