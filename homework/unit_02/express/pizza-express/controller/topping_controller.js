var express = require('express');

var router = express.Router();

router.get('/:type', (req, res, next) => {
    res.render('toppings', {
        data: `${req.params.type}`
    });
})



module.exports = router;