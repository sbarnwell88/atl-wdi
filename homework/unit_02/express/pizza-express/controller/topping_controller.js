var express = require('express');

var router = express.Router();

router.get('/:type', (req, res, next) => {
    res.send(`${req.params.type} pizza! Good Choice.`);
})



module.exports = router;