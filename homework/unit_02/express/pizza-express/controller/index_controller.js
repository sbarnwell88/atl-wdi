var express = require('express');

var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        data: 'Pizza Express',
    });
})



module.exports = router;