var express = require('express');

var router = express.Router();

router.get('/:amount/:size', (req, res, next) => {
    res.send(`Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`);
})



module.exports = router;